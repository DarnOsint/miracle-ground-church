import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Ministries } from "@/components/ministries";
import { Services } from "@/components/services";
import { Visit } from "@/components/visit";
import { Connect } from "@/components/connect";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Ministries />
        <Services />
        <Visit />
        <Connect />
      </main>
      <SiteFooter />
    </div>
  );
}