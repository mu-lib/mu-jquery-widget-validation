(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget/widget"));
  } else {
    root["mu-jquery-widget-validation/widget"] = factory(root["mu-jquery-widget/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "on/initialize": function ($event) {
      var me = this;
      var $element = me.$element;
      var validator = $element.validate($element.data("mu-jquery-widget-validation"));

      ["form", "check", "element", "resetForm", "showErrors", "numberOfInvalids"].forEach(function (method) {
        me[me[method] ? method + "$validation" : method] = $.proxy(validator[method], validator);
      });

      me.validator = function () {
        return validator;
      }

      me.on("finalize", function () {
        validator.destroy();
      });
    }
  });
});