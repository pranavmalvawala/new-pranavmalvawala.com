import SiteLayout from "../components/SiteLayout";
import { experiences } from "../content/experiences";
import React from "react";
import DetailedExperience from "../components/DetailedExperience";

export default function ExperiencePage() {
  return (
    <SiteLayout showSkills={true}>
      <main className="container py-10 lg:py-16">
        <h1 className="mb-8">Experience</h1>
        <div>
          {experiences.map((e) => (
            <DetailedExperience key={e.company} content={e} className="mb-10" />
          ))}
        </div>
      </main>
    </SiteLayout>
  );
}
