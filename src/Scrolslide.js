const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class Scrolslide extends MotorCortex.API.Clip {
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
      ? (this.attrs.bgUrl = "./bg3.jpg")
      : this.attrs.bgUrl;

    this.attrs.overlayColor = !this.attrs.overlayColor
      ? (this.attrs.overlayColor = "#ff00b34d")
      : this.attrs.overlayColor;

    this.attrs.mainColor = !this.attrs.mainColor
      ? (this.attrs.mainColor = "#00ff40")
      : this.attrs.mainColor;

    this.attrs.speed = !this.attrs.speed
      ? (this.attrs.speed = 2)
      : this.attrs.speed;
    return `
    <div class="third-holder ">
    <div class="bg">
      <div class="bg-third-slide">
        <div class="third-first-presenter-slide">
          <div class="third-presenter-container">
            <div class="third-presenter presenter">${this.attrs.title}</div>
          </div>
          <div class="name-container">${this.attrs.name}</div>
          <div class="position-container">${this.attrs.position}</div>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="bg-third-slide">
        <div class="third-first-presenter-slide">
          <div class="third-presenter-container">
            <div class="third-presenter presenter">${this.attrs.title}</div>
          </div>
          <div class="name-container">${this.attrs.name}</div>
          <div class="position-container">${this.attrs.position}</div>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="bg-third-slide">
        <div class="third-first-presenter-slide">
          <div class="third-presenter-container">
            <div class="third-presenter presenter">${this.attrs.title}</div>
          </div>
          <div class="name-container">${this.attrs.name}</div>
          <div class="position-container">${this.attrs.position}</div>
        </div>
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

      margin-top: 10%;
      margin-bottom: 10%;
      
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
  
   .bg-third-slide{
      height: 1080px;
      width: 1920px;
      display: flex;
      align-items: center;
      margin-left: 5%;
    }

    .third-first-presenter-slide{
      position : relative;
    }
    .third-presenter-container{
      overflow: hidden;
      border-top: 15px solid ${this.attrs.mainColor};
    
    }

    .presenter,.big-title{
      font-weight: 700;
      font-family: 'Roboto Mono', monospace;
      text-transform: uppercase;
      color: ${this.attrs.mainColor};
    }

    .third-presenter{
      font-size: ${this.dinamicFontSize(this.attrs.title.length, 720)}px;
      transform: translateY(-100%);
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
    .third-holder{
      left: 100%;
      position: relative;
      top : 0%;
    }

  `;
  }

  buildTree() {
    const moveThird = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0%",
          top: "-200%"
        },
        initialValues: {
          left: "100%",
          top: "-100%"
        },
        attrs: {}
      },
      {
        duration: 1500 * this.attrs.speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      }
    );
    const thirdScaleUp = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            scale: "1"
          }
        },
        initialValues: {
          transform: {
            scale: "0.5"
          }
        },
        attrs: {}
      },
      {
        duration: 1500 * this.attrs.speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      }
    );

    const moveThirdIner = new Anime.Anime(
      {
        animatedAttrs: {
          marginTop: "0%",
          marginBottom: "0%"
        },
        initialValues: {
          marginTop: "10%",
          marginBottom: "10%"
        },
        attrs: {}
      },
      {
        duration: 1500 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      }
    );

    const movePresenter = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            translateY: "0%"
          }
        },
        initialValues: {
          transform: {
            translateY: "-100%"
          }
        },
        attrs: {}
      },
      {
        duration: 800 * this.attrs.speed,
        selector: ".presenter",
        easing: "easeOutQuad"
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
        duration: 1000 * this.attrs.speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      }
    );

    this.addIncident(moveThird, 0);
    this.addIncident(thirdScaleUp, 0);
    this.addIncident(moveThirdIner, 0);
    this.addIncident(movePresenter, 700 * this.attrs.speed);
    this.addIncident(bgOut, 3000 * this.attrs.speed);
  }
}

module.exports = Scrolslide;
