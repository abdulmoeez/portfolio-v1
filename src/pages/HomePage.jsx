import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const rightSideRef = useRef(null);
  const leftSideRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      document.body.style.setProperty("--x", x);
      document.body.style.setProperty("--y", y);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const leftSide = leftSideRef.current;
    const rightSide = rightSideRef.current;

    if (!leftSide || !rightSide) return;

    const handleWheel = (e) => {
      e.preventDefault();
      rightSide.scrollBy({
        top: e.deltaY,
        behavior: "auto",
      });
    };

    const checkScreen = () => {
      if (window.innerWidth > 767) {
        leftSide.addEventListener("wheel", handleWheel, { passive: false });
      } else {
        leftSide.removeEventListener("wheel", handleWheel);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      leftSide.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    const rightSide = rightSideRef.current;
    if (!rightSide) return;

    const sections = rightSide.querySelectorAll("section");
    const navMap = {
      about: document.querySelector(".ls-d2-d1"),
      experience: document.querySelector(".ls-d2-d2"),
      projects: document.querySelector(".ls-d2-d3"),
    };

    if (navMap.about) {
      navMap.about.classList.add("nav-active");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Object.values(navMap).forEach((item) =>
              item?.classList.remove("nav-active")
            );
            const targetNav = navMap[entry.target.id];
            targetNav?.classList.add("nav-active");
          }
        });
      },
      {
        root: rightSide,
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const navItems = document.querySelectorAll(".left-side-d2 > div");
    navItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.classList.add("nav-hover");
      });
      item.addEventListener("mouseleave", () => {
        item.classList.remove("nav-hover");
      });
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = item.dataset.target;
        const targetSection = document.getElementById(targetId);
        if (!targetSection || !rightSide) return;
        rightSide.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      });
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      navItems.forEach((item) => {
        item.replaceWith(item.cloneNode(true));
      });
    };
  }, []);

  return (
    <div className="body-layout">
      <aside className="left-side" ref={leftSideRef}>
        <div className="left-side-d1">
          <h1>Abdul Moeez</h1>
          <p>Full Stack Developer</p>
          <p className="left-side-d1-p">
          Level 2 Seller on Fiverr with 5+ years of experience, delivering high-performance web applications, interactive tools, and modern digital solutions that help businesses grow.          </p>
        </div>
        <div className="left-side-d2">
          <div className="ls-d2-d1" data-target="about">
            <button type="button">
              <div className="ls-d2-line" id="extended-line" />
              <h6 id="extended-section">ABOUT</h6>
            </button>
          </div>
          <div className="ls-d2-d2" data-target="experience">
            <button type="button">
              <div className="ls-d2-line" />
              <h6>EXPERIENCE</h6>
            </button>
          </div>
          <div className="ls-d2-d3" data-target="projects">
            <button type="button">
              <div className="ls-d2-line" />
              <h6>PROJECTS</h6>
            </button>
          </div>
        </div>
        <div className="left-side-d3">
          <a
            href="https://github.com/abdulmoeez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-moeez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/moeez.ca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" />
            </svg>
          </a>
          <a
            href="https://www.fiverr.com/flake_webby/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="left-side-d3-link--boxed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <rect width="64" height="64" rx="14" fill="none" />
              <circle cx="41.5" cy="20.5" r="3.5" fill="#B8C7E6" />
              <path
                d="M23 46V31H19V26H23V24.5C23 18.7 26.7 15 32.9 15H38V20H33.8C30.8 20 29 21.8 29 24.8V26H37V31H29V46H23Z"
                fill="#B8C7E6"
              />
            </svg>
          </a>
          <a
            href="https://www.upwork.com/freelancers/flake"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="left-side-d3-link--boxed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <rect width="64" height="64" rx="14" fill="none" />
              <path
                d="M18 24V36C18 42 21.5 46 27 46C32.5 46 36 42 36 36V24H31V36C31 39.2 29.4 41 27 41C24.6 41 23 39.2 23 36V24H18Z"
                fill="#B8C7E6"
              />
              <path
                d="M38 24V28H42V36C42 39 43.8 41 46.5 41C49.2 41 51 39 51 36C51 33 49.2 31 46.5 31C45.4 31 44.4 31.3 43.6 31.9V27.4C44.5 26.9 45.5 26.6 46.7 26.6C52 26.6 56 30.6 56 36C56 41.4 52 45.4 46.7 45.4C41.4 45.4 37 41.5 37 36V24H38Z"
                fill="#B8C7E6"
              />
              <circle cx="47" cy="22" r="3" fill="#B8C7E6" />
            </svg>
          </a>
        </div>
      </aside>
      <main className="right-side" ref={rightSideRef}>
        <section className="about" id="about">
          <h6 className="mobile-heading">ABOUT</h6>
          <p>
          I design and build high-performance web applications, interactive tools, and custom digital experiences that drive real results.
          </p>
          <p>
          With over 5 years of hands-on experience and more than 300 successfully completed projects on Fiverr as a Level 2 Seller, I have worked with startups, businesses, and creators from around the world. From simple websites to complex web applications, I have consistently helped turn ideas into fully functional, scalable products. My approach focuses on writing clean, efficient code and combining it with modern, intuitive design to create solutions that users actually enjoy using.          </p>
          <p>
          Through working with hundreds of clients, I have learned what it takes to deliver quality consistently — not just technically, but from a business and user perspective as well.  
          </p>
          <p>
          Now, I am sharing everything I have learned in my upcoming book Freelance Newbie, where I break down how to go from zero to earning online through web development and freelancing, based entirely on real experience.
          </p>
        </section>

        <section className="experience" id="experience">
          <h6 className="mobile-heading">EXPERIENCE</h6>
          <div className="experience-card">
            <a
              href="https://www.fiverr.com/flake_webby/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ex-card-left">
                <p>
                  2019 <span className="card-date-hyphen"></span> PRESENT
                </p>
              </div>
              <div className="ex-card-right">
                <p className="ex-card-right-p1">
                  Freelance Full Stack Web Developer · Fiverr{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
                <p className="ex-card-right-p2">
                  Delivered 300+ web development projects for international
                  clients with consistent 5-star ratings and repeat business.
                  Adapted to diverse client environments and team structures
                  across varying requirements and workflows. Collaborated with
                  global clients to translate requirements into
                  production-ready solutions.
                </p>
                <div className="ex-card-right-tags">
                  <div>
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <p>PHP</p>
                  </div>
                  <div>
                    <p>Laravel</p>
                  </div>
                  <div>
                    <p>React</p>
                  </div>
                  <div>
                    <p>MySQL</p>
                  </div>
                  <div>
                    <p>Fabric.js</p>
                  </div>
                  <div>
                    <p>Three.js</p>
                  </div>
                  <div>
                    <p>Nginx</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="experience-card">
            <a
              href="https://webqa.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ex-card-left">
                <p>
                  2021 <span className="card-date-hyphen"></span> PRESENT
                </p>
              </div>
              <div className="ex-card-right">
                <p className="ex-card-right-p1">
                  Co-Founder & Lead Developer · WebQA{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
                <p className="ex-card-right-p2">
                  Founded and developed a production-grade SaaS platform for
                  automated website auditing across SEO, performance, and
                  security. Architected scalable crawling and analysis systems
                  to process website data and generate detailed reports. Worked
                  across all areas of the product including backend
                  architecture, frontend dashboards, and system optimization.
                </p>
                <div className="ex-card-right-tags">
                  <div>
                    <p>Laravel</p>
                  </div>
                  <div>
                    <p>PHP</p>
                  </div>
                  <div>
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <p>MySQL</p>
                  </div>
                  <div>
                    <p>Nginx</p>
                  </div>
                  <div>
                    <p>REST APIs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <a
            href="/assets/resume-final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-resume"
          >
            <p className="experience-resume-p">
              View Full Resume{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
          </a>
        </section>

        <section id="projects" className="projects">
          <h6 className="mobile-heading">PROJECTS</h6>
          <div className="projects-card">
            <a
              href="https://github.com/abdulmoeez/coronaviruspak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="proj-card-left">
                <img
                  src="/assets/projects/coronaviruspak.jpeg"
                  alt="CoronavirusPak project preview"
                />
              </div>
              <div className="proj-card-right">
                <p className="proj-card-d2-p1">
                  CoronavirusPak{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
                <p className="proj-card-d2-p2">
                  Web platform designed to provide accessible COVID-19
                  information for the public, including symptoms, prevention,
                  and guidance. Features include a self-assessment tool,
                  real-time statistics integration, and structured content
                  through blogs and tracker maps.
                </p>
                <div className="ex-card-right-tags proj">
                  <div>
                    <p>Laravel</p>
                  </div>
                  <div>
                    <p>PHP</p>
                  </div>
                  <div>
                    <p>REST APIs</p>
                  </div>
                  <div>
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="projects-card">
            <a
              href="https://www.cupello.com/features/training-planner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="proj-card-left">
                <img
                  src="/assets/projects/cupello.jpg"
                  alt="Cupello Tactics Board project preview"
                />
              </div>
              <div className="proj-card-right">
                <p className="proj-card-d2-p1">
                  Cupello Tactics Board{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
                <p className="proj-card-d2-p2">
                  Interactive web application for football strategy and training,
                  enabling real-time tactics visualization through dynamic
                  canvas-based tools. Supports drag-and-drop player positioning,
                  annotations, and responsive UI for coaching workflows.
                </p>
                <div className="ex-card-right-tags proj">
                  <div>
                    <p>React</p>
                  </div>
                  <div>
                    <p>Fabric.js</p>
                  </div>
                  <div>
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <p>Canvas API</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <button
            type="button"
            className="projects-resume"
            onClick={() => navigate("/projects")}
          >
            <p className="projects-resume-p">
              View Full Project Archive{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
          </button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

