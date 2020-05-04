const nu = [
  "cm",
  "mm",
  "in",
  "px",
  "pt",
  "pc",
  "em",
  "ex",
  "ch",
  "rem",
  "vw",
  "vh",
  "vmin",
  "vmax",
  "%"
];
const ru = ["deg", "rad", "grad", "turn"];
const _MEASUREMENT = "measurement";
const _COLOR = "color";

export const attrs = {
  // type: "object",
  // strict : true,
  // props: {
  title: {
    optional: true,
    type: "string"
  },
  bigTitle: {
    optional: true,
    type: "string"
  },
  name: {
    optional: true,
    type: "string"
  },
  position: {
    optional: true,
    type: "string"
  },
  subtitle: {
    optional: true,
    type: "string"
  },
  description: {
    optional: true,
    type: "string"
  },
  month: {
    optional: true,
    type: "string"
  },
  day: {
    optional: true,
    type: "string"
  },
  number: {
    optional: true,
    type: "number"
  },
  year: {
    optional: true,
    type: "number"
  },
  vidDuration: {
    optional: true,
    type: "number"
  },
  vidLink: {
    optional: true,
    type: "array",
    min: 1,
    items: {
      optional: true,
      type: "string"
    }
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  bgUrl2: {
    optional: true,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
  dateOverlay: {
    optional: true,
    type: _COLOR
  },
  speed: {
    optional: true,
    type: "number"
  }

  // }
};
