"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Sel from "./Sel";

export default function Hero({ email }) {
  const targetRef = useRef(null);
  const [size, setSize] = useState("");

  // Ukuran nama yang sedang "dipilih", dihitung langsung seperti di aplikasi desain
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setSize(`${Math.round(r.width)} × ${Math.round(r.height)}`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="slot" aria-label="Introduction">
      <p className="fname">Portfolio</p>
      <div className="frame hero">
        <div>
          <div className="target" ref={targetRef}>
            <h1>
              <span>Farrel</span> <span>Athaillah</span> <span>Putra</span>
            </h1>
            <Sel />
            <span className="chip" aria-hidden="true">
              {size}
            </span>
            <span className="cursor" aria-hidden="true">
              <svg width="18" height="22" viewBox="0 0 18 22">
                <path
                  d="M1 1l15 9.5-6.5 1.7L6.8 20z"
                  fill="#C4161F"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <b>Farrel</b>
            </span>
          </div>
          <p className="lede">I design the interface, then I build it.</p>
          <p className="sub">UI/UX designer and front-end developer in Semarang.</p>
          <p className="actions">
            <a className="btn" href="#work">
              See projects
            </a>
            <a className="textlink" href={`mailto:${email}`}>
              Email me
            </a>
          </p>
        </div>
        <figure className="photo">
          <Image
            src="/foto.jpg"
            width={231}
            height={308}
            alt="Portrait of Farrel Athaillah Putra"
            priority
          />
        </figure>
      </div>
    </section>
  );
}
