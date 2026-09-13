"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { SiteContent } from "@/lib/types";

type Field = { key: string; textarea?: boolean; checkbox?: boolean };

const simpleSections: {
  key: keyof SiteContent;
  title: string;
  hint: string;
  fields: Field[];
}[] = [
  {
    key: "services",
    title: "Service Times",
    hint: "Weekly services shown in the hero and Services section.",
    fields: [
      { key: "day" },
      { key: "time" },
      { key: "title" },
      { key: "description", textarea: true },
    ],
  },
  {
    key: "ministries",
    title: "Ministries",
    hint: "The ministry cards on the homepage.",
    fields: [
      { key: "name" },
      { key: "description", textarea: true },
    ],
  },
  {
    key: "beliefs",
    title: "What We Believe",
    hint: "Doctrine cards under Our Faith.",
    fields: [
      { key: "title" },
      { key: "verse" },
      { key: "text", textarea: true },
    ],
  },
  {
    key: "events",
    title: "Events",
    hint: "Upcoming events and weekly gatherings.",
    fields: [
      { key: "title" },
      { key: "date" },
      { key: "time" },
      { key: "description", textarea: true },
    ],
  },
  {
    key: "giving",
    title: "Giving",
    hint: "Ways to give to the ministry.",
    fields: [
      { key: "name" },
      { key: "description", textarea: true },
      { key: "verse" },
    ],
  },
  {
    key: "scriptures",
    title: "Scripture Slideshow",
    hint: "These verses rotate automatically on the homepage.",
    fields: [
      { key: "verse", textarea: true },
      { key: "reference" },
    ],
  },
];

const sermonFields: Field[] = [
  { key: "title" },
  { key: "speaker" },
  { key: "date" },
  { key: "passage" },
  { key: "description", textarea: true },
  { key: "audioUrl" },
  { key: "videoUrl" },
  { key: "youtubeId" },
];

const leaderFields: Field[] = [
  { key: "name" },
  { key: "role" },
  { key: "bio", textarea: true },
  { key: "photo" },
];

const branchFields: Field[] = [
  { key: "name" },
  { key: "isHeadquarters", checkbox: true },
  { key: "address", textarea: true },
  { key: "phone" },
  { key: "serviceTimes" },
  { key: "mapUrl" },
];

function emptyItem(fields: Field[]) {
  const item: Record<string, string | boolean> = {};
  for (const f of fields) {
    item[f.key] = f.checkbox ? false : "";
  }
  return item;
}

function FieldInput({
  field,
  value,
  onChange,
  photoUpload,
}: {
  field: Field;
  value: string | boolean;
  onChange: (v: string | boolean) => void;
  photoUpload?: (cb: (url: string) => void) => void;
}) {
  if (field.checkbox) {
    return (
      <label className="flex cursor-pointer items-center gap-2.5">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 accent-gold-600"
        />
        <span className="text-sm font-medium text-night-900">Headquarters</span>
      </label>
    );
  }
  if (field.key === "photo") {
    return (
      <div className="flex items-end gap-3">
        {typeof value === "string" && value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={value}
            alt="Leader"
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : null}
        <button
          type="button"
          onClick={() =>
            photoUpload?.((url) => {
              onChange(url);
            })
          }
          className="rounded-lg border border-night-900/15 px-4 py-2 text-sm font-medium text-night-900 transition-colors hover:border-gold-600/50"
        >
          {typeof value === "string" && value ? "Change Photo" : "Upload Photo"}
        </button>
      </div>
    );
  }
  if (field.textarea) {
    return (
      <textarea
        value={String(value ?? "")}
        onChange={(e) => onChange(e.target.value)}
        rows={2}
        className="rounded-lg border border-night-900/15 bg-cream-50 px-3 py-2 text-sm outline-none focus:border-gold-600"
      />
    );
  }
  return (
    <input
      type="text"
      value={String(value ?? "")}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-night-900/15 bg-cream-50 px-3 py-2 text-sm outline-none focus:border-gold-600"
    />
  );
}

