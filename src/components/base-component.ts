export class Component {
  rootElement: HTMLDivElement;
  templateElement: HTMLTemplateElement;
  element: HTMLFormElement;

  constructor(
    public rootId: string,
    public templateId: string,
    public elementId?: string
  ) {
    this.rootElement = document.getElementById(rootId) as HTMLDivElement;
    this.templateElement = document.getElementById(
      templateId
    ) as HTMLTemplateElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;

    if (this.elementId) {
      this.element.id = this.elementId;
    }

    this.attach();
  }

  private attach(): void {
    this.rootElement.insertAdjacentElement("afterbegin", this.element);
  }
}
