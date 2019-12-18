# AngularNodeGUI

[![npm version](https://badge.fury.io/js/angular-nodegui.svg)](https://www.npmjs.com/package/angular-nodegui)

Build performant, native and cross-platform desktop applications with Angular.🚀

Angular NodeGUI is powered by Angular 🅰️ and Qt5 💚 which makes it CPU and memory efficient as compared to other chromium based solutions like electron. Angular NodeGUI is essentially a Angular renderer for NodeGUI.

## Docs

Main docs: https://docs.nodegui.org

Article(Russian): [Native and cross-platform desktop applications with Angular, NodeGui](https://medium.com/@irustm/%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D0%BC-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BD%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-6bee05d24e25)

## Nodegui Features

- Cross platform. Should work on major Linux flavours, Windows and MacOS.
- 📉 Low CPU and memory footprint. Current CPU stays at 0% on idle and memory usage is under 20mb for a hello world program.
- 💅 Styling with CSS (includes actual cascading). Also has full support for Flexbox layout (thanks to Yoga).
- ✅ Complete Nodejs api support (Currently runs on Node v12.x - and is easily upgradable). Hence has access to all nodejs compatible npm modules.
- 🎪 Native widget event listener support. Supports all events available from Qt / NodeJs.
- 💸 Can be used for Commercial applications.
- 🕵️‍♂️ Good Devtools support.
- 📚 Good documentation and website.
- 🧙‍♂️ Good documentation for contributors.
- Good support for dark mode (Thanks to QT).

# Getting started

## Requirements

- CMake 3.1 and up
- Make, GCC v7
- NodeJS 12.x and up.

Setting up on [macOS](https://docs.nodegui.org/docs/guides/getting-started#setting-up-on-macos), [Windows](https://docs.nodegui.org/docs/guides/getting-started#setting-up-on-windows), [Linux](https://docs.nodegui.org/docs/guides/getting-started#setting-up-on-linux)

[Getting started](https://docs.nodegui.org/docs/guides/getting-started)

## Easy start

```
npm i
npm start
```

## Demo

### Start app

[Link](https://github.com/irustm/angular-nodegui/tree/master/src/app)

<p align="center">
  <img src="https://raw.githubusercontent.com/irustm/angular-nodegui/master/demo/demo_app.png" width="350" title="angular nodegui demo">
</p>

### Router

Use `NodeguiRouterModule` instead of `RouterModule` for routing. [Example](https://github.com/irustm/angular-nodegui/blob/master/src/app/app.module.ts#L23)

```js
NodeguiRouterModule.forRoot(appRoutes);
```

### Widget

[Link](https://github.com/irustm/angular-nodegui/tree/master/projects/weather-demo)

#### Mac

<p align="center">
  <img src="https://raw.githubusercontent.com/irustm/angular-nodegui/master/demo/demo_widget_mac.png" width="300" title="angular nodegui demo">
</p>

#### Windows

<p align="center">
  <img src="https://raw.githubusercontent.com/irustm/angular-nodegui/master/demo/demo_weather_widget.png" width="600" title="angular nodegui demo">
</p>
