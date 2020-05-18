const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class BtTslideDate extends MotorCortex.API.Clip {
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

    this.attrs.bgUrl2 = !this.attrs.bgUrl2
      ? (this.attrs.bgUrl2 = "./bg2.jpg")
      : this.attrs.bgUrl2;

    this.attrs.dateOverlay = !this.attrs.dateOverlay
      ? (this.attrs.dateOverlay = "#ff00b3")
      : this.attrs.dateOverlay;

    this.attrs.mainColor = !this.attrs.mainColor
      ? (this.attrs.mainColor = "#00ff40")
      : this.attrs.mainColor;

    this.attrs.speed = !this.attrs.speed
      ? (this.attrs.speed = 2)
      : this.attrs.speed;

    return `
   <div class="bg">
    <div class="bg-quarter-slide">
      <div class="quarter-first-presenter-slide">
        <div class="quarter-left">
          <div class="quarter-presenter-container">
            <div class="quarter-presenter presenter">${this.attrs.title}</div>
          </div>
          <div class="name-container">${this.attrs.name}</div>
          <div class="position-container">${this.attrs.position}</div>
        </div>
      </div>
    </div>
  </div>


  <div class="bg-next">
  <div class="bg-quarter-slide">
    <div class="test-mask">
      <div class="defter-date-container">
        <div class="defter-date"><span> ${this.attrs.day || ""} ${this.attrs
      .dayNumber || ""} </span>${this.attrs.month || ""} ${this.attrs.year ||
      ""}</div>
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
      top : 100%; 
    }


    .bg:after,.bg-next {
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
    .bg-next {
      width: 100%;
      height: 100%;
      background-image: url(${this.attrs.bgUrl2});
      background-size: 1920px;
      background-position: center;
      transform: scale(1);
      display: flex;
      position: relative;
      align-items: center;
      flex-wrap: wrap;
      flex: 1 0 auto;
      top : -100%;
      left : -100%
     
    }
    .defter-date-container{
      position: absolute;
      font-size: 60px;
      color:#fff;
      white-space: nowrap;
      text-transform: uppercase;
      font-family: 'Roboto Mono', monospace;
      background: ${this.attrs.dateOverlay};
      padding: 2% 6%;
      background-blend-mode: multiply;
      background-image: url(${this.attrs.bgUrl2});
      background-size: 1920px;
      background-position: center;
      transform: scale(1);
    }

    .defter-date span{
      color: ${this.attrs.mainColor};
    }


    .third-first-presenter-slide,.quarter-first-presenter-slide{
      position : relative;
    }
  
    .quarter-first-presenter-slide{
      margin-bottom: 15%;
      border-top: 15px solid ${this.attrs.mainColor};
      align-items: center;
      justify-content: center;
      
    }

    .quarter-left{
      display: flex;
      flex-direction: column;
      align-items: center;
      position : relative;
      top: 90%;
      
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
      justify-content: center;
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

    .test-mask{
      position: absolute;
      left: 0;
      height: 132.5px;
      background-size: 1920px;
      position: absolute;
      left: 0;
      display: flex;
      justify-content: center;
      align-content: center;
      width: 100%;
    }


  `;
  }

  buildTree() {
    const personConMove = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      },
      {
        duration: 1500 * this.attrs.speed,
        selector: ".quarter-first-presenter-slide",
        easing: "easeOutCubic"
      }
    );

    const quarterLeft = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      },
      {
        duration: 2000 * this.attrs.speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      }
    );

    const bg = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      }
    );

    const bgscaledown = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            scale: 0.5
          }
        },
        initialValues: {
          transform: {
            scale: 1
          }
        },
        attrs: {}
      },
      {
        duration: 500 * this.attrs.speed,
        selector: ".bg,.bg-next",
        easing: "easeOutCubic"
      }
    );

    const bgscaledownMove = new Anime.Anime(
      {
        animatedAttrs: {
          left: "25%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      },
      {
        duration: 500 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutCubic"
      }
    );
    const bgsecondscaledownMove = new Anime.Anime(
      {
        animatedAttrs: {
          left: "-25%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      },
      {
        duration: 500 * this.attrs.speed,
        selector: ".bg-next",
        easing: "easeOutCubic"
      }
    );

    const bgscaleup = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            scale: 1
          }
        },
        initialValues: {
          transform: {
            scale: 0.5
          }
        },
        attrs: {}
      },
      {
        duration: 500 * this.attrs.speed,
        selector: ".bg,.bg-next",
        easing: "easeOutCubic"
      }
    );
    const bgscaledownMoveOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "25%"
        },
        attrs: {}
      },
      {
        duration: 500 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutCubic"
      }
    );

    const bgsecondscaledownMoveOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-25%"
        },
        attrs: {}
      },
      {
        duration: 500 * this.attrs.speed,
        selector: ".bg-next",
        easing: "easeOutCubic"
      }
    );

    const bgMoveOut = new Anime.Anime(
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
        selector: ".bg-next",
        easing: "easeOutQuad"
      }
    );

    this.addIncident(bg, 0);
    this.addIncident(personConMove, 0);
    this.addIncident(quarterLeft, 0);
    this.addIncident(bgscaledown, 3000 * this.attrs.speed);
    this.addIncident(bgsecondscaledownMove, 3000 * this.attrs.speed);
    this.addIncident(bgscaledownMove, 3000 * this.attrs.speed);
    this.addIncident(bgscaleup, 4000 * this.attrs.speed);
    this.addIncident(bgscaledownMoveOut, 4000 * this.attrs.speed);
    this.addIncident(bgsecondscaledownMoveOut, 4000 * this.attrs.speed);
    this.addIncident(
      bgMoveOut,
      this.calculatedDuration + 1000 * this.attrs.speed
    );
  }
}

module.exports = BtTslideDate;
