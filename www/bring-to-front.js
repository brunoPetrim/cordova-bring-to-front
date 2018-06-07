function BringToFront() {
}

BringToFront.prototype.bringToFront = function (successCallback, errorCallback) {
  cordova.exec(null, null, "bringtofront", "bringToFront", []);
};

BringToFront.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.bringtofront = new BringToFront();
  return window.plugins.bringtofront;
};

cordova.addConstructor(BringToFront.install);
