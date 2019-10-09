# motorcortex-plugin-boilerplate

## "Usage"

```
In order to create a MotorCortex-Plugin we recommend using this boilerplate.
```

## Step 1

Clone this repo using the command 
```bash
git clone https://github.com/kissmybutton/motorcortex-plugin-boilerplate.git
```

## Step 2

Install all the required npm modules
```bash
npm i
```

## Step 3

Create your plugin in the src folder. There you will find all the files you need on order to create a plugin with one exported incident.


### Step 4

In order to test your plugin in the demo folder we have a demo of the plugin. To run in simply type
```bash
npm start
```

#### Step 5

When you are happy with your plugin execute the followig commands
```bash
npm run build
npm run build:demo

git add .
npm run commit
git push origin master

npm publish
```
