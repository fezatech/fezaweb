import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32 video-bg">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Innovative Solution
            Efficiently Processes
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a company that offers software and license production in various fields with an innovative and original perspective. Our goal is to help our customers make their processes more efficient by providing innovative solutions.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        With its innovative ideas, AI based solutions, strong infrastructure, young and dynamic team, feza.tech is one of the most promising companies for the future.His work in the field of artificial intelligence is especially admirable.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
