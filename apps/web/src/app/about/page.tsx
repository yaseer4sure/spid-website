import type { Metadata } from "next";
import { aboutContent, advisoryBoard, team } from "@/content/approved";

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

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Who We Are</p>
          <h1 className="h1">Community-rooted climate action</h1>
          <p className="lead">{aboutContent.introduction[0]}</p>
        </div>
      </header>
      <section className="section">
        <div className="container grid-2">
          <div className="prose">
            <p className="eyebrow">About Us</p>
            {aboutContent.introduction.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="card">
            <h2>Vision</h2>
            <p>{aboutContent.vision}</p>
            <h2>Mission</h2>
            <p>{aboutContent.mission}</p>
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Our Why</p>
            <h2 className="h2">Closing the participation gap</h2>
            {aboutContent.why.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <p className="eyebrow">Theory of Change</p>
            <ol className="check-list">
              {aboutContent.theoryOfChange.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our Approach</p>
            <h2 className="h2">How we work</h2>
          </div>
          <div className="grid-2">
            {aboutContent.approaches.map(([title, description]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="section-heading" style={{ marginTop: "4rem" }}>
            <p className="eyebrow">Framework alignment</p>
            <h2 className="h2">Connected to global and national action</h2>
          </div>
          <div className="framework-grid">
            {aboutContent.frameworks.map((framework) => (
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
            {team.map(([name, role]) => (
              <article className="card person-card" key={name}>
                <span className="person-initials" aria-hidden="true">
                  {initials(name)}
                </span>
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
            {advisoryBoard.map((name) => (
              <article className="card person-card" key={name}>
                <span className="person-initials" aria-hidden="true">
                  {initials(name)}
                </span>
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
