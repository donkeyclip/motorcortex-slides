# motorcortex-slides

## Demo
[Check it out here](https://kissmybutton.github.io/motorcortex-slides/demo/index.html)

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-slides
# OR
$ yarn add @kissmybutton/motorcortex-slides
```

## Loading

```javascript
const MotorCortex = require("@kissmybutton/motorcortex/");
const slides = require("@kissmybutton/motorcortex-slides");
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
    month: "December"
    bgUrl: "./kissmybutonbg.jpg",
    overlayColor: "#ff00004d",
    mainColor: "blue",
    speed: 2
  },
  {
    selector: ".container1"
  }
);
```

### introClip Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| subtitle   | subtitle text | string |
| description |  description text   |  string |
| month |  the month  |  string  |
| bgUrl |  the path of background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |




## transition

```javascript
const transition = new Clip.Transition(
  {
    title: "test",
    speed: 2
  },
  {
    selector: ".container2"
  }
);
```

### transition Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| speed |  how much slow animation will play  |  num |




## SlideDateOne

```javascript
const dayOne = new Clip.SlideDateOne(
  {
    subtitle: "MOTORCORTEX TEAM",
    titleone: "the",
    str: "Present",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
    eveniet eosdsdawdw numquam facilis libero iure natus, voluptatibus
    deserunt laboriosam, perspiciatis consequatur nostrum.`,
    bgUrl: "./kissmybutonbg.jpg",
    overlayColor: "#ff00004d",
    mainColor: "blue",
    bgUrl2: "./bg2.jpg",
    month: "December",
    day: `monday`,
    number: "20",
    year: "2019",
    speed: 2
  },
  {
    selector: ".container3"
  }
);
```

### SlideDateOne Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| subtitle   | subtitle text | string |
| description |  description text   |  string |
| month |  the month  |  string  |
| day |  the day name  |  string  |
| number |  the number of day  |  string  |
| year |  the year |  string  |
| bgUrl |  the path of background image |  string  |
| bgUrl2 |  the path of second background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |



## Scrolslide

```javascript
const scrolPresenter = new Clip.Scrolslide(
  {
    title: "Presenter",
    name: "RIGANOSKILOS",
    position: "Web developer at kissmybuton",
    bgUrl: "./bg3.jpg",
    overlayColor: "#ff00004d",
    mainColor: "blue",
    speed: 2
  },
  {
    selector: ".container4"
  }
);
```

### Scrolslide Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| name   |  second title | string |
| position |  subtitle   |  string |
| bgUrl |  the path of background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |



## LtRslide

```javascript
const ltrPresenter = new Clip.LtRslide(
  {
    title: "Presenter",
    name: "RIGANOSKILOS",
    position: "Web developer at kissmybuton",
    bgUrl: "./bg4.jpg",
    overlayColor: "#ff00004d",
    mainColor: "blue",
    speed: 2
  },
  {
    selector: ".container6"
  }
);
```

### LtRslide Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| name   |  second title | string |
| position |  subtitle   |  string |
| bgUrl |  the path of background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |


## SlideDateTwo

```javascript
const dayTwo = new Clip.SlideDateTwo(
  {
    title: "Presenter",
    name: "RIGANOSKILOS",
    position: "Web developer at kissmybuton",
    bigTitle: "Event",
    bgUrl: "./bg5.jpg",
    overlayColor: "#ff00b34d",
    dateOverlay: "#ff00b3",
    mainColor: "#00ff40",
    bgUrl2: "./bg2.jpg",
    month: "December",
    day: `monday`,
    number: "20",
    year: "2019",
    speed: 2
  },
  {
    selector: ".container7"
  }
);
```

### SlideDateTwo Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| bigTitle     | big title title text  | string |
| name   |  second title | string |
| position |  subtitle   |  string |
| month |  the month  |  string  |
| day |  the day name  |  string  |
| number |  the number of day  |  string  |
| year |  the year |  string  |
| bgUrl |  the path of background image |  string  |
| bgUrl2 |  the path of second background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| dateOverlay |  the overlay color of date container |  hex values or RGB or text  |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |


## BtTslide

```javascript
const bttPresenter = new Clip.BtTslide(
  {
    title: "Presenter",
    name: "RIGANOSKILOS",
    position: "Web developer at kissmybuton",
    bgUrl: "./bg4.jpg",
    overlayColor: "#ff00004d",
    mainColor: "blue",
    speed: 2
  },
  {
    selector: ".container4"
  }
);
```

### BtTslide Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| name   |  second title | string |
| position |  subtitle   |  string |
| bgUrl |  the path of background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |





## BtTslideDate

```javascript
const bttDay = new Clip.BtTslideDate(
  {
    title: "Presenter",
    name: "RIGANOSKILOS",
    position: "Web developer at kissmybuton",
    bgUrl: "./bg3.jpg",
    overlayColor: "#ff00b34d",
    dateOverlay: "#ff00b3",
    mainColor: "#00ff40",
    bgUrl2: "./bg2.jpg",
    month: "December",
    day: `monday`,
    number: "20",
    year: "2019",
    speed: 2
  },
  {
    selector: ".container10"
  }
);
```

### BtTslideDate Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| name   |  second title | string |
| position |  subtitle   |  string |
| month |  the month  |  string  |
| day |  the day name  |  string  |
| number |  the number of day  |  string  |
| year |  the year |  string  |
| bgUrl |  the path of background image |  string  |
| bgUrl2 |  the path of second background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| dateOverlay |  the overlay color of date container |  hex values or RGB or text  |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |



## LtRslideTop

```javascript
const ltrPresenterTop = new Clip.LtRslideTop(
  {
    title: "Presenter",
    name: "RIGANOSKILOS",
    position: "Web developer at kissmybuton",
    bgUrl: "./bg2.jpg",
    overlayColor: "#ff00004d",
    mainColor: "blue",
    speed: 2
  },
  {
    selector: ".container11"
  }
);
```

### LtRslideTop Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| name   |  second title | string |
| position |  subtitle   |  string |
| bgUrl |  the path of background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |



## RtLslide

```javascript
const rtlPresenter = new Clip.RtLslide(
  {
    title: "Presenter",
    name: "RIGANOSKILOS",
    position: "Web developer at kissmybuton",
    bgUrl: "./bg4.jpg",
    overlayColor: "#ff00004d",
    mainColor: "blue",
    speed: 2
  },
  {
    selector: ".container4"
  }
);
```

### RtLslide Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| title     | title text  | string |
| name   |  second title | string |
| position |  subtitle   |  string |
| bgUrl |  the path of background image |  string  |
| overlayColor |  the overlay color of background image |  hex values or RGBA or text or list of hex/RGBA values |
| mainColor |  the main color of elementes  |  hex values or RGB or text  |
| speed |  how much slow animation will play  |  num |





# Add incident to your clip

```javascript
clip.addIncident(nameOfIncident, 0);

```



