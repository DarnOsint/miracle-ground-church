export const siteConfig = {
  name: "Miracle Ground International Church",
  shortName: "Miracle Ground",
  monogram: "MG",
  tagline: "A Place of Miracles, Prayer & Purpose",
  scripture: {
    verse:
      "“For with God nothing shall be impossible.”",
    reference: "Luke 1:37",
  },
  address: {
    street: "Atla Bara, Along Juba University Giyada Road",
    landmark: "Opposite Ever Green Chinese Hospital",
    city: "Juba, South Sudan",
    googleMapsQuery:
      "Atla Bara, Along Juba University Giyada Road, Opposite Ever Green Chinese Hospital, Juba, South Sudan",
  },
  phone: "+211 925 999 555",
  phoneHref: "tel:+21192599955",
  email: "info@miraclegroundchurch.org",
  founded: "Miracle Ground International Church, Juba",
  services: [
    {
      day: "Sunday",
      time: "8:30 AM",
      title: "Morning Worship",
      description:
        "A powerful time of worship, prayer and the Word of God.",
    },
    {
      day: "Sunday",
      time: "10:30 AM",
      title: "Celebration Service",
      description:
        "Dynamic praise and an anointed message for everyday living.",
    },
    {
      day: "Wednesday",
      time: "6:00 PM",
      title: "Bible Study & Prayer",
      description:
        "Deeper in the Word and united in prayer for the city.",
    },
  ] as const,
  ministries: [
    {
      name: "Worship & Choir",
      description:
        "Leading hearts into the presence of God through song and praise.",
    },
    {
      name: "Prayer & Intercession",
      description:
        "Praying without ceasing for families, the city and the nation.",
    },
    {
      name: "Youth Ministry",
      description:
        "Raising the next generation of bold, purpose-driven believers.",
    },
    {
      name: "Children's Ministry",
      description:
        "Nurturing young hearts with the love and truth of God's Word.",
    },
    {
      name: "Women of Faith",
      description:
        "A sisterhood of faith, fellowship and whole-hearted devotion.",
    },
    {
      name: "Men of Valor",
      description:
        "Standing firm as fathers, leaders and pillars of the community.",
    },
  ] as const,
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ministries", href: "#ministries" },
  { label: "Services", href: "#services" },
  { label: "Visit Us", href: "#visit" },
  { label: "Connect", href: "#connect" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/21192599955" },
] as const;