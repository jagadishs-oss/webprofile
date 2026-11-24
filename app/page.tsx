import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";
import { Education } from "@/components/home/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
    </>
  );
}
