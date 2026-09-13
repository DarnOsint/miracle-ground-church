import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ScriptureSlideshow } from "@/components/scripture-slideshow";
import { Beliefs } from "@/components/beliefs";
import { Ministries } from "@/components/ministries";
import { Sermons } from "@/components/sermons";
import { Services } from "@/components/services";
import { Branches } from "@/components/branches";
import { Events } from "@/components/events";
import { GallerySlideshow } from "@/components/gallery";
import { Leadership } from "@/components/leadership";
import { Visit } from "@/components/visit";
import { PrayerRequest } from "@/components/prayer-request";
import { Give } from "@/components/give";
import { Connect } from "@/components/connect";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <ScriptureSlideshow />
        <Beliefs />
        <Ministries />
        <Sermons />
        <Services />
        <Branches />
        <Events />
        <GallerySlideshow />
        <Leadership />
        <Visit />
        <PrayerRequest />
        <Give />
        <Connect />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}