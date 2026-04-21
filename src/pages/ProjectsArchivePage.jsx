import React from "react";
import { Link } from "react-router-dom";

const ProjectsArchivePage = () => {
  return (
    <div className="pp-layout">
      <section className="pp-title">
        <Link to="/" className="pp-title-link">
          <h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            Abdul Moeez
          </h6>
        </Link>
        <h1>All Projects</h1>
      </section>
      <section className="pp-tableContainer">
        <table className="pp-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th>Made at</th>
              <th>Built With</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021</td>
              <td>CoronavirusPak</td>
              <td>Independent</td>
              <td>
                <div className="pp-table-BW">
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
              </td>
              <td>
                <a
                  className="table-link-dex"
                  href="https://github.com/abdulmoeez/coronaviruspak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="pp-table-link">
                    github.com/abdulmoeez/coronaviruspak{" "}
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
                <a
                  className="table-link-mobile"
                  href="https://github.com/abdulmoeez/coronaviruspak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="pp-table-link">
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
              </td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Cupello Tactics Board</td>
              <td>Cupello</td>
              <td>
                <div className="pp-table-BW">
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
              </td>
              <td>
                <a
                  className="table-link-dex"
                  href="https://www.cupello.com/features/training-planner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="pp-table-link">
                    cupello.com/features/training-planner{" "}
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
                <a
                  className="table-link-mobile"
                  href="https://www.cupello.com/features/training-planner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="pp-table-link">
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
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProjectsArchivePage;

