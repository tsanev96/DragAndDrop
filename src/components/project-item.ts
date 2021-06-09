import { Project } from "../model/project.js";
import { Component } from "./base-component.js";

export class ProjectItem extends Component<HTMLDivElement, HTMLLIElement> {
  private project: Project;

  constructor(public rootId: string, project: Project) {
    super(rootId, "single-project", true);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure() {}
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.project.description;
    this.element.querySelector("p")!.textContent =
      this.project.people.toString();
  }
}
