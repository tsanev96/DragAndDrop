var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from "./base-component.js";
var ProjectItem = (function (_super) {
    __extends(ProjectItem, _super);
    function ProjectItem(rootId, project) {
        var _this = _super.call(this, rootId, "single-project", true) || this;
        _this.rootId = rootId;
        _this.project = project;
        _this.configure();
        _this.renderContent();
        return _this;
    }
    ProjectItem.prototype.configure = function () { };
    ProjectItem.prototype.renderContent = function () {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.project.description;
        this.element.querySelector("p").textContent =
            this.project.people.toString();
    };
    return ProjectItem;
}(Component));
export { ProjectItem };
//# sourceMappingURL=project-item.js.map