import { Project, ProjectStatus } from "../model/project.js";
import { projectState } from "../state/project-state.js";
import { Component } from "./base-component.js";
import { ProjectItem } from "./project-item.js";

export class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("root", "project-list", false, `${type}-projects`);
    console.log(this.type);

    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  configure() {
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type === "active") {
          return project.status === ProjectStatus.Active;
        }
        return project.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    const ulElement = this.element.querySelector("ul")! as HTMLUListElement;
    ulElement.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " Projects";
  }

  private renderProjects() {
    const ulElement = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    ulElement.innerHTML = "";

    this.assignedProjects.map(
      (project) => new ProjectItem(ulElement.id, project)
    );
  }
}
