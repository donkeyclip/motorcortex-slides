const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class LtRslideTop extends MotorCortex.API.Clip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = width / 0.6 / lc;
    if (fontsize >= 200 && width === 720) {
      fontsize = 200;
    }
    if (fontsize >= 100 && width === 360) {
      fontsize = 100;
    }
    return fontsize;
  }

  get html() {
    this.attrs.bgUrl = !this.attrs.bgUrl
      ? (this.attrs.bgUrl = "./bg2.jpg")
      : this.attrs.bgUrl;

    this.attrs.overlayColor = !this.attrs.overlayColor
      ? (this.attrs.overlayColor = "#ff00b34d")
      : this.attrs.overlayColor;

    this.attrs.mainColor = !this.attrs.mainColor
      ? (this.attrs.mainColor = "#00ff40")
      : this.attrs.mainColor;
    return `
    <div class="bg">
    <div class="bg-quarter-slide">
      
        <div class="quarter-left">
          <div class="quarter-presenter-container">
            <div class="quarter-presenter presenter">${this.attrs.title}</div>
          </div>
          <div class="name-container">${this.attrs.name}</div>
          <div class="position-container">${this.attrs.position}</div>
        </div>
    
    </div>
  </div>

    `;
  }

  get css() {
    return `
    .bg {
      width: 100%;
      height: 100%;
      background-image: url(${this.attrs.bgUrl});
      background-size: 1920px;
      background-position: center;
      transform: scale(1);
      display: flex;
      position: relative;
      align-items: center;
      flex-wrap: wrap;
      flex: 1 0 auto;
      left : -100%;
      
    }
    .bg:after {
      content: "";
      display: block;
      background: linear-gradient(${this.attrs.overlayColor});
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -1;
    }
  

    .quarter-left{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position : relative;
      top: -100%;
      border-top: 15px solid ${this.attrs.mainColor};
      padding-top: 25%;
      margin-left: 4%;
     
    }
    .name-container,.position-container{
      font-weight: 700;
      font-family: 'Roboto Mono', monospace;
      text-transform: uppercase;
      color: #fff;
    }
  
    .name-container{
      font-size: ${this.dinamicFontSize(this.attrs.name.length, 360)}px;
    }
    .position-container{
      font-size: ${this.dinamicFontSize(this.attrs.position.length, 360)}px;
    }
    .bg-quarter-slide{
      height: 1080px;
      width: 1920px;
      display: flex;
      align-items: center;
    }

    .quarter-presenter{
      font-size: ${this.dinamicFontSize(this.attrs.title.length, 720)}px;
    }
    .presenter,.big-title{
      font-weight: 700;
      font-family: 'Roboto Mono', monospace;
      text-transform: uppercase;
      color: ${this.attrs.mainColor};
    }

  `;
  }

  buildTree() {
    const personConMove = new Anime.Anime(
      {
        animatedAttrs: {
          paddingTop: "0%"
        },
        initialValues: {
          paddingTop: "40%"
        },
        attrs: {}
      },
      {
        duration: 1000,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      }
    );

    const quarterLeft = new Anime.Anime(
      {
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      },
      {
        duration: 1000,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      }
    );

    const bg = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      },
      {
        duration: 1000,
        selector: ".bg",
        easing: "easeOutCubic"
      }
    );

    const bgOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      },
      {
        duration: 1000,
        selector: ".bg",
        easing: "easeOutCubic"
      }
    );

    this.addIncident(bg, 0);
    this.addIncident(personConMove, 0);
    this.addIncident(quarterLeft, 0);
    this.addIncident(bgOut, 2500);
  }
}

module.exports = LtRslideTop;
