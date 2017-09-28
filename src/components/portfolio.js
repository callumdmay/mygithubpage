import React, { PropTypes } from "react";
import classNames from "classnames";

import { PROJECTS } from "../constants/projects";

const contextTypes = {
  is_mobile: PropTypes.bool.isRequired
};

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
                {"Language(s): "}
                <b>{project.language}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className={classNames("portfolio", {
          "mobile": this.context.is_mobile
        })}>
        {portfolio}
      </div>
    );
  }
}

Portfolio.contextTypes = contextTypes;
export default Portfolio;
