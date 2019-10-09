const MotorCortex = require("@kissmybutton/motorcortex/");
const Player = require("@kissmybutton/motorcortex-player/");
// const PluginDefinition = require("../src/main");
// const Plugin = MotorCortex.loadPlugin(PluginDefinition);

const css = ``;

const html = ``;

const host = document.getElementById("clip");

const containerParams = {
  width: "90%",
  height: "90%"
};

const clip = new MotorCortex.Clip({
  css,
  html,
  host,
  containerParams,
  audio: "off"
});

new Player({ clip });
