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
  email: "info@miraclegroundchurch.com",
  url: "https://miracle-ground-church.vercel.app",
  founded: "Miracle Ground International Church, Juba",
  services: [
    {
      day: "Sunday",
      time: "8:30 AM",
      title: "English Service",
      description:
        "A powerful time of worship, prayer and the Word of God in English.",
    },
    {
      day: "Sunday",
      time: "10:30 AM",
      title: "Arabic Service",
      description:
        "Dynamic praise and an anointed message for everyday living in Arabic.",
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
  beliefs: [
    {
      title: "The Word of God",
      verse: "2 Timothy 3:16",
      text: "The Holy Bible is the inspired, infallible and authoritative Word of God — our final guide for faith and daily living.",
    },
    {
      title: "God the Father",
      verse: "Ephesians 4:6",
      text: "There is one God, the Creator and Father of all, who is infinite, holy and full of love toward His children.",
    },
    {
      title: "Jesus Christ",
      verse: "John 14:6",
      text: "Jesus is the Son of God, born of a virgin, crucified for our sins, risen on the third day and coming again in glory.",
    },
    {
      title: "The Holy Spirit",
      verse: "Acts 1:8",
      text: "The Holy Spirit indwells every believer, empowering us to live holy lives, witness boldly and walk in spiritual gifts.",
    },
    {
      title: "Salvation by Grace",
      verse: "Ephesians 2:8-9",
      text: "Salvation is a free gift of God received through faith in Jesus Christ — not by works, so no one can boast.",
    },
    {
      title: "Healing & Miracles",
      verse: "Luke 1:37",
      text: "God still heals and performs miracles today. We pray in faith, believing nothing is impossible with God.",
    },
  ] as const,
  events: [
    {
      title: "Sunday Worship Services",
      date: "Every Sunday",
      time: "8:30 AM & 10:30 AM",
      description:
        "English and Arabic services of praise, prayer and the Word.",
    },
    {
      title: "Midweek Bible Study & Prayer",
      date: "Every Wednesday",
      time: "6:00 PM",
      description:
        "Deeper in the Word and united in prayer for the city.",
    },
    // Add future events here (e.g. anniversaries, conferences, outreach).
  ] as const,
  giving: [
    {
      name: "Tithes & Offerings",
      description:
        "Honor the Lord with the firstfruits of your labor. Give cheerfully and He will multiply it back to you.",
      verse: "Malachi 3:10 · 2 Corinthians 9:7",
    },
    {
      name: "Missions & Outreach",
      description:
        "Partner with us to reach the unreached across South Sudan with the good news of the Gospel.",
      verse: "Matthew 28:19",
    },
  ] as const,
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ministries", href: "#ministries" },
  { label: "Services", href: "#services" },
  { label: "Visit Us", href: "#visit" },
  { label: "Give", href: "#give" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/21192599955" },
] as const;