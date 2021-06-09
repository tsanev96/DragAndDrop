import { AutoBind } from "../decorators/auto-bind.js";
import { projectState } from "../state/project-state.js";
import { Component } from "./base-component.js";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleElement: HTMLInputElement;
  descriptionElement: HTMLInputElement;
  peopleElement: HTMLInputElement;
  submitButton: HTMLButtonElement;

  constructor() {
    super("root", "project-input", true, "user-input");

    this.titleElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.submitButton = this.element.querySelector(
      "button"
    ) as HTMLButtonElement;

    this.submitButton.addEventListener("click", this.onSubmit);
  }

  @AutoBind
  private onSubmit(event: Event) {
    event.preventDefault();
    this.gatherUserInput();
    this.clearInput();
  }

  private gatherUserInput() {
    const enteredTitle = this.titleElement.value;
    const enteredDescription = this.descriptionElement.value;
    const enteredPeople = +this.peopleElement.value;

    projectState.addProject(enteredTitle, enteredDescription, enteredPeople);
  }

  private clearInput() {
    this.titleElement.value = "";
    this.descriptionElement.value = "";
    this.peopleElement.value = "";
  }

  configure() {}
  renderContent() {}
}
