import SkillLogos from "./SkillLogos";
import React from "react";
import {featuredSkills} from "../content/skills";

const SkillsSection = ({ title = "Skills" }: { title?: string }) => (
  <section className="py-16 bg-neutral-50">
    <h2 className="mb-12 text-center">{title}</h2>

    <SkillLogos
      skills={featuredSkills}
      className="max-w-3xl justify-center gap-8 text-3xl md:text-4xl m-auto px-5 md:px-0"
    />
  </section>
);

export default SkillsSection;
