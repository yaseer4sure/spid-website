import type { Metadata } from "next";
import Image from "next/image";
import {
  Eye,
  GraduationCap,
  Landmark,
  Search,
  Sprout,
  Target,
} from "lucide-react";
import { EditorialImage } from "@/components/content/EditorialImage";
import {
  aboutContent,
  advisoryBoard,
  personPortraits,
  team,
} from "@/content/approved";
import { getAboutContent } from "@/sanity/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how SPiD advances youth-led, community-rooted climate resilience across Nigeria and Africa.",
  alternates: { canonical: "/about" },
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

const approachIcons = [Search, GraduationCap, Sprout, Landmark] as const;

function PersonPortrait({
  name,
  group,
  portraitUrl,
}: {
  name: string;
  group: "team" | "Advisory Board";
  portraitUrl?: string | null;
}) {
  const portrait = portraitUrl || personPortraits[name];

  if (!portrait) {
    return (
      <span className="person-initials" aria-hidden="true">
        {initials(name)}
      </span>
    );
  }

  return (
    <span className="person-portrait">
      <Image
        src={portrait}
        alt={`${name}, SPiD ${group} member`}
        fill
        sizes="(min-width: 1024px) 9rem, (min-width: 640px) 8rem, 7rem"
      />
    </span>
  );
}

export default async function AboutPage() {
  const cms = await getAboutContent();
  const page = cms?.page;
  const content = {
    introduction: page?.introductionParagraphs?.length
      ? page.introductionParagraphs
      : [...aboutContent.introduction],
    vision: page?.vision || aboutContent.vision,
    mission: page?.mission || aboutContent.mission,
    why: page?.whyParagraphs?.length
      ? page.whyParagraphs
      : [...aboutContent.why],
    theoryOfChange: page?.theoryOfChange?.length
      ? page.theoryOfChange
      : [...aboutContent.theoryOfChange],
    approaches: page?.approaches?.length
      ? page.approaches
      : aboutContent.approaches.map(([title, description]) => ({
          title,
          description,
        })),
    frameworks: page?.frameworks?.length
      ? page.frameworks
      : [...aboutContent.frameworks],
  };
  const cmsTeam =
    cms?.people?.filter((person) => !person.personType.includes("adviser")) ||
    [];
  const cmsAdvisers =
    cms?.people?.filter((person) => person.personType.includes("adviser")) ||
    [];
  const teamMembers = cmsTeam.length
    ? cmsTeam.map((person) => ({
        name: person.fullName,
        role: person.roleTitle || "Team member",
        portraitUrl: person.portraitUrl,
      }))
    : team.map(([name, role]) => ({ name, role, portraitUrl: null }));
  const advisers = cmsAdvisers.length
    ? cmsAdvisers.map((person) => ({
        name: person.fullName,
        portraitUrl: person.portraitUrl,
      }))
    : advisoryBoard.map((name) => ({ name, portraitUrl: null }));
  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h1 className="h1">Community-rooted climate action</h1>
            <p className="lead">{content.introduction[0]}</p>
          </div>
          <EditorialImage
            src="/images/about/community-rooted-leadership.JPG"
            alt="A young man visiting a community neighbourhood with local residents"
            sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
            className="page-hero-photo project-photo"
            priority
          />
        </div>
      </header>
      <section className="section">
        <div className="container grid-2">
          <div className="prose">
            <p className="eyebrow">About Us</p>
            {content.introduction.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="card purpose-card">
            <div className="purpose-item">
              <div className="purpose-heading">
                <span className="purpose-icon purpose-icon-blue">
                  <Eye aria-hidden="true" />
                </span>
                <h2>Our Vision</h2>
              </div>
              <p>{content.vision}</p>
            </div>
            <div className="purpose-item">
              <div className="purpose-heading">
                <span className="purpose-icon purpose-icon-green">
                  <Target aria-hidden="true" />
                </span>
                <h2>Our Mission</h2>
              </div>
              <p>{content.mission}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Our Why</p>
            <h2 className="h2">Closing the participation gap</h2>
            {content.why.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <p className="eyebrow">Theory of Change</p>
            <ol className="check-list">
              {content.theoryOfChange.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="split-feature">
            <div className="section-heading">
              <p className="eyebrow">Our Approach</p>
              <h2 className="h2">How we work</h2>
              <p>
                SPiD connects community knowledge, practical leadership,
                resilient interventions and policy engagement.
              </p>
            </div>
            <EditorialImage
              src="/images/about/collaborative-research-learning.JPG"
              alt="A young climate leader speaking during a panel session"
              sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
              className="section-photo"
            />
          </div>
          <div className="grid-2">
            {content.approaches.map(({ title, description }, index) => {
              const Icon = approachIcons[index];
              return (
                <article className="card" key={title}>
                  <Icon className="card-icon" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              );
            })}
          </div>
          <div className="section-heading" style={{ marginTop: "4rem" }}>
            <p className="eyebrow">Framework alignment</p>
            <h2 className="h2">Connected to global and national action</h2>
          </div>
          <div className="framework-grid">
            {content.frameworks.map((framework) => (
              <div className="card framework-card" key={framework}>
                <strong>{framework}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our Team</p>
            <h2 className="h2">Youth-led, multidisciplinary leadership</h2>
            <p>
              SPiD brings together programme, research, policy, operations,
              communications, community engagement, data and monitoring
              expertise to advance participatory, community-rooted climate
              action.
            </p>
          </div>
          <div className="people-grid">
            {teamMembers.map(({ name, role, portraitUrl }) => (
              <article className="card person-card" key={name}>
                <PersonPortrait
                  name={name}
                  group="team"
                  portraitUrl={portraitUrl}
                />
                <h3>{name}</h3>
                <p>{role}</p>
              </article>
            ))}
          </div>
          <div className="section-heading" style={{ marginTop: "4rem" }}>
            <p className="eyebrow">Advisory Board</p>
            <h2 className="h2">Strategic guidance</h2>
          </div>
          <div className="grid-2">
            {advisers.map(({ name, portraitUrl }) => (
              <article className="card person-card" key={name}>
                <PersonPortrait
                  name={name}
                  group="Advisory Board"
                  portraitUrl={portraitUrl}
                />
                <h3>{name}</h3>
                <p>Advisory Board</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
