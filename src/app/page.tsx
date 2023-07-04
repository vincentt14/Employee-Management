import { Footer, Navbar } from "@/components";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
