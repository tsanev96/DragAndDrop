import { Component } from "./base-component.js";

export class ProjectList extends Component<HTMLDivElement, HTMLLIElement> {
  constructor(private type: "active" | "finished") {
    super("root", "project-list", false, `${type}-projects`);
    console.log(this.type);
  }
}
