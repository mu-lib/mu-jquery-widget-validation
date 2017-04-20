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
  var slice = Array.prototype.slice;

  return widget.extend(["valid", "validate", "rules"].map(function (method) {
    return {
      "key": "on/validation/" + method,
      "value": function () {
        return this.$.fn[method].apply(this.$element, slice.call(arguments, 1));
      }
    };
  }), {
      "on/initialize": function ($event) {
        var me = this;
        var $element = me.$element;
        var validator = $element.validate($element.data("muJqueryWidgetValidation"));

        [ "form", "element", "resetForm", "showErrors", "numberOfInvalids" ].forEach(function(method) {
          me.on("validation/" + method, function() {
            return validator[method].apply(validator, slice.call(arguments, 1));
          });
        });

        me.on("finalize", function() {
          validator.destroy();
        });
      }
    });
});