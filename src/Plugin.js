const MC = require("@kissmybutton/motorcortex");

class Plugin extends MC.API.MonoIncident {
  onGetContext() {
    // here you have available
    // this.element
    // this.attributeKey
    // this.targetValue
  }

  getScratchValue() {
    //here you make all the scatch value assignments
  }

  onProgress(/*fraction, ms*/) {
    // here you make the on progress changes
  }
}

module.exports = Plugin;
