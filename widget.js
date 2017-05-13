(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget-validation/widget"] = factory.apply(root, modules.map(function (m) {
      return root[m];
    }));
  }
})(["mu-jquery-widget/widget"], function (widget) {
  return widget.extend({
    "on/initialize": function ($event) {
      var me = this;
      var $element = me.$element;
      var validator = $element.validate($element.data("mu-jquery-widget-validation"));

      ["form", "element", "resetForm", "showErrors", "numberOfInvalids"].forEach(function (method) {
        me[me[method] ? method + "$validation" : method] = $.proxy(validator[method], validator);
      });

      me.on("finalize", function () {
        validator.destroy();
      });
    }
  });
});