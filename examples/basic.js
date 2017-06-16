(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("../widget"));
  } else {
    root["mu-jquery-widget-validation/examples/basic"] = factory(root["mu-jquery-widget-validation/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "on/submit": function ($event) {
      console.log($event);
      return false;
    }
  });
});