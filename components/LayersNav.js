"use client";

import { useEffect, useState } from "react";

function FrameIcon() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M4.5 1v12M9.5 1v12M1 4.5h12M1 9.5h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export default function LayersNav({ sections }) {
  const [active, setActive] = useState(sections[0].id);
  const [time, setTime] = useState("");

  // Jam lokal Semarang
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  // Tandai bagian yang sedang terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="layers" aria-label="Sections">
      <p className="layers-title">Layers</p>
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>
              <FrameIcon />
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p className="clock">{time ? `Semarang, ${time} WIB` : "Semarang"}</p>
    </nav>
  );
}
