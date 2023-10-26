import { Navbar } from "@/components";

export default function Home() {
  return (
    <main>
      <section className="h-screen snap-center">
        <Navbar />
      </section>
      <section className="h-screen snap-center">Parallax</section>
      <section className="h-screen snap-center">Services</section>
      <section className="h-screen snap-center">Portfolio1</section>
      <section className="h-screen snap-center">Portfolio2</section>
      <section className="h-screen snap-center">Portfolio3</section>
      <section className="h-screen snap-center">Contact</section>
    </main>
  );
}
