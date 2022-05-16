import Link from "next/link";
import React, { ReactElement } from "react";
import IExperience from "../types/experience";
import Skill from "./Skill";
import Project from "./Project";

const Experience = (props: { content: IExperience; className: string }): ReactElement => {
  const { content, className = ''} = props
  const { position, company, dateStart, dateEnd, link, projects, description, skills } =
    content;

  const title = `${position} ${company ? `at ${company}` : ""}`;

  return (
    <div className={className}>
      <div className="md:flex flex-wrap items-center justify-between">
        <div className="flex my-2">
          <h3 className="mr-5">
            {link ? (
              <Link href={link}>
                <a href={link}>
                  {title}
                </a>
              </Link>
            ) : (
             title
            )}
          </h3>
        </div>
        <p className="text-gray-500 text-sm my-2">
          {dateStart} - {dateEnd}
        </p>
      </div>
      <div className="my-5 prose">{description}</div>
      <div>
        <div className="mt-5 flex flex-wrap">
          {skills.map((s) => (
            <Skill key={s.name} content={s} />
          ))}
        </div>
      </div>

      {projects?.length && (
        <>
          <h2 className="text-gray-500 text-sm font-normal my-5">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div key={p.link}>
                <Project content={p} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Experience;