export function AdminEditor({ initialContent }: { initialContent: SiteContent }) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [tab, setTab] = useState<string>("site");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const setTop = (key: string, value: string) =>
    setContent((c) => ({ ...c, [key]: value } as SiteContent));

  const setSite = <K extends keyof SiteContent>(key: K, value: SiteContent[K]) =>
    setContent((c) => ({ ...c, [key]: value } as SiteContent));

  function updateList(key: keyof SiteContent, index: number, fieldKey: string, value: string | boolean) {
    setContent((c) => {
      const list = (c[key] as unknown as Record<string, unknown>[]).map((item, i) =>
        i === index ? { ...item, [fieldKey]: value } : item,
      );
      return { ...c, [key]: list } as SiteContent;
    });
  }

  function addItem(key: keyof SiteContent, fields: Field[]) {
    setContent((c) => {
      const list = c[key] as unknown as Record<string, unknown>[];
      return { ...c, [key]: [...list, emptyItem(fields)] } as SiteContent;
    });
  }

  function removeItem(key: keyof SiteContent, index: number) {
    setContent((c) => {
      const list = (c[key] as unknown[]).filter((_, i) => i !== index);
      return { ...c, [key]: list } as SiteContent;
    });
  }

  function moveItem(key: keyof SiteContent, index: number, dir: -1 | 1) {
    setContent((c) => {
      const list = [...(c[key] as unknown[])];
      const to = index + dir;
      if (to < 0 || to >= list.length) return c;
      [list[index], list[to]] = [list[to], list[index]];
      return { ...c, [key]: list } as SiteContent;
    });
  }

  async function save() {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: JSON.stringify(content, null, 2) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: "err", text: data.error || "Save failed" });
      } else {
        setStatus({
          type: "ok",
          text: process.env.NODE_ENV === "production"
            ? "Saved. The site will rebuild and update within a minute."
            : "Saved locally. Refresh the homepage to see changes.",
        });
      }
    } catch {
      setStatus({ type: "err", text: "Network error — could not save." });
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function uploadPhotos(dir: string, files: File[], onDone: (urls: string[]) => void) {
    const fd = new FormData();
    fd.set("dir", dir);
    for (const f of files) fd.append("files", f);
    try {
      const res = await fetch("/api/admin/images", { method: "POST", body: fd });
      const data = await res.json();
      if (res.ok && data.urls?.length) {
        onDone(data.urls);
        setStatus({ type: "ok", text: `${data.urls.length} photo(s) uploaded.` });
      } else {
        setStatus({ type: "err", text: data.error || "Upload failed." });
      }
    } catch {
      setStatus({ type: "err", text: "Upload network error." });
    }
  }

  function galleryUpload(files: File[]) {
    void uploadPhotos("gallery", files, (urls) => {
      setContent((c) => ({
        ...c,
        gallery: [...c.gallery, ...urls.map((src) => ({ src, alt: "", caption: "" }))],
      }) as SiteContent);
    });
  }

  const tabs = useMemo(
    () => [
      { key: "site", label: "Site Info" },
      ...simpleSections.map((s) => ({ key: s.key, label: s.title })),
      { key: "gallery", label: "Gallery" },
      { key: "sermons", label: "Sermons" },
      { key: "leaders", label: "Leadership" },
      { key: "branches", label: "Branches" },
      { key: "links", label: "Navigation & Social" },
    ],
    [],
  );

  return (
    <div className="min-h-svh bg-cream-100">
      <div className="sticky top-0 z-30 border-b border-night-900/10 bg-night-950 px-4 py-3 text-cream-50 shadow-lg sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/15 font-serif font-bold text-gold-400">
              MG
            </span>
            <div>
              <p className="font-serif text-base font-semibold leading-tight">
                Admin Panel
              </p>
              <p className="text-xs text-cream-50/60">
                {content.name} · {content.address.city}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {status ? (
              <span
                className={`hidden max-w-xs truncate rounded-full px-3 py-1.5 text-xs sm:inline-block ${
                  status.type === "ok"
                    ? "bg-green-500/15 text-green-300"
                    : "bg-red-500/15 text-red-300"
                }`}
              >
                {status.text}
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => save()}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save Changes"}
            </button>
            <a
              href="/"
              target="_blank"
              className="hidden rounded-full border border-cream-50/20 px-4 py-2 text-sm text-cream-50/80 transition-colors hover:border-gold-400/60 sm:inline-flex"
            >
              View Site
            </a>
            <button
              type="button"
              onClick={() => logout()}
              className="rounded-full border border-cream-50/20 px-4 py-2 text-sm text-cream-50/80 transition-colors hover:border-red-400/60 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        </div>
        {status ? (
          <p
            className={`mt-2 text-xs sm:hidden ${
              status.type === "ok" ? "text-green-300" : "text-red-300"
            }`}
          >
            {status.text}
          </p>
        ) : null}
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tab === t.key
                  ? "bg-night-900 text-cream-50"
                  : "border border-night-900/15 bg-white text-night-900/70 hover:border-gold-600/50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* -------- SITE INFO -------- */}
        {tab === "site" ? (
          <div className="grid gap-6">
            <Card
              title="Church Identity"
              subtitle="Name, logo monogram, tagline and scripture of the month"
            >
              <Grid>
                <Field label="Full Name" value={content.name} onChange={(v) => setTop("name", v)} />
                <Field label="Short Name (nav)" value={content.shortName} onChange={(v) => setTop("shortName", v)} />
                <Field label="Monogram" value={content.monogram} onChange={(v) => setTop("monogram", v)} />
                <Field label="Tagline" value={content.tagline} onChange={(v) => setTop("tagline", v)} />
                <Field label="Header Verse" value={content.scripture.verse} onChange={(v) => setSite("scripture", { ...content.scripture, verse: v })} />
                <Field label="Header Verse Reference" value={content.scripture.reference} onChange={(v) => setSite("scripture", { ...content.scripture, reference: v })} />
              </Grid>
            </Card>

            <Card title="Contact & Address" subtitle="Phone and address shown across the site">
              <Grid>
                <Field label="Phone" value={content.phone} onChange={(v) => setTop("phone", v)} />
                <Field label="Email" value={content.email} onChange={(v) => setTop("email", v)} />
                <Field label="Street" value={content.address.street} onChange={(v) => setSiteAddress("street", v)} />
                <Field label="Landmark" value={content.address.landmark} onChange={(v) => setSiteAddress("landmark", v)} />
                <Field label="City / Country" value={content.address.city} onChange={(v) => setSiteAddress("city", v)} />
                <Field label="Google Maps query" value={content.address.googleMapsQuery} onChange={(v) => setSiteAddress("googleMapsQuery", v)} />
              </Grid>
            </Card>
          </div>
        ) : null}

        {/* -------- SIMPLE LIST SECTIONS -------- */}
        {simpleSections.map(
          (section) =>
            tab === section.key ? (
              <Card key={section.key} title={section.title} subtitle={section.hint}>
                <div className="space-y-4">
                  {(() => {
                    const items = content[section.key] as unknown as Record<string, string | boolean>[];
                    return items.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-night-900/10 bg-cream-50 p-4"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <p className="text-xs font-semibold uppercase tracking-wider text-night-900/50">
                            {section.title} #{i + 1}
                          </p>
                          <div className="flex gap-1">
                            <SmallBtn onClick={() => moveItem(section.key, i, -1)}>↑</SmallBtn>
                            <SmallBtn onClick={() => moveItem(section.key, i, 1)}>↓</SmallBtn>
                            <SmallBtn danger onClick={() => removeItem(section.key, i)}>
                              ✕
                            </SmallBtn>
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {section.fields.map((f) => (
                            <LabeledField key={f.key} label={f.key}>
                              <FieldInput
                                field={f}
                                value={item[f.key]}
                                onChange={(v) => updateList(section.key, i, f.key, v)}
                              />
                            </LabeledField>
                          ))}
                        </div>
                      </div>
                    ));
                  })()}
                </div>
                <AddButton label={`Add ${section.title.replace(/s$/, "")}`} onClick={() => addItem(section.key, section.fields)} />
              </Card>
            ) : null,
        )}

        {/* -------- GALLERY -------- */}
        {tab === "gallery" ? (
          <Card
            title="Photo Gallery & Slideshow"
            subtitle="These photos appear in the gallery slideshow. Upload, then set alt text and captions."
          >
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-full bg-night-900 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-night-800"
            >
              Upload Photos
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={(e) => {
                const files = Array.from(e.target.files ?? []);
                if (files.length) galleryUpload(files);
                e.target.value = "";
              }}
            />
            {content.gallery.length === 0 ? (
              <p className="mt-4 rounded-2xl border border-dashed border-night-900/20 p-8 text-center text-sm text-night-900/50">
                No photos yet. Click “Upload Photos” to start your gallery.
              </p>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {content.gallery.map((item, i) => (
                  <div
                    key={`${item.src}-${i}`}
                    className="rounded-2xl border border-night-900/10 bg-cream-50 p-3"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt || "Gallery photo"}
                      className="h-40 w-full rounded-xl object-cover"
                    />
                    <div className="mt-3 grid gap-2">
                      <input
                        type="text"
                        value={item.alt}
                        onChange={(e) => updateList("gallery", i, "alt", e.target.value)}
                        placeholder="Alt text (for Google)"
                        className="rounded-lg border border-night-900/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold-600"
                      />
                      <input
                        type="text"
                        value={item.caption ?? ""}
                        onChange={(e) => updateList("gallery", i, "caption", e.target.value)}
                        placeholder="Caption (shown on photo)"
                        className="rounded-lg border border-night-900/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold-600"
                      />
                      <div className="flex justify-between">
                        <div className="flex gap-1">
                          <SmallBtn onClick={() => moveItem("gallery", i, -1)}>↑</SmallBtn>
                          <SmallBtn onClick={() => moveItem("gallery", i, 1)}>↓</SmallBtn>
                        </div>
                        <SmallBtn danger onClick={() => removeItem("gallery", i)}>
                          Remove
                        </SmallBtn>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ) : null}

        {/* -------- SERMONS -------- */}
        {tab === "sermons" ? (
          <Card
            title="Sermons & Media"
            subtitle="Title, speaker and date plus audio/video/YouTube links. The sermon appears on the homepage."
          >
            <div className="space-y-4">
              {(content.sermons as unknown as Record<string, string>[]).map((item, i) => (
                <div key={i} className="rounded-2xl border border-night-900/10 bg-cream-50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-night-900/50">
                      Sermon #{i + 1}
                    </p>
                    <div className="flex gap-1">
                      <SmallBtn onClick={() => moveItem("sermons", i, -1)}>↑</SmallBtn>
                      <SmallBtn onClick={() => moveItem("sermons", i, 1)}>↓</SmallBtn>
                      <SmallBtn danger onClick={() => removeItem("sermons", i)}>✕</SmallBtn>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {sermonFields.map((f) => (
                      <LabeledField key={f.key} label={f.key}>
                        <FieldInput
                          field={f}
                          value={item[f.key]}
                          onChange={(v) => updateList("sermons", i, f.key, v)}
                        />
                      </LabeledField>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <AddButton label="Add Sermon" onClick={() => addItem("sermons", sermonFields)} />
          </Card>
        ) : null}

        {/* -------- LEADERS -------- */}
        {tab === "leaders" ? (
          <Card
            title="Leadership Team"
            subtitle="Pastors and leaders with photos. Fill them in as the team grows."
          >
            <div className="space-y-4">
              {(content.leaders as unknown as Record<string, string | boolean>[]).map((item, i) => (
                <div key={i} className="rounded-2xl border border-night-900/10 bg-cream-50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-night-900/50">
                      Leader #{i + 1}
                    </p>
                    <div className="flex gap-1">
                      <SmallBtn onClick={() => moveItem("leaders", i, -1)}>↑</SmallBtn>
                      <SmallBtn onClick={() => moveItem("leaders", i, 1)}>↓</SmallBtn>
                      <SmallBtn danger onClick={() => removeItem("leaders", i)}>✕</SmallBtn>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {leaderFields.map((f) => (
                      <LabeledField key={f.key} label={f.key}>
                        <FieldInput
                          field={f}
                          value={item[f.key]}
                          photoUpload={(cb) => {
                            const input = document.createElement("input");
                            input.type = "file";
                            input.accept = "image/*";
                            input.onchange = () => {
                              const file = input.files?.[0];
                              if (file) {
                                void uploadPhotos("leaders", [file], (urls) => {
                                  if (urls[0]) cb(urls[0]);
                                });
                              }
                            };
                            input.click();
                          }}
                          onChange={(v) => updateList("leaders", i, f.key, v)}
                        />
                      </LabeledField>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <AddButton label="Add Leader" onClick={() => addItem("leaders", leaderFields)} />
          </Card>
        ) : null}

        {/* -------- BRANCHES -------- */}
        {tab === "branches" ? (
          <Card
            title="Church Branches"
            subtitle="Miracle Ground is headquartered in Juba and has sister branches. Mark the headquarters branch and list each branch's address."
          >
            <div className="space-y-4">
              {(content.branches as unknown as Record<string, string | boolean>[]).map((item, i) => (
                <div key={i} className="rounded-2xl border border-night-900/10 bg-cream-50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-night-900/50">
                      Branch #{i + 1}
                    </p>
                    <div className="flex gap-1">
                      <SmallBtn onClick={() => moveItem("branches", i, -1)}>↑</SmallBtn>
                      <SmallBtn onClick={() => moveItem("branches", i, 1)}>↓</SmallBtn>
                      <SmallBtn danger onClick={() => removeItem("branches", i)}>✕</SmallBtn>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {branchFields.map((f) => (
                      <LabeledField key={f.key} label={f.key}>
                        <FieldInput
                          field={f}
                          value={item[f.key]}
                          onChange={(v) => updateList(
                            "branches",
                            i,
                            f.key === "id" ? "id" : f.key,
                            v,
                          )}
                        />
                      </LabeledField>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setContent((c) => ({
                  ...c,
                  branches: [
                    ...c.branches,
                    {
                      id: `branch-${Date.now()}`,
                      name: "",
                      isHeadquarters: false,
                      address: "",
                      phone: "",
                      serviceTimes: "",
                      mapUrl: "",
                    },
                  ],
                }) as SiteContent)
              }
              className="mt-6 inline-flex items-center rounded-full border border-gold-600/50 px-6 py-3 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-500/10"
            >
              + Add Branch
            </button>
          </Card>
        ) : null}

        {/* -------- LINKS -------- */}
        {tab === "links" ? (
          <div className="grid gap-6">
            <Card title="Navigation Menu" subtitle="Links shown in the site navigation.">
              <div className="space-y-4">
                {content.navigation.map((item, i) => (
                  <div key={i} className="flex flex-wrap gap-3 rounded-2xl border border-night-900/10 bg-cream-50 p-4 sm:flex-nowrap">
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => updateList("navigation", i, "label", e.target.value)}
                      placeholder="Label"
                      className="flex-1 rounded-lg border border-night-900/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold-600"
                    />
                    <input
                      type="text"
                      value={item.href}
                      onChange={(e) => updateList("navigation", i, "href", e.target.value)}
                      placeholder="#section"
                      className="flex-1 rounded-lg border border-night-900/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold-600"
                    />
                    <SmallBtn danger onClick={() => removeItem("navigation", i)}>✕</SmallBtn>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setContent((c) => ({ ...c, navigation: [...c.navigation, { label: "", href: "#" }] }) as SiteContent)}
                  className="rounded-full border border-gold-600/50 px-5 py-2.5 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-500/10"
                >
                  + Add Link
                </button>
              </div>
            </Card>

            <Card title="Social Media" subtitle="Footer social links. Leave href as # until accounts exist.">
              <div className="space-y-4">
                {content.socialLinks.map((item, i) => (
                  <div key={i} className="flex flex-wrap gap-3 rounded-2xl border border-night-900/10 bg-cream-50 p-4 sm:flex-nowrap">
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => updateList("socialLinks", i, "label", e.target.value)}
                      placeholder="Label"
                      className="w-32 rounded-lg border border-night-900/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold-600"
                    />
                    <input
                      type="text"
                      value={item.href}
                      onChange={(e) => updateList("socialLinks", i, "href", e.target.value)}
                      placeholder="https://…"
                      className="flex-1 rounded-lg border border-night-900/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold-600"
                    />
                    <SmallBtn danger onClick={() => removeItem("socialLinks", i)}>✕</SmallBtn>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setContent((c) => ({ ...c, socialLinks: [...c.socialLinks, { label: "", href: "#" }] }) as SiteContent)}
                  className="rounded-full border border-gold-600/50 px-5 py-2.5 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-500/10"
                >
                  + Add Social
                </button>
              </div>
            </Card>
          </div>
        ) : null}

        <Card title="About this panel" subtitle="">
          <p className="text-sm leading-relaxed text-night-900/70">
            Everything you edit here is saved as structured data. In local development
            changes write directly to <code className="rounded bg-cream-200 px-1.5 py-0.5 text-xs">src/data/site-content.json</code>.
            On the live site, saving commits the change to GitHub, which triggers an
            automatic rebuild — your updates go live within about a minute. Photos you
            upload are stored in the website&apos;s image library.
          </p>
        </Card>
      </div>
    </div>
  );

  function setSiteAddress(key: "street" | "landmark" | "city" | "googleMapsQuery", value: string) {
    setContent((c) => ({
      ...c,
      address: { ...c.address, [key]: value },
    }));
  }
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-night-900/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-semibold text-night-900">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-night-900/60">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

function LabeledField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-night-900/50">
        {label}
      </span>
      {children}
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <LabeledField label={label}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-night-900/15 bg-cream-50 px-3 py-2 text-sm outline-none focus:border-gold-600"
      />
    </LabeledField>
  );
}

function SmallBtn({
  children,
  onClick,
  danger,
}: {
  children: React.ReactNode;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-colors ${
        danger
          ? "border-red-200 text-red-500 hover:bg-red-50"
          : "border-night-900/15 text-night-900/70 hover:border-gold-600/50 hover:text-gold-600"
      }`}
    >
      {children}
    </button>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 inline-flex items-center rounded-full border border-gold-600/50 px-6 py-3 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-500/10"
    >
      + {label}
    </button>
  );
}