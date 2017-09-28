import React from "react";

import { PROJECTS } from "../constants/projects";

class Portfolio extends React.Component {
  render () {
    let portfolio = PROJECTS.map(project => (
      <div className="project" key={project.title}>
        <div className="title">{project.title}</div>
        <div className="content">
          <div className="media">
            {project.asset}
          </div>
          <div className="description">
            {project.description}
            <div className="project-metadata">
              {project.link}
              <div>
                {"Language: "}
                <b>{project.language}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="portfolio">
        {portfolio}
      </div>
    );
  }
}

export default Portfolio;
