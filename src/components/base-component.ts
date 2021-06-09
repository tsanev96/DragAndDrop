export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  rootElement: T;
  templateElement: HTMLTemplateElement;
  element: U;

  constructor(
    public rootId: string,
    public templateId: string,
    public insertAtStart: boolean,
    public elementId?: string
  ) {
    this.rootElement = document.getElementById(rootId)! as T;
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild! as U;

    if (this.elementId) {
      this.element.id = this.elementId;
    }

    this.attach(this.insertAtStart);
  }

  private attach(insertAtStart: boolean): void {
    this.rootElement.insertAdjacentElement(
      insertAtStart ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
