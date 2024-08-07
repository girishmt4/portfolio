import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "utils/fetchPageInfo";
import { fetchExperiences } from "utils/fetchExperiences";
import { fetchSKills } from "utils/fetchSkills";
import { fetchProjects } from "utils/fetchProjects";
import { fetchSocials } from "utils/fetchSocials";
import ThemeToggle from "@/components/ThemeToggle";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const inter = Inter({ subsets: ["latin"] });
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1976d2] scroll-smooth">
      <Head>
        <title>Girish Tiwale</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header socials={socials} />

      <section id="hero" className="">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="">
        <ContactMe />
      </section>
      <ThemeToggle />

      {/* <Link href="#hero"> */}
      {/* <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <button className="heroButton">Home</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </footer> */}
      {/* </Link> */}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSKills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: { pageInfo, experiences, skills, projects, socials },
    revalidate: 10,
  };
};
