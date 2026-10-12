import LayersNav from "../components/LayersNav";
import Hero from "../components/Hero";
import Sel from "../components/Sel";
import Thumb from "../components/Thumbs";
import { profile, sections, about, projects, experience, toolkit } from "../data/content";

export default function Home() {
  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>

      <LayersNav sections={sections} />

      <main className="canvas">
        <Hero email={profile.email} />

        <section id="about" className="slot" aria-labelledby="about-h">
          <h2 className="fname" id="about-h">
            About
          </h2>
          <div className="frame about">
            <p className="summary">{about.summary}</p>
            <dl className="props">
              {about.props.map(([term, value]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="work" className="slot" aria-labelledby="work-h">
          <h2 className="sr" id="work-h">
            Selected work
          </h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.name} className={`p ${p.slot}`}>
                <h3 className="fname">{p.name}</h3>
                <div className="frame">
                  <div className="thumb">
                    <Thumb kind={p.thumb} />
                  </div>
                  <div className="body">
                    <p className="what">{p.what}</p>
                    <p className="meta">{p.meta}</p>
                    <a className="plink" href={p.href}>
                      Project link
                    </a>
                  </div>
                  <Sel />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="slot" aria-labelledby="exp-h">
          <h2 className="fname" id="exp-h">
            Experience
          </h2>
          <div className="frame">
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.org}>
                  <p className="when">{job.when}</p>
                  <div>
                    <h3>{job.org}</h3>
                    <p className="role">{job.role}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="toolkit" className="slot" aria-labelledby="kit-h">
          <h2 className="fname" id="kit-h">
            Toolkit
          </h2>
          <div className="frame kit">
            {toolkit.map((group) => (
              <div className="group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="slot" aria-labelledby="contact-h">
          <h2 className="fname" id="contact-h">
            Contact
          </h2>
          <div className="frame contact">
            <p className="ask">For projects, collaborations or questions, write to</p>
            <a className="mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="social">
              <a href={profile.linkedin}>LinkedIn</a>
              <a href={profile.github}>GitHub</a>
            </p>
          </div>
        </section>

        <p className="foot">Designed and built by {profile.name}, 2026.</p>
      </main>
    </>
  );
}
