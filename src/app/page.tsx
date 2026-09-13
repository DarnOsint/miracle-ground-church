import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Beliefs } from "@/components/beliefs";
import { Ministries } from "@/components/ministries";
import { Services } from "@/components/services";
import { Events } from "@/components/events";
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
        <Beliefs />
        <Ministries />
        <Services />
        <Events />
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