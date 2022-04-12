# MotorCortex-Slides

**Table of Contents**

- [MotorCortex-Slides](#motorcortex-slides)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [Intro](#intro)
  - [Transition](#transition)
  - [SlideDateOneVid](#slidedateonevid)
  - [Scrollslide](#scrollslide)
  - [LtRslide](#ltrslide)
  - [SlideDateTwo](#slidedatetwo)
  - [BtTslide](#bttslide)
  - [BtTslideDate](#bttslidedate)
  - [LtRslideTop](#ltrslidetop)
  - [RtLslide](#rtlslide)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-slides/demo/index.html)

# Intro / Features

With MotorCortex-slides you can easily create attractive slideshows.

This Plugin exposes ten Incident:

- Intro
- Transition
- SlideDateOneVid
- Scrollslide
- LtRslide
- SlideDateTwo
- BtTslide
- BtTslideDate
- LtRslideTop
- RtLslide

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-slides
# OR
$ yarn add @donkeyclip/motorcortex-slides
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import slides from "@donkeyclip/motorcortex-slides";
const SlidesPlugin = loadPlugin(slides);
```

# Creating Incidents

## Intro

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

### Intro Attrs

| Name         |                  Are                  |                                            Values |
| ------------ | :-----------------------------------: | ------------------------------------------------: |
| title        |              title text               |                                            string |
| subtitle     |             subtitle text             |                                            string |
| description  |           description text            |                                            string |
| month        |               the month               |                                            string |
| bgUrl        |     the path of background image      |                                            string |
| overlayColor | the overlay color of background image | hex values or RGB(A) or text ("blue", "red", etc) |
| mainColor    |      the main color of elements       | hex values or RGB(A) or text ("blue", "red", etc) |

## Transition

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

### Transition Attrs

| Name  |              Are               |     Values |
| ----- | :----------------------------: | ---------: |
| title |           title text           |     string |
| speed | animation speed. Defaults to 1 | num, min:0 |

## SlideDateOneVid

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

### SlideDateOneVid Attrs

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

## Scrollslide

```javascript
const scrolPresenter = new Clip.Scrollslide(
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

### Scrollslide Attrs

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

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName, startTime);
```

# Contributing

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. **Commit** changes to your own branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
