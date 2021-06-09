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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AutoBind } from "../decorators/auto-bind.js";
import { Component } from "./base-component.js";
var ProjectInput = (function (_super) {
    __extends(ProjectInput, _super);
    function ProjectInput() {
        var _this = _super.call(this, "root", "project-input", "user-input") || this;
        _this.titleElement = _this.element.querySelector("#title");
        _this.descriptionElement = _this.element.querySelector("#description");
        _this.peopleElement = _this.element.querySelector("#people");
        _this.submitButton = _this.element.querySelector("button");
        _this.submitButton.addEventListener("click", _this.onSubmit);
        return _this;
    }
    ProjectInput.prototype.onSubmit = function (event) {
        event.preventDefault();
        this.gatherUserInput();
        this.clearInput();
    };
    ProjectInput.prototype.gatherUserInput = function () {
        var enteredTitle = this.titleElement.value;
        var enteredDescription = this.descriptionElement.value;
        var enteredPeople = this.peopleElement.value;
        console.log(enteredTitle, enteredDescription, enteredPeople);
    };
    ProjectInput.prototype.clearInput = function () {
        this.titleElement.value = "";
        this.descriptionElement.value = "";
        this.peopleElement.value = "";
    };
    __decorate([
        AutoBind
    ], ProjectInput.prototype, "onSubmit", null);
    return ProjectInput;
}(Component));
export { ProjectInput };
//# sourceMappingURL=project-input.js.map