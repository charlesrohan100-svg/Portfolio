import { Nav } from "@/components/nav";
import { Intro } from "@/components/sections/intro";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Intro />
        <Projects />
        <Contact />
      </main>
      <footer>{/* secondary stuff only */}</footer>
    </>
  );
}
