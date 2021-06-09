var Component = (function () {
    function Component(rootId, templateId, elementId) {
        this.rootId = rootId;
        this.templateId = templateId;
        this.elementId = elementId;
        this.rootElement = document.getElementById(rootId);
        this.templateElement = document.getElementById(templateId);
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (this.elementId) {
            this.element.id = this.elementId;
        }
        this.attach();
    }
    Component.prototype.attach = function () {
        this.rootElement.insertAdjacentElement("afterbegin", this.element);
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=base-component.js.map