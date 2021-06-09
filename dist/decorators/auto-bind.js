export var AutoBind = function (_target, _methodName, descriptor) {
    var originalMethod = descriptor.value;
    var adjustedFn = {
        configurable: true,
        get: function () {
            return originalMethod.bind(this);
        },
    };
    return adjustedFn;
};
//# sourceMappingURL=auto-bind.js.map