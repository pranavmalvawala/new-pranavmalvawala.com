import { skills as skillsMap } from "../content/skills";
import Icon from "./Icon";
import Link from "next/link";
import Skill from "../types/skill";

const SkillLogos = (props: { className?: string, skills?: Array<Skill> }) => {
  const {className = '', skills = Object.keys(skillsMap).map(key => skillsMap[key])} = props
  return (
    <div className={`flex flex-wrap ${className}`}>
      {skills.map((skill) => {
        const { icon, slug, name } = skill;
        return icon ? (
          <Link href={`/${slug}`} passHref key={slug}>
            <a title={`${name} Projects`}>
              <Icon icon={icon} />
            </a>
          </Link>
        ) : null;
      })}
    </div>
  );
};

export default SkillLogos;
