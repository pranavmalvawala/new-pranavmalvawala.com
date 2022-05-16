import type { NextPage } from "next";
import React from "react";
import Post from "../components/Post";
import Experience from "../components/Experience";
import Project from "../components/Project";
import SiteLayout from "../components/SiteLayout";
import Socials from "../components/Socials";
import { experiences } from "../content/experiences";
import { posts } from "../content/posts";
import { projects } from "../content/projects";
import Button from "../components/Button";
import { services } from "../content/services";
import Service from "../components/Service";
import SkillLogos from "../components/SkillLogos";
import TemplatePromo from "../components/TemplatePromo";
import { author } from "../content/author";
import { featuredSkills } from "../content/skills";
import Image from "next/image";

const Home: NextPage = () => {
  const {name, role, about, emailAddress} = author
  return (
    <SiteLayout>
      <main className="container py-5 lg:py-12">
        <div className="flex w-full justify-center md:justify-between items-center flex-wrap flex-row-reverse md:flex-row mt-8">
          <div className="my-5 text-center md:text-left w-full md:w-10/12">
            <h1 className="font-bold text-5xl md:text-6xl">{name}</h1>
            <h2 className="my-3 text-xl sm:text-2xl">{role} ✨</h2>
          </div>
          <div className="my-5 w-full md:w-2/12">
            <div className="mx-auto w-40 h-40 border-primary border-4 rounded-full overflow-hidden relative">
              <Image
                src="/profile.jpg"
                alt={`${name} profile photo`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <span id="about" className="block mb-8" />

        <section className="max-w-3xl mb-8 space-y-3 prose">
          {about}
        </section>

        <Socials />

        <section className="my-16">
          <h2 className="mb-8">Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.keys(projects)
              .slice(0, 3)
              .map((key) => (
                <div key={projects[key].link}>
                  <Project content={projects[key]} />
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button href="/projects">See all projects</Button>
          </div>
        </section>

        <section className="my-16">
          <h2 className="mb-8">Services</h2>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service) => (
              <Service key={service.title} content={service} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              href={`mailto:${emailAddress}`}
              className="mx-auto mt-8"
              icon="fa-solid:envelope"
            >
              Inquire by email
            </Button>
          </div>
        </section>

        <section className="my-16">
          <h2 className="mb-8">Skills</h2>

          <SkillLogos skills={featuredSkills} className="max-w-3xl justify-center gap-8 text-3xl md:text-4xl m-auto" />
        </section>

        <section className="my-16">
          <h2 className="mb-8">Experience</h2>
          <div>
            {experiences.map((e) => (
              <Experience content={e} key={e.company} />
            ))}

            <div className="flex justify-center">
              <Button href="/experience">Learn more</Button>
            </div>
          </div>
        </section>

        <section className="my-16">
          <h2 className="mb-8">Latest Posts</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((c) => (
              <div key={c.link}>
                <Post content={c} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button href="/blog">See all posts</Button>
          </div>
        </section>

        <TemplatePromo className="my-16" />
      </main>
    </SiteLayout>
  );
};

export default Home;
