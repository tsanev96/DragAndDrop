var Component = (function () {
    function Component(rootId, templateId, insertAtStart, elementId) {
        this.rootId = rootId;
        this.templateId = templateId;
        this.insertAtStart = insertAtStart;
        this.elementId = elementId;
        this.rootElement = document.getElementById(rootId);
        this.templateElement = document.getElementById(templateId);
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (this.elementId) {
            this.element.id = this.elementId;
        }
        this.attach(this.insertAtStart);
    }
    Component.prototype.attach = function (insertAtStart) {
        this.rootElement.insertAdjacentElement(insertAtStart ? "afterbegin" : "beforeend", this.element);
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=base-component.js.map