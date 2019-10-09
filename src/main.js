const Plugin = require("./Plugin");
const compositeAttributes = require("./compoAttributes");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-<plugin>",
  incidents: [
    {
      exportable: Plugin,
      name: "Plugin"
    }
  ],
  compositeAttributes
};
