# motorcortex-slides

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-slides/demo/index.html)

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-slides
# OR
$ yarn add @donkeyclip/motorcortex-slides
```

## Loading

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import slides from "@donkeyclip/motorcortex-slides";
const SlidesPlugin = MotorCortex.loadPlugin(slides);
```

# Create incident

## introClip

```javascript
const introClip = new Clip.Intro(
  {
    title: "Demo",
    subtitle: "Promo Plugin",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
    eveniet eosdsdawdw numquam facilis libero iure natus, voluptatibus
    deserunt laboriosam, perspiciatis consequatur nostrum.`,
    month: "December",
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/kissmybutonbg.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    mainColor: "#FEE715FF",
  },
  {
    selector: ".container1",
  }
);
```

### introClip Attrs

| Name         |                  Are                  |                                            Values |
| ------------ | :-----------------------------------: | ------------------------------------------------: |
| title        |              title text               |                                            string |
| subtitle     |             subtitle text             |                                            string |
| description  |           description text            |                                            string |
| month        |               the month               |                                            string |
| bgUrl        |     the path of background image      |                                            string |
| overlayColor | the overlay color of background image | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |      the main color of elements       | hex values or RGB(A) or text ("blue", "red", etc) |

## transition

```javascript
const transition = new Clip.Transition(
  {
    title: "test",
    speed: 2,
  },
  {
    selector: ".container2",
  }
);
```

### transition Attrs

| Name  |              Are               |     Values |
| ----- | :----------------------------: | ---------: |
| title |           title text           |     string |
| speed | animation speed. Defaults to 1 | num, min:0 |

## SlideDateOne

```javascript
new Clip.SlideDateOneVid(
  {
    title: ["the", "MOTORCORTEX TEAM", "Presents"],
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
    eveniet eosdsdawdw numquam facilis libero iure natus, voluptatibus
    deserunt laboriosam, perspiciatis consequatur nostrum.`,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/kissmybutonbg.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    mainColor: "#FEE715FF",
    bgUrl2:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg",
    month: "December",
    day: `monday`,
    dayNumber: 20,
    year: 2019,
    vidDuration: 6000,
    vidLink: [
      "https://donkey-spaces.ams3.digitaloceanspaces.com/assets/motorcortex-slides/vid.mp4",
    ],
  },
  {
    selector: ".container3",
  }
);
```

### SlideDateOne Attrs

| Name         |                  Are                  |                                            Values |
| ------------ | :-----------------------------------: | ------------------------------------------------: |
| title        |              title text               |                                            string |
| subtitle     |             subtitle text             |                                            string |
| description  |           description text            |                                            string |
| month        |               the month               |                                            string |
| day          |             the day name              |                                            string |
| number       |           the number of day           |                                            string |
| year         |               the year                |                                            string |
| bgUrl        |     the path of background image      |                                            string |
| bgUrl2       |  the path of second background image  |                                            string |
| overlayColor | the overlay color of background image | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |      the main color of elements       | hex values or RGB(A) or text ("blue", "red", etc) |
| speed        |    animation speed. Defaults to 1     |                                        num, min:0 |

## Scrolslide

```javascript
const scrolPresenter = new Clip.Scrolslide(
  {
    title: "Presenter",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    mainColor: main,
  },
  {
    selector: ".container4",
  }
);
```

### Scrolslide Attrs

| Name         |                  Are                  |                                            Values |
| ------------ | :-----------------------------------: | ------------------------------------------------: |
| title        |              title text               |                                            string |
| name         |             second title              |                                            string |
| position     |               subtitle                |                                            string |
| bgUrl        |     the path of background image      |                                            string |
| overlayColor | the overlay color of background image | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |      the main color of elements       | hex values or RGB(A) or text ("blue", "red", etc) |
| speed        |    animation speed. Defaults to 1     |                                        num, min:0 |

## LtRslide

```javascript
const ltrPresenter = new Clip.LtRslide(
  {
    title: "Presenter",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    mainColor: main,
  },
  {
    selector: ".container6",
  }
);
```

### LtRslide Attrs

| Name         |                                     Are                                      |                                            Values |
| ------------ | :--------------------------------------------------------------------------: | ------------------------------------------------: |
| title        |                                  title text                                  |                                            string |
| name         |                                 second title                                 |                                            string |
| position     | (secondary subtitle, can used to describe the job position of the presenter) |                                            string |
| bgUrl        |                         the path of background image                         |                                            string |
| overlayColor |                    the overlay color of background image                     | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |                          the main color of elements                          | hex values or RGB(A) or text ("blue", "red", etc) |
| speed        |                        animation speed. Defaults to 1                        |                                        num, min:0 |

## SlideDateTwo

```javascript
const dayTwo = new Clip.SlideDateTwo(
  {
    title: "Presenter",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bigTitle: "Event",
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    dateOverlay: "#ff00b3",
    mainColor: "#00ff40",
    bgUrl2:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg",
    month: "December",
    day: `monday`,
    dayNumber: 22,
    year: 2019,
  },
  {
    selector: ".container7",
  }
);
```

### SlideDateTwo Attrs

| Name         |                                     Are                                      |                                            Values |
| ------------ | :--------------------------------------------------------------------------: | ------------------------------------------------: |
| title        |                                  title text                                  |                                            string |
| bigTitle     |                             big title title text                             |                                            string |
| name         |                                 second title                                 |                                            string |
| position     | (secondary subtitle, can used to describe the job position of the presenter) |                                            string |
| month        |                                  the month                                   |                                            string |
| day          |                                 the day name                                 |                                            string |
| number       |                              the number of day                               |                                            string |
| year         |                                   the year                                   |                                            string |
| bgUrl        |                         the path of background image                         |                                            string |
| bgUrl2       |                     the path of second background image                      |                                            string |
| overlayColor |                    the overlay color of background image                     | hex values or RGB(A) or text ("blue", "red", etc) |
| dateOverlay  |                     the overlay color of date container                      | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |                         the main color of elementes                          | hex values or RGB(A) or text ("blue", "red", etc) |
| speed        |                        animation speed. Defaults to 1                        |                                        num, min:0 |

## BtTslide

```javascript
const bttPresenter = new Clip.BtTslide(
  {
    title: "Presenter",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    mainColor: main,
  },
  {
    selector: ".container10",
  }
);
```

### BtTslide Attrs

| Name         |                                     Are                                      |                                            Values |
| ------------ | :--------------------------------------------------------------------------: | ------------------------------------------------: |
| title        |                                  title text                                  |                                            string |
| name         |                                 second title                                 |                                            string |
| position     | (secondary subtitle, can used to describe the job position of the presenter) |                                            string |
| bgUrl        |                         the path of background image                         |                                            string |
| overlayColor |                    the overlay color of background image                     | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |                         the main color of elementes                          | hex values or RGB(A) or text ("blue", "red", etc) |
| speed        |                        animation speed. Defaults to 1                        |                                        num, min:0 |

## BtTslideDate

```javascript
const bttDay = new Clip.BtTslideDate(
  {
    title: "PresenterTEST",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    dateOverlay: "#ff00b3",
    mainColor: "#00ff40",
    bgUrl2:
      "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg",
    month: "December",
    day: `monday`,
    dayNumber: 21,
    year: 2019,
  },
  {
    selector: ".container16",
  }
);
```

### BtTslideDate Attrs

| Name         |                  Are                  |                                            Values |
| ------------ | :-----------------------------------: | ------------------------------------------------: |
| title        |              title text               |                                            string |
| name         |             second title              |                                            string |
| position     |               subtitle                |                                            string |
| month        |               the month               |                                            string |
| day          |             the day name              |                                            string |
| number       |           the number of day           |                                            string |
| year         |               the year                |                                            string |
| bgUrl        |     the path of background image      |                                            string |
| bgUrl2       |  the path of second background image  |                                            string |
| overlayColor | the overlay color of background image | hex values or RGB(A) or text ("blue", "red", etc) |
| dateOverlay  |  the overlay color of date container  | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |      the main color of elementes      | hex values or RGB(A) or text ("blue", "red", etc) |
| speed        |    animation speed. Defaults to 1     |                                        num, min:0 |

## LtRslideTop

```javascript
const ltrPresenterTop = new Clip.LtRslideTop(
  {
    title: "Presenter",
    name: "JOE SMO",
    position: "Web developer at KissMyButton",
    bgUrl: "./bg2.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    mainColor: "blue",
    speed: 2,
  },
  {
    selector: ".container11",
  }
);
```

### LtRslideTop Attrs

| Name         |                  Are                  |                                            Values |
| ------------ | :-----------------------------------: | ------------------------------------------------: |
| title        |              title text               |                                            string |
| name         |             second title              |                                            string |
| position     |               subtitle                |                                            string |
| bgUrl        |     the path of background image      |                                            string |
| overlayColor | the overlay color of background image | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |      the main color of elementes      | hex values or RGB(A) or text ("blue", "red", etc) |
| speed        |    animation speed. Defaults to 1     |                                        num, min:0 |

## RtLslide

```javascript
const rtlPresenter = new Clip.RtLslide(
  {
    title: "Presenter",
    name: "JOE SMO",
    position: "Web developer at KissMyButton",
    bgUrl: "./bg4.jpg",
    overlayColor: ["#101820D7", "#101820FF"],
    mainColor: "blue",
    speed: 2,
  },
  {
    selector: ".container4",
  }
);
```

### RtLslide Attrs

| Name         |                  Are                  |                                            Values |
| ------------ | :-----------------------------------: | ------------------------------------------------: |
| title        |              title text               |                                            string |
| name         |             second title              |                                            string |
| position     |               subtitle                |                                            string |
| bgUrl        |     the path of background image      |                                            string |
| overlayColor | the overlay color of background image | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |      the main color of elementes      | hex values or RGB(A) or text ("blue", "red", etc) |
| speed        |    animation speed. Defaults to 1     |                                        num, min:0 |

# Just add your incident to any clip

```javascript
anyClip.addIncident(rtlPresenter, 0);
```

## License

[MIT License](https://opensource.org/licenses/MIT)

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
