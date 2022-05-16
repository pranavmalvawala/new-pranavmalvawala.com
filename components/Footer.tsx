import Link from "next/link";
import React from "react";
import Button from "./Button";
import Socials from "./Socials";
import SkillsSection from "./SkillsSection";
import {author} from "../content/author";

const Footer = ({
    showSkills,
    links,
  }: {
    showSkills: boolean;
    links?: Array<{ url: string, title: string; }>;
  }) => {
  const {emailAddress} = author
  return (
    <section>
      {showSkills && <SkillsSection />}

      <div className="w-full bg-neutral-800 text-white">
        <div className="container text-center">
          <div className="py-24">
            <h2 className="mb-10">Wanna work with me?</h2>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-5">
              <Button
                href="https://twitter.com/youUsername"
                target="_blank"
                icon="fa-solid:paper-plane"
              >
                DM me on Twitter
              </Button>

              <span>or</span>

              <Button href={`mailto:${emailAddress}`} icon="fa-solid:envelope">
                Send me an email
              </Button>
            </div>
          </div>

          {links?.length ? (
              <div className="py-4 border-t border-neutral-700 flex flex-col md:flex-row justify-between gap-5">
                <div className="flex flex-col text-left md:flex-row text-xs gap-3 md:gap-6 tracking-wide text-neutral-200">
                  {links.map(({ url, title }) => (
                      <Link href={url} key={url} passHref>
                        <a className="hover:text-primary">{title}</a>
                      </Link>
                  ))}
                </div>

                <Socials size="sm" className="text-neutral-100" />
              </div>
          ): (
              <Socials size="sm" className="justify-center pb-8" />
          )}
        </div>

        {/*I spent many hours working on this template. If you'd like to remove the credit below,*/}
        {/*consider donating any amount through this link:*/}
        {/*https://trishalim.gumroad.com/l/portfolio-website-template-for-software-developers*/}
        <div className="bg-neutral-900 py-3 border-neutral-700 text-neutral-300 text-xs text-left">
          <div className="container">
            This site was built & designed by <Link href="https://trishalim.com" passHref>
            <a className="text-primary">Trisha Lim</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
