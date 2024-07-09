# Mochi 2.0
### Front-end framework for developing responsive, mobile-first projects on the web or offline.

> [**v1.6.2**](https://github.com/codeworksdev/mochi/releases/latest) &nbsp;➜&nbsp;  [**v2.0.1**](https://github.com/codeworksdev/mochi-2.0/releases/latest)

Mochi 2.0 is a ready-to-go [HTML5 boilerplate](https://en.wikipedia.org/wiki/HTML5_Boilerplate) framework that runs on [Bootstrap](http://getbootstrap.com/), but adds tons of enhanced features with a strong focus on offline web applications, and without all the limitations. This is achieved by including and maintaining offline versions of popular open-source projects that have been out in the wild for years.

## What is Bootstrap?
[Bootstrap](http://getbootstrap.com/) is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with powerful [Sass](https://sass-lang.com/) variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on [jQuery](https://jquery.com/). Mochi 2.0 takes this a step further by enabling functionality that would normally require many hours of code writing and head scratching. More information on Bootstrap [here](http://getbootstrap.com/).

## Usage
To use Mochi 2.0 simply [download the latest distribution package](https://github.com/codeworksdev/mochi-2.0/releases/latest) and extract the contents of the included **`dist`** folder to the root of your website directory (e.g., **`/var/www/html`** in some systems). That's it! You now have a fully functioning and ready-to-deploy Bootstrap-powered HTML5 boilerplate web application installed on your website. Mochi 2.0 is designed to run either online or offline, depending on your desired configuration. More on that later.

The included HTML5 starter template ([**`dist/index.html`**](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/index.html)) is a great way to get started with Mochi 2.0. Since it's powered by Bootstrap you can do a bunch of things right out of the box, and with minimal effort. Check out the [official Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) to learn more about how to structure your HTML5/CSS markup according to the latest standards.

## What's Included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations for all libraries. You'll see something like this:

```
dist/
├── bootstrap/
│   ├── css/
│   │   ├── bootstrap.css
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.rtl.css
│   │   ├── bootstrap.rtl.min.css
│   │   ├── bootstrap-grid.css
│   │   ├── bootstrap-grid.min.css
│   │   ├── bootstrap-grid.rtl.css
│   │   ├── bootstrap-grid.rtl.min.css
│   │   ├── bootstrap-reboot.css
│   │   ├── bootstrap-reboot.min.css
│   │   ├── bootstrap-reboot.rtl.css
│   │   ├── bootstrap-reboot.rtl.min.css
│   │   ├── bootstrap-utilities.css
│   │   ├── bootstrap-utilities.min.css
│   │   ├── bootstrap-utilities.rtl.css
│   │   └── bootstrap-utilities.rtl.css
│   │
│   ├── js/
│   │   ├── bootstrap.bundle.js
│   │   ├── bootstrap.bundle.min.js
│   │   ├── bootstrap.esm.js
│   │   ├── bootstrap.esm.min.js
│   │   ├── bootstrap.js
│   │   └── bootstrap.min.js
│   │
│   └── scss/
│       └── bootstrap.scss
│
├── frontend/
│   ├── css/
│   │   ├── print-less.css
│   │   ├── print-sass.css
│   │   ├── style-less.css
│   │   └── style-sass.css
│   │
│   ├── img/
│   │   └── brand/
│   │       ├── launcher-icon-1x.png
│   │       ├── launcher-icon-4x.png
│   │       ├── screenshot_1n.png
│   │       ├── screenshot_1w.png
│   │       ├── screenshot_2n.png
│   │       └── screenshot_2w.png
│   │
│   ├── js/
│   │   └── onload.js
│   │
│   ├── less/
│   │   ├── _375up.less
│   │   ├── _425up.less
│   │   ├── _480up.less
│   │   ├── _576up.less
│   │   ├── _640up.less
│   │   ├── _750up.less
│   │   ├── _768up.less
│   │   ├── _970up.less
│   │   ├── _992up.less
│   │   ├── _1020up.less
│   │   ├── _1024up.less
│   │   ├── _1170up.less
│   │   ├── _1200up.less
│   │   ├── _1400up.less
│   │   ├── _1440up.less
│   │   ├── _1560up.less
│   │   ├── _1920up.less
│   │   ├── _2560up.less
│   │   ├── _3840up.less
│   │   ├── _base.less
│   │   ├── _mixins.less
│   │   ├── _notouch.less
│   │   ├── _print.less
│   │   ├── print-less.less
│   │   └── style-less.less
│   │
│   └── scss/
│       ├── _375up.scss
│       ├── _425up.scss
│       ├── _480up.scss
│       ├── _576up.scss
│       ├── _640up.scss
│       ├── _750up.scss
│       ├── _768up.scss
│       ├── _970up.scss
│       ├── _992up.scss
│       ├── _1020up.scss
│       ├── _1024up.scss
│       ├── _1170up.scss
│       ├── _1200up.scss
│       ├── _1400up.scss
│       ├── _1440up.scss
│       ├── _1560up.scss
│       ├── _1920up.scss
│       ├── _2560up.scss
│       ├── _3840up.scss
│       ├── _base.scss
│       ├── _mixins.scss
│       ├── _notouch.scss
│       ├── _print.scss
│       ├── print-sass.scss
│       └── style-sass.scss
│
├── mochi/
│   ├── css/
│   │   └── helpers/
│   │       └── animate.less/
│   │           └── dist/
│   │               ├── css/
│   │               │   └── animate.css
│   │               │
│   │               └── less/
│   │                   ├── _mixins.less
│   │                   ├── _options.less
│   │                   └── animate.less
│   │
│   ├── js/
│   │   ├── jquery/
│   │   │   └── ui/
│   │   │      ├── external/
│   │   │      │   └── jquery/
│   │   │      │       └── jquery.js
│   │   │      │
│   │   │      ├── images/
│   │   │      │   ├── ui-icons_444444_256x240.png
│   │   │      │   ├── ui-icons_555555_256x240.png
│   │   │      │   ├── ui-icons_777620_256x240.png
│   │   │      │   ├── ui-icons_777777_256x240.png
│   │   │      │   ├── ui-icons_cc0000_256x240.png
│   │   │      │   └── ui-icons_ffffff_256x240.png
│   │   │      │
│   │   │      ├── jquery-ui.css
│   │   │      ├── jquery-ui.js
│   │   │      ├── jquery-ui.min.css
│   │   │      ├── jquery-ui.min.js
│   │   │      ├── jquery-ui.structure.css
│   │   │      ├── jquery-ui.structure.min.css
│   │   │      ├── jquery-ui.theme.css
│   │   │      └── jquery-ui.theme.min.css
│   │   │
│   │   ├── plugins/
│   │   │   ├── dialog/
│   │   │   │   └── dist/
│   │   │   │       ├── dialog.js
│   │   │   │       └── dialog.min.js
│   │   │   │
│   │   │   └── veeva/
│   │   │       └── dist/
│   │   │           ├── ext/
│   │   │           │   └── veeva-library.js
│   │   │           │
│   │   │           ├── veeva.js
│   │   │           └── veeva.min.js
│   │   │
│   │   ├── libraries.js
│   │   ├── mochi.js
│   │   └── mochi.min.js
│   │
│   ├── less/
│   │   ├── _375up.less
│   │   ├── _425up.less
│   │   ├── _480up.less
│   │   ├── _576up.less
│   │   ├── _640up.less
│   │   ├── _750up.less
│   │   ├── _768up.less
│   │   ├── _970up.less
│   │   ├── _992up.less
│   │   ├── _1020up.less
│   │   ├── _1024up.less
│   │   ├── _1170up.less
│   │   ├── _1200up.less
│   │   ├── _1400up.less
│   │   ├── _1440up.less
│   │   ├── _1560up.less
│   │   ├── _1920up.less
│   │   ├── _2560up.less
│   │   ├── _3840up.less
│   │   ├── _base.less
│   │   ├── _mixins.less
│   │   ├── _notouch.less
│   │   └── _print.less
│   │
│   └── scss/
│       ├── _375up.scss
│       ├── _425up.scss
│       ├── _480up.scss
│       ├── _576up.scss
│       ├── _640up.scss
│       ├── _750up.scss
│       ├── _768up.scss
│       ├── _970up.scss
│       ├── _992up.scss
│       ├── _1020up.scss
│       ├── _1024up.scss
│       ├── _1170up.scss
│       ├── _1200up.scss
│       ├── _1400up.scss
│       ├── _1440up.scss
│       ├── _1560up.scss
│       ├── _1920up.scss
│       ├── _2560up.scss
│       ├── _3840up.scss
│       ├── _base.scss
│       ├── _mixins.scss
│       ├── _notouch.scss
│       └── _print.scss
│
├── .htaccess
├── index.html
├── manifest.json
├── offline.html
├── project.appcache
├── robots.txt
└── sw.js
```

___
# Included Libraries

One of the major advantages of using Mochi 2.0 is that it comes packed with many useful 3rd-party projects to help you develop your application rapidly, and with less effort than would be necessary with just the standard Bootstrap distribution. The following 3rd-party projects are included with our [standard distribution package](https://github.com/codeworksdev/mochi-2.0/tree/main/dist):

| Project           | Version | Developer Website                              |
|-------------------|---------|------------------------------------------------|
| Animate.less      | 2.0     | https://animateforless.com/                    |
| Basil.js          | 0.4.11  | https://github.com/Wisembly/basil.js           |
| Bootstrap         | 5.3.3   | https://getbootstrap.com/                      |
| Chart.js          | 4.4.3   | https://www.chartjs.org/                       |
| Clipboard.js      | 2.0.11  | https://clipboardjs.com/                       |
| Font Awesome Free | 6.5.2   | https://fontawesome.com/                       |
| Holder.js         | 2.9.7   | http://holderjs.com/                           |
| iScroll           | 5.2.0   | https://github.com/cubiq/iscroll               |
| jQuery            | 3.7.1   | http://jquery.com/                             |
| jQuery UI         | 1.13.3  | https://jqueryui.com/                          |
| Modernizr         | 3.6.0   | https://modernizr.com/                         |
| Popper.js         | 2.11.8  | https://popper.js.org/docs/v2/                 |
| sprintf-js        | 1.1.3   | https://www.npmjs.com/package/sprintf-js       |
| Underscore.js     | 1.13.6  | http://underscorejs.org/                       |
| Underscore.string | 3.2.1   | https://github.com/esamattis/underscore.string |

___
# Included Plugins

In addition to the standard libraries above Mochi 2.0 also comes packaged with special plugins designed to extend its capabilities. These extensions are completely optional and are safe to remove from your production project without issues. The following Mochi 2.0 plugins are included with our [standard distribution package](https://github.com/codeworksdev/mochi-2.0/tree/main/dist):

| Plugin    | Version                                                                                                | Description                  |
|-----------|--------------------------------------------------------------------------------------------------------|------------------------------|
| Dialog    | [1.0](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/dialog/CHANGELOG.md) | Dialog UI extension.         |
| Veeva CLM | [1.0](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/CHANGELOG.md)  | Add Veeva CLM compatibility. |

**Note:** Click [here](https://github.com/codeworksdev/mochi-2.0?tab=readme-ov-file#extending-mochi) for more information on how to extend Mochi 2.0 with your own plugins and/or features.

___
# Sass CSS Preprocessor Support
Unlike its predecessor, Mochi 2.0 includes full support for the [Sass](https://sass-lang.com/) CSS preprocessor language. As a result, the [standard distribution package](https://github.com/codeworksdev/mochi-2.0/tree/main/dist) now includes all the [Bootstrap project source Sass files](https://github.com/codeworksdev/mochi-2.0/tree/main/dist/bootstrap/scss) to take advantage of the variables, maps, mixins, and functions necessary to build faster and customize your project with greater ease.

## What is Sass?
From [Wikipedia](https://en.wikipedia.org/wiki/Sass_(style_sheet_language)), [Sass](https://sass-lang.com/) (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). [SassScript](https://www.rubydoc.info/gems/sass/Sass/Script) is the scripting language itself.

There are many applications that will get you up and running with Sass in a few minutes for Mac, Windows, and Linux. You can download most of the applications for free but a few of them are paid apps. More on that [here](https://sass-lang.com/install/).

## Predefined CSS Media Queries
Predefined [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are defined in the folder **`dist/frontend/scss`**. Each media query is assigned a dedicated Sass import file for better organization, and of course, they're all completely optional. Each media query assumes the standard (96dpi) screen resolution.

| 96dpi (1dppx)   | Typical Device                | File (96dpi)   |
|-----------------|-------------------------------|----------------|
| <= 374px (base) | Phone (legacy)                | `_base.scss`   |
| >= 375px        | Phone (legacy)                | `_375up.scss`  |
| >= 425px        | Phone (large)                 | `_425up.scss`  |
| >= 480px        | Phone (large), Tablet (small) | `_480up.scss`  |
| >= 576px        | Phone (large), Tablet (small) | `_576up.scss`  |
| >= 750px        | Tablet (small)                | `_750up.scss`  |
| >= 768px        | Tablet (small)                | `_768up.scss`  |
| >= 970px        | Tablet (medium)               | `_970up.scss`  |
| >= 992px        | Tablet (medium)               | `_992up.scss`  |
| >= 1020px       | Tablet (large)                | `_1020up.scss` |
| >= 1024px       | Tablet (large)                | `_1024up.scss` |
| >= 1170px       | Desktop, Laptop, Tablet       | `_1170up.scss` |
| >= 1200px       | Desktop, Laptop, Tablet       | `_1200up.scss` |
| >= 1400px       | Desktop/Laptop (HD)           | `_1400up.scss` |
| >= 1440px       | Desktop/Laptop (HD)           | `_1440up.scss` |
| >= 1560px       | Desktop (HD)                  | `_1560up.scss` |
| >= 1920px       | Desktop (HD)                  | `_1920up.scss` |
| >= 2560px       | Desktop (2K)                  | `_2560up.scss` |
| >= 3840px       | Desktop (4K)                  | `_3840up.scss` |

## Special Sass Imports
In addition to the media breakpoints listed above, the following import files are also included:

| File                  | Description                                                                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `_base.scss`          | Base styles for all media queries (i.e., all devices).                                                                                                                   |
| `_print.scss`         | Styles for printed media. Imports Bootstrap compiled CSS.                                                                                                                |
| `_notouch.scss`       | Styles for non-touch enabled devices (e.g., desktops).                                                                                                                   |
| `_mixins.scss`        | Define your own global Sass mixins, variables, and functions.                                                                                                            |
| **`print-sass.scss`** | Generates CSS file for [printed media](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types).                    |
| **`style-sass.scss`** | Generates CSS file for all media types other than [print](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types). |

_**Note:** When importing the folder **`dist/frontend/scss`** into your Sass compiler please make sure only the **`print-sass.scss`** and **`style-sass.sccss`** files are compiled to CSS, and not the files prefixed with an underscore._

## Predefined Mixins
Some custom Sass mixins are included to help streamline development of CSS in your project. We recommend having a look at [**`dist/mochi/scss/_mixins.scss`**](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/scss/_mixins.scss) to see what's included in our [standard distribution package](https://github.com/codeworksdev/mochi-2.0/tree/main/dist).

_**Note:** We've included an empty mixins file at **`dist/frontend/scss/_mixins.scss`**. If you'd like to define your own mixins in your project, we strongly recommend editing this empty file instead of the predefined mixins file inside the **`dist/mochi/scss`** folder._

## Output CSS Files
Mochi 2.0 imports final (compiled) CSS files generated by your preferred [Sass](https://sass-lang.com/) preprocessor. Below is a snippet showing how the files are included within your project. You'll notice there are [Less.js](http://lesscss.org/) generated CSS files included as well. Keep scrolling to learn more.

```html
...
    <link media="all"   rel="stylesheet" href="frontend/css/style-sass.css">
    <link media="all"   rel="stylesheet" href="frontend/css/style-less.css">
    <link media="print" rel="stylesheet" href="frontend/css/print-sass.css">
    <link media="print" rel="stylesheet" href="frontend/css/print-less.css">
</head>
```

| File                          | Description                                                                                                                                                    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `frontend/css/print-sass.css` | CSS file for [printed media](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types).                    |
| `frontend/css/style-sass.css` | CSS file for all media types other than [print](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types). |

___
# Less.js CSS Preprocessor Support

In addition to Sass, Mochi 2.0 makes heavy use of [Less.js](http://lesscss.org/) to allow you to rapidly construct your CSS stylesheets within the many [predefined media queries](#predefined-media-queries) supported by our [standard distribution package](https://github.com/codeworksdev/mochi-2.0/tree/main/dist).

## What is Less.js?
[Less.js](http://lesscss.org/) is a CSS preprocessor that extends the CSS language, adding features that introduce variables, mixins, functions, and many other techniques commonly found in popular scripting languages. This allows you to make CSS that is more maintainable, themable and extendable.

Less.js runs inside [Node](https://nodejs.org/), in the browser and inside [Rhino](https://mozilla.github.io/rhino/). There are also many [3rd-party tools](http://lesscss.org/usage/index.html#guis-for-less)  available that allow you to compile your files and watch for changes. The latter is the way to go if you want to get up and running quickly.

## Predefined Media Queries
Predefined [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are defined in the folder **`dist/frontend/less`**. Each media query is assigned a dedicated Less import file for better organization, and of course, they're all completely optional. Each media query assumes the standard (96dpi) screen resolution.

| 96dpi (1dppx)   | Typical Device                | File (96dpi)   |
|-----------------|-------------------------------|----------------|
| <= 374px (base) | Phone (legacy)                | `_base.less`   |
| >= 375px        | Phone (legacy)                | `_375up.less`  |
| >= 425px        | Phone (large)                 | `_425up.less`  |
| >= 480px        | Phone (large), Tablet (small) | `_480up.less`  |
| >= 576px        | Phone (large), Tablet (small) | `_576up.less`  |
| >= 750px        | Tablet (small)                | `_750up.less`  |
| >= 768px        | Tablet (small)                | `_768up.less`  |
| >= 970px        | Tablet (medium)               | `_970up.less`  |
| >= 992px        | Tablet (medium)               | `_992up.less`  |
| >= 1020px       | Tablet (large)                | `_1020up.less` |
| >= 1024px       | Tablet (large)                | `_1024up.less` |
| >= 1170px       | Desktop, Laptop, Tablet       | `_1170up.less` |
| >= 1200px       | Desktop, Laptop, Tablet       | `_1200up.less` |
| >= 1400px       | Desktop/Laptop (HD)           | `_1400up.less` |
| >= 1440px       | Desktop/Laptop (HD)           | `_1440up.less` |
| >= 1560px       | Desktop (HD)                  | `_1560up.less` |
| >= 1920px       | Desktop (HD)                  | `_1920up.less` |
| >= 2560px       | Desktop (2K)                  | `_2560up.less` |
| >= 3840px       | Desktop (4K)                  | `_3840up.less` |

## Special Less Imports
In addition to the media breakpoints listed above, the following import files are also included:

| File                  | Description                                                                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `_base.less`          | Base styles for all media queries (i.e., all devices).                                                                                                                   |
| `_print.less`         | Styles for printed media.                                                                                                                                                |
| `_notouch.less`       | Styles for non-touch enabled devices (e.g., desktops).                                                                                                                   |
| `_mixins.less`        | Define your own global Less mixins, variables, and functions.                                                                                                            |
| **`print-less.less`** | Generates CSS file for [printed media](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types).                    |
| **`style-less.less`** | Generates CSS file for all media types other than [print](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types). |

_**Note:** When importing the folder **`dist/frontend/less`** into your Less.js compiler please make sure only the **`print-less.less`** and **`style-less.less`** files are compiled to CSS, and not the files prefixed with an underscore._

## Predefined Mixins
Some custom Less mixins are included to help streamline development of CSS in your project. We recommend having a look at [**`dist/mochi/less/_mixins.less`**](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/less/_mixins.less) to see what's included in our [standard distribution package](https://github.com/codeworksdev/mochi-2.0/tree/main/dist).

_**Note:** We've included an empty mixins file at **`dist/frontend/less/_mixins.less`**. If you'd like to define your own mixins in your project we strongly recommend editing this empty file instead of the predefined mixins file inside the **`dist/mochi/less`** folder._

## Animate.less
[Animate.less](http://animateforless.com/) is a powerful [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) framework for animating HTML elements in a [script-less](https://github.com/codeworksdev/animate.less#script-less-animations) format. Mochi 2.0 automatically imports this library into your project, allowing you to take full advantage of the many predefined animations already included. You can even build your own animations with this framework! More on that [here](http://animateforless.com/).

## Output CSS Files
Mochi 2.0 imports final (compiled) CSS files generated by your preferred [Less.js](http://lesscss.org/) preprocessor. Below is a snippet showing how the files are included within your project. It's important to note the order in which the CSS files are included. This order is important, since the Sass generated files contain compiled CSS from [Bootstrap](https://getbootstrap.com/), the [jQuery UI](https://jqueryui.com/) library, and the [Animate.less](https://animateforless.com/) project.

```html
...
    <link media="all"   rel="stylesheet" href="frontend/css/style-sass.css">
    <link media="all"   rel="stylesheet" href="frontend/css/style-less.css">
    <link media="print" rel="stylesheet" href="frontend/css/print-sass.css">
    <link media="print" rel="stylesheet" href="frontend/css/print-less.css">
</head>
```

| File                          | Description                                                                                                                                                    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `frontend/css/print-less.css` | CSS file for [printed media](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types).                    |
| `frontend/css/style-less.css` | CSS file for all media types other than [print](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types). |

___
# Caching System
Mochi 2.0 includes a fully functional [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (in [**`dist/sw.js`**](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/sw.js)) for developing high-performance websites and offline apps, complete with push notifications and automated updates. It's disabled by default, but you can easily enable it using the [Mochi 2.0 API](#api). More information about the standard Service Worker API [here](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).

_**Note:** The (now deprecated) [HTML5 application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) is still supported (in [**`dist/project.appcache`**](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/project.appcache)), but we strongly discourage using it, since it has been removed from the Web standards. Though some browsers may still support it, it is in the process of being dropped. Be aware that this feature may cease to work at any time._

___
# Apache Server Configs
The [.htaccess](https://httpd.apache.org/docs/2.4/howto/htaccess.html) file ([**`dist/.htaccess`**](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/.htaccess)) is a collection of common server-side configurations that can help your web server improve your website's performance and security, while also ensuring that resources are served with the correct content-type and are accessible, if needed, even cross-domain. More information [here](https://github.com/h5bp/server-configs-apache).

_**Note:** You can safely delete this file without issue if it doesn't apply to your server or project requirements._

___
# API

## Starter Template
Mochi 2.0 includes a simple JavaScript starter template (in [**`dist/frontend/js/onload.js`**](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/frontend/js/onload.js)) to help you tie everything together and get started on your project right away. Continue reading below to get familiar with the how the Mochi 2.0 API can help accelerate your app development.

## Persistent Mochi 2.0 Instance
First things first! After your web page is fully loaded and rendered the Mochi 2.0 instance will register itself as a standard JavaScript global variable called **`$m`**. This variable is defined within the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object scope, making it accessible by your entire application.

The persistent Mochi 2.0 instance contains the following components:

| [Methods](#methods)                          | [Hooks](#hooks)                             | [Options](#options)                                                 | [Properties](#properties) |
|----------------------------------------------|---------------------------------------------|---------------------------------------------------------------------|---------------------------|
| [do](#mdo)                                   | [mochi_before](#mochi_before)               | [CLICK_NAME](#click_name)                                           | __body                    |
| [extend](#mextend)                           | [mochi_init](#mochi_init)                   | [DEBUG_MODE](#debug_mode)                                           | __container               |
| [getDefaultOption](#mgetdefaultoption)       | [mochi_load](#mochi_load)                   | [ENABLE_SERVICE_WORKER](#enable_service_worker)                     | __content                 |
| [getOnClickName](#mgetonclickname)           | [mochi_load_page](#mochi_load_page)         | [LAZY_LOAD_PLUGINS](#lazy_load_plugins)                             | __head                    |
| [getOption](#mgetoption)                     | [mochi_load_page{N}](#mochi_load_pagen)     | [SW_UPDATE_NOTIFICATIONS](#sw_update_notifications)                 | __href                    |
| [getPage](#mgetpage)                         | [mochi_load_view](#mochi_load_view)         | [SW_UPDATE_NOTIFICATIONS_OPTIONS](#sw_update_notifications_options) | __html                    |
| [getState](#mgetstate)                       | [mochi_load_view{N}](#mochi_load_viewn)     | [SW_VERBOSE_SYNCING](#sw_verbose_syncing)                           | __observer                |
| [getView](#mgetview)                         | [mochi_unload](#mochi_unload)               | [SW_VERBOSE_SYNCING_OPTIONS](#sw_verbose_syncing_options)           | __page_name               |
| [isSimpleObj](#missimpleobj)                 | [mochi_unload_page](#mochi_unload_page)     |                                                                     |                           |
| [load](#mload)                               | [mochi_unload_page{N}](#mochi_unload_pagen) |                                                                     |                           |
| [loadPage](#mloadpage)                       | [mochi_unload_page](#mochi_unload)          |                                                                     |                           |
| [loadView](#mloadview)                       | [mochi_unload_page{N}](#mochi_unload_pagen) |                                                                     |                           |
| [log](#mlog)                                 | [mochi_unload_view](#mochi_unload_view)     |                                                                     |                           |
| [onClick](#monclick)                         | [mochi_unload_view{N}](#mochi_unload_viewn) |                                                                     |                           |
| [sanitizeTitle](#msanitizetitle)             | [mochi_last](#mochi_last)                   |                                                                     |                           |
| [setOnClickName](#msetonclickname)           | [mochi_onchange](#mochi_onchange)           |                                                                     |                           |
| [setOption](#msetoption)                     | [mochi_onmutation](#mochi_onmutation)       |                                                                     |                           |
| [setPage](#msetpage)                         |                                             |                                                                     |                           |
| [setState](#msetstate)                       |                                             |                                                                     |                           |
| [setView](#msetview)                         |                                             |                                                                     |                           |
| [unload](#munload)                           |                                             |                                                                     |                           |
| [unloadPage](#munloadpage)                   |                                             |                                                                     |                           |
| [unloadView](#munloadview)                   |                                             |                                                                     |                           |
| [widgetOnDownloading](#mwidgetondownloading) |                                             |                                                                     |                           |
| [widgetOnUpdateReady](#mwidgetonupdateready) |                                             |                                                                     |                           |


## Methods

> ## $m&period;do()
>
> _Mochi_ **$m&period;do(** _array|string_ **name** [, _array_ **arguments**] **)**
>
> Calls one or more predefined functions by `name`, in which `this` is assigned `$m` ([persistent Mochi 2.0 instance](#persistent-mochi-instance)), and the optional list of `arguments` are passed as an array to each. If `name` is an array, assumes a list of function names to be called, in the order given. Each function must be a valid [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) type. Each function must be defined within the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object scope. Any undefined functions are skipped without error. This method works similar to [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), but with the added logic.

> ## $m.extend()
>
> _Mochi_ **$m.extend(** _string_ **namespace**, _[Function&period;name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)_ **instance** [, _object_ **meta**][, _function_ **callback**] **)**
>
> Extends `$m` ([persistent Mochi 2.0 instance](https://github.com/codeworksdev/mochi-2.0#persistent-mochi-instance)) by creating a new [instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) of a user-defined function (i.e., an object type that has a constructor function), and storing that instance as an [object key](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) referenced by `namespace` under `$m` (e.g., `$m.somethingcool`). The optional `callback` function is executed immediately after, with `this` assigned as a reference of `instance` in `namespace`. Additionally, you can pass a `meta` [object](https://github.com/codeworksdev/mochi-2.0#missimpleobj) as the first parameter to the `instance` and `callback` functions. If no `meta` is provided, assumes an empty object.
>
>  _**Note:** This method is especially useful for [plugin development](#plugins)._

> ## $m.getDefaultOption()
>
> _mixed_ **$m.getDefaultOption(** _string_ **name** **)**
>
> Shorthand for [`$m.getOption(name, true)`](#mgetoption).

> ## $m.getOption()
>
> _mixed_ **$m.getOption(** _string_ **name**[, _bool_ **default**] **)**
>
> Returns the value of the requested [option](#options) by `name` (case-sensitive). If `default` is `true`, returns the default value of the option instead, as defined by the framework. If the requested option is a [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) type, gets the return value of that function, `undefined` otherwise. If the return value is a [`simple object`](#missimpleobj) type, returns a [deep copy](https://scotch.io/bar-talk/copying-objects-in-javascript#toc-deep-copying-objects) of that object.

> ## $m.getOnClickName()
>
> _string_ **$m.getOnClickName()**
>
> Returns the current value of the [`CLICK_NAME`](#click_name) option. Additionally, if [`CLICK_NAME`](#click_name) is currently set to `"auto"`, returns the [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event name for [touch-enabled](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) devices, and [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click) for all other device types.

> ## $m.getPage()
>
> _number_ **$m.getPage(** [_number_ **padding**] **)**
>
> Shorthand for [`$m.getState('page', padding)`](#mgetstate). Returns the value of the `data-page` attribute in `<html>` for the active HTML document. Assumes `0` (zero) if `data-page` is undefined or not numeric. If `padding` is given, zero-pads the returned number by that amount. By default, `0` (zero) is returned with the given `padding`.

> ## $m.getState()
>
> _number_ **$m.getState(** _string_ **page|view** [, _number_ **padding**] **)**
>
> Returns the value of either the `data-page` or `data-view` attribute in `<html>` for the active HTML document. Assumes `0` (zero) if the attribute is undefined or not numeric. If `padding` is given, zero-pads the returned number by that amount. By default, `0` (zero) is returned with the given `padding`.

> ## $m.getView()
>
> _number_ **$m.getView(** [_number_ **padding**] **)**
>
> Shorthand for [`$m.getState('view', padding)`](#mgetstate). Returns the value of the `data-view` attribute in `<html>` for the active HTML document. Assumes `0` (zero) if `data-view` is undefined or not numeric. If `padding` is given, zero-pads the returned number by that amount. By default, `0` (zero) is returned with the given `padding`.

> ## $m.isSimpleObj()
>
> _bool_ **$m.isSimpleObj(** _mixed_ **value** **)**
>
> Checks whether the given value (`value`) is a simple JavaScript **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** type (i.e., not an **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** or **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)** object type). Uses the **[`_.isObject()`](http://underscorejs.org/#isObject)** [Underscore.js](http://underscorejs.org/) function, but with the stricter type checking.

> ## $m.load()
>
> _Mochi_ **$m.load(** _string_ **page|view**, _number_ **number**[, _object_ **meta**] **)**
>
> Calls a series of [hooks](#hooks) based on either the `"page"` or `"view"` string, and `number` given. For example, `$m.load("page", 1.5)` implies the `data-page` attribute in `<html>` for the active HTML document must be changed to `1.5`, but only if `data-page` isn't already set to `1.5`. If a `meta` [object](#missimpleobj) is given, passes that object as the first parameter for each called hook, with `this` assigned as a reference to `$m` ([persistent Mochi 2.0 instance](#persistent-mochi-instance)).
>
> **FOR EXAMPLE**
> _To call all **page 1.5** "loading" hooks in the active HTML document, you can do:_
> ```js
> $m.load("page", 1.5, {key1 : value1, key2 : value2});
> ```
> Which would execute the following hooks (in order):
> ```js
> mochi_load()          // Generic loading hook
> mochi_load_page()     // Generic page loading hook
> mochi_load_page1_5()  // Dedicated loading hook for page 1.5
> mochi_onchange()      // After everything else completes
> ```
> _**Note:** Each hook receives a default meta object of key/value pairs as the first parameter, with `this` assigned as a reference to `$m` ([persistent Mochi 2.0 instance](#persistent-mochi-instance)). If the optional `meta` object is given as the 3rd parameter, merges it with this default object, ensuring each property listed below is not overridden. See below for a list of mandatory properties in the default meta object._
>
> **DEFAULT META OBJECT**
>
> | property       | type   | description                                                                               |
> |----------------|--------|-------------------------------------------------------------------------------------------|
> | caller         | string | Name of function or constructor that called this method (e.g., "[loadPage](#mloadpage)"). |
> | newStateNumber | number | New state number, if provided. Otherwise, uses current/unchanged state number.            |
> | oldStateNumber | number | Previous state number, if provided. Otherwise, uses unchanged state number.               |
> | stateName      | string | The state name in this call (either `"page"` or `"view"`).                                |

> ## $m.loadPage()
>
> _Mochi_ **$m.loadPage(** _number_ **number** **)**
>
> Shorthand for [`$m.load("page", number)`](#mload).

> ## $m.loadView()
>
> _Mochi_ **$m.loadView(** _number_ **number** **)**
>
> Shorthand for [`$m.load("view", number)`](#mload).

> ## $m.log()
>
> _Mochi_ **$m.log(** _string_ **message**[, _bool_ **condition**] **)**
>
> Outputs an [informational message](https://developer.mozilla.org/en-US/docs/Web/API/Console/info) to the Web Console, but only if the given `condition` is `true`. If a `condition` is not provided, outputs the message if the [DEBUG_MODE](#debug_mode) option evaluates to `true`.

> ## $m.onClick()
>
> _jQuery_ **$m.onClick(** _mixed_ **target**[, _object **eventData**][, _function_ **handler**] **)**
>
> Like [jQuery.on()](http://api.jquery.com/on/), but automatically determines the event name to bind to the `target` (which could either be a CSS selector string, HTML element, or jQuery object type). The event name is chosen from the return value of [$m.getOnClickName()](#mgetonclickname). `handler` is a function to be executed when the event is triggered, receiving the [`Event`](http://api.jquery.com/Types/#Event) object as the first parameter. If no `handler` is given, assumes `false`, which is shorthand for a function that simply does `return false`. If `eventData` is provided, it is passed to the `handler` in [`event.data`](http://api.jquery.com/event.data/) when the event is triggered.

> ## $m.sanitizeTitle()
>
> _string_ **$m.sanitizeTitle(** _string_ **string**[, _string_ **delimiter**][, _string_ **fallback**] **)**
>
> Sanitizes the given `string`. Specifically, `string` is converted to lowercase, with all non-[alphanumeric](https://en.wikipedia.org/wiki/Alphanumeric) characters replaced with a `delimiter`. If no `delimiter` is given, uses the hyphen character (`-`). If `delimiter` is non-alphanumeric, all duplicate delimiters are removed (e.g., `my--sanitized---string` becomes `my-sanitized-string`). If `delimiter` is an empty string, no delimiter is used. Additionally, if the optional `fallback` string is given, uses that string, but only if the sanitized `string` is empty. If `fallback` is given, it's also sanitized before being returned.

> ## $m.setOnClickName()
>
> _Mochi_ **$m.setOnClickName(** _string_ **eventName** **)**
>
> Changes the value of the [`CLICK_NAME`](#click_name) option to the `eventName` given. `eventName` must be an [alphanumeric](https://en.wikipedia.org/wiki/Alphanumeric) string. Otherwise, no changes are applied.

> ## $m.setOption()
>
> _Mochi_ **$m.setOption(** _string|object_ **option**[, _mixed_ **value**] **)**
>
> If `option` is a string, assigns `value` to that option. If no `value` is given, assumes `undefined`. Otherwise, if `option` is a [simple object](#missimpleobj) type, assumes a list of options to set, with each key/value pair treated as an individual `option/value` assignment. Additionally, if `value` is a simple object type, recursively sets each key/value pair in the option, but only if `option` is also a simple object type. In this case, each key/value in `value` is checked to make sure it's supported by the `option` (i.e., if the key exists as a property in `option`). Any unsupported (non-existent) keys are simply ignored, with no errors produced.

> ## $m.setPage()
>
> _Mochi_ **$m.setPage(** _number_ **number**[, _function_ **callback**] **)**
>
> Shorthand for [`$m.setState("page", number)`](#msetstate).

> ## $m.setState()
>
> _Mochi_ **$m.setState(** _string_ **page|view**, _number_ **number**[, _function_ **callback**] **)**
>
> Sets the value of either the `data-page` or `data-view` attribute in `<html>` for the active HTML document with the given `number`, but only if the target attribute isn't already set with the same `number`. For example, `$m.setState("page", 1.5)` would imply that the value of the `data-page` attribute in `<html>` for the active HTML document must be set to `1.5`, but only if `data-page` isn't already set to `1.5`. Therefore, assuming `data-page` was previously set to `1`, assigns `1.5` to `data-page` in `<html>` for the active HTML document, subsequently calling the following [hooks](#hooks) (in order):
>
>```js
> mochi_unload()        // Generic unloading hook
> mochi_unload_page()   // Generic page unloading hook
> mochi_unload_page1()  // Unloading hook for page 1
> mochi_onchange()      // After unloading completes
> mochi_load()          // Generic loading hook
> mochi_load_page()     // Generic page loading hook
> mochi_load_page1_5()  // Loading hook for page 1.5
> mochi_onchange()      // After loading completes
> ```
>
>  **NOTES**
>  1. If `callback` is given, executes that function after all hooks are called.
>  2. Each hook receives a meta object as its first parameter. See [`$m.load()`](#mload) for details.
>  3. `callback` receives the same meta object as its first parameter.

> ## $m.setView()
>
> _Mochi_ **$m.setView(** _number_ **number**[, _function_ **callback**] **)**
>
> Shorthand for [`$m.setState("view", number)`](#msetstate).

> ## $m.unload()
>
> _Mochi_ **$m.unload(** _string_ **page|view**, _number_ **number**[, _object_ **meta**] **)**
>
> Similar to [`$m.load()`](#mload), but calls unloading hooks instead.
>
> **FOR EXAMPLE**
> _To call all **page 1.5** "unloading" hooks in the active HTML document, you can do:_
> ```js
> $m.unload("page", 1.5, {key1 : value1, key2 : value2});
> ```
> Which would execute the following hooks (in order):
> ```js
> mochi_unload()          // Generic unloading hook
> mochi_unload_page()     // Generic page unloading hook
> mochi_unload_page1_5()  // Unloading hook for page 1.5
> mochi_onchange()        // After unloading completes
> ```

> ## $m.unloadPage()
>
> _Mochi_ **$m.unloadPage(** _number_ **number** **)**
>
> Shorthand for [`$m.unload("page", number)`](#munload).

> ## $m.unloadView()
>
> _Mochi_ **$m.unloadView(** _number_ **number** **)**
>
> Shorthand for [`$m.unload("view", number)`](#munload).

> ## $m.widgetOnDownloading()
>
> _Mochi_ **$m.widgetOnDownloading(** [_string_ **text**][, _string_ **icon**][_bool_ **spin**] **)**
>
> Generates a [dismissible](https://getbootstrap.com/docs/5.3/components/alerts/#dismissing) [alert widget](https://getbootstrap.com/docs/5.3/components/alerts/) with the given `text` and [`icon`](https://fontawesome.com/icons?d=gallery&m=free) included. If `spin` is `true`, the `icon` is set in a [rotating animation](https://fontawesome.com/how-to-use/svg-with-js#animated-icons). Keep in mind that `icon` must be a valid [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free) icon class. Each parameter is optional, with their default values pulled from the [`SW_VERBOSE_SYNCING_OPTIONS`](#sw_verbose_syncing_options) option.
>
>  _**Note:** No action is taken if an instance of this widget is already active on screen._

> ## $m.widgetOnUpdateReady()
>
> _Mochi_ **$m.widgetOnUpdateReady(** [_string_ **buttonTitle**][, _string_ **dialogButtonTitle**][_string_ **dialogContent**][, _string_ **dialogTitle**] **)**
>
> Generates a [button](https://getbootstrap.com/docs/5.3/components/buttons/) that triggers a [vertically centered](https://getbootstrap.com/docs/5.3/components/modal/#vertically-centered) [modal](https://getbootstrap.com/docs/5.3/components/modal/) widget. You can customize the button label and modal content with the supported parameters. Each parameter is optional, with their default values pulled from the [`SW_UPDATE_NOTIFICATIONS_OPTIONS`](#sw_update_notifications_options) option.
>
>  _**Note:** No action is taken if an instance of this widget is already active on screen._

## Hooks
Hooks are provided by Mochi 2.0 to allow your application to easily 'hook into' the rest of the framework, with minimal coding required. There are several types of hooks that are supported. Each hook is called automatically by the Mochi 2.0 framework under special circumstances, depending on type.

_**Note:** Hook are completely optional within your project and, if defined, are called with `this` assigned as a reference to `$m` ([persistent Mochi 2.0 instance](#persistent-mochi-instance)). Additionally, some of these hooks receive a [meta object](#mload) as the first (and only) parameter. This object contains information regarding the call. More information [here](#mload)._

> ## mochi_before()
>
> _void_ **mochi_before()**
>
> If defined, executes during Mochi 2.0 instance initialization (e.g., before all other initialization methods are called and [`$m`](#persistent-mochi-instance) is defined), but after all default [`options`](#options) are set. Useful if you'd like to define some options or run statements before anything else fires up.

> ## mochi_init()
>
> _void_ **mochi_init()**
>
> If defined, executes during Mochi 2.0 instance initialization, but only after all other initialization methods are called. Useful if you'd like to run statements before all other hooks are called, and before some components are loaded (e.g., before the built-in [caching system](#caching-system) kicks in).

> ## mochi_load()
>
> _void_ **mochi_load(** [_object_ **meta**] **)**
>
> If defined, executes as soon as [`$m`](#persistent-mochi-instance) is set, as well as whenever the `data-page` or `data-view` attributes in `<html>` for the active HTML document are set. (e.g., whenever [`$m.setState()`](#msetstate) is called). This hook always precedes the [`mochi_load_page()`](#mochi_load_page) and [`mochi_load_view()`](#mochi_load_view) hooks. Additionally, [`meta`](#mload) is defined only when the `data-page` or `data-view` attributes in `<html>` for the active HTML document are changed from a previous (or initial) value.

> ## mochi_load_page()
>
> _void_ **mochi_load_page(** [_object_ **meta**] **)**
>
> If defined, executes as soon as [`$m`](#persistent-mochi-instance) is set, as well as whenever the `data-page` attribute in `<html>` for the active HTML document is set (e.g., when [`$m.setState()`](#msetstate) is called). This hook always precedes the [`mochi_load_page{N}()`](#mochi_load_pagen) hook, where **`{N}`** is the number that was assigned to `data-page`. Additionally, [`meta`](#mload) is defined only when the `data-page` attribute in `<html>` for the active HTML document is changed from a previous (or initial) value.

> ## mochi_load_page{N}()
>
> _void_ **mochi_load_page{N}(** [_object_ **meta**] **)**
>
> If defined, executes whenever the `data-page` attribute in `<html>` for the active HTML document is set to **`{N}`**, where **`{N}`** is to be replaced with the appropriate number that was assigned to `data-page`. For example, the `mochi_load_page1_5()` hook is called if the current value of the `data-page` attribute in `<html>` for the active HTML document is changed to `1.5`, but only if the current value isn't already set to `1.5`. This hook is always called immediately after the [`mochi_page_load()`](#mochi_page_load) hook is called. Additionally, [`meta`](#mload) is defined only when the `data-page` attribute in `<html>` for the active HTML document is changed from a previous (or initial) value.

> ## mochi_load_view()
>
> _void_ **mochi_load_view(** [_object_ **meta**] **)**
>
> If defined, executes as soon as [`$m`](#persistent-mochi-instance) is set, as well as whenever the `data-view` attribute in `<html>` for the active HTML document is set (e.g., when [`$m.setState()`](#msetstate) is called). This hook always precedes the [`mochi_load_view{N}()`](#mochi_load_viewn) hook, where **`{N}`** is the number that was assigned to `data-view`. Additionally, [`meta`](#mload) is defined only when the `data-view` attribute in `<html>` for the active HTML document is changed from a previous (or initial) value.

> ## mochi_load_view{N}()
>
> _void_ **mochi_load_view{N}(** [_object_ **meta**] **)**
>
> If defined, executes whenever the `data-view` attribute in `<html>` for the active HTML document is set to **`{N}`**, where **`{N}`** is to be replaced with the appropriate number that was assigned to `data-view`. For example, the `mochi_load_view1_5()` hook is called if the current value of the `data-view` attribute in `<html>` for the active HTML document is changed to `1.5`, but only if the current value isn't already set to `1.5`. This hook is always called immediately after the [`mochi_view_load()`](#mochi_page_load) hook is called. Additionally, [`meta`](#mload) is defined only when the `data-view` attribute in `<html>` for the active HTML document is changed from a previous (or initial) value.

> ## mochi_unload()
>
> _void_ **mochi_unload(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-page` or `data-view` attributes in `<html>` for the active HTML document are changed (e.g., when `data-page` changes from `1.5` to `2`). This hook always precedes the [`mochi_unload_page()`](#mochi_unload_page) and [`mochi_unload_view()`](#mochi_unload_view) hooks. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_unload_page()
>
> _void_ **mochi_unload_page(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-page` attribute in `<html>` for the active HTML document is changed (e.g., when `data-page` changes from `1.5` to `2`). This hook always precedes the [`mochi_unload_page{N}()`](#mochi_unload_pagen) hook, where **`{N}`** is the number that was changed in `data-page`. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_unload_page{N}()
>
> _void_ **mochi_unload_page{N}(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-page` attribute in `<html>` for the active HTML document is changed from **`{N}`** to a different number, where **`{N}`** is the number that was changed in `data-page`. For example, the `mochi_unload_page2()` hook is called if the value of the `data-page` attribute in `<html>` for the active HTML document was changed from `2` to a different number. This hook is always called immediately after the [`mochi_page_unload()`](#mochi_page_unload) hook is called. No action is taken if the number did not change. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_unload_view()
>
> _void_ **mochi_unload_view(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-view` attribute in `<html>` for the active HTML document is changed (e.g., when `data-view` changes from `1.5` to `2`). This hook always precedes the [`mochi_unload_view{N}()`](#mochi_unload_viewn) hook, where **`{N}`** is the number that was changed in `data-view`. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_unload_view{N}()
>
> _void_ **mochi_unload_view{N}(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-view` attribute in `<html>` for the active HTML document is changed from **`{N}`** to a different number, where **`{N}`** is the number that was changed in `data-view`. For example, the `mochi_unload_view2()` hook is called if the value of the `data-view` attribute in `<html>` for the active HTML document was changed from `2` to a different number. This hook is always called immediately after the [`mochi_view_unload()`](#mochi_view_unload) hook is called. No action is taken if the number did not change. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_last()
>
> _void_ **mochi_last()**
>
> If defined, executes after Mochi 2.0 instance initialization (e.g., after all other initialization methods are called and [`$m`](#persistent-mochi-instance) is defined), and all other hooks are called. This hook is essentially the opposite of [`mochi_before()`](#mochi_before), and only executes once for the life of the active HTML document.

> ## mochi_onchange()
>
> _void_ **mochi_onchange(** _object_ **meta** **)**
>
> If defined, executes whenever the values of the `data-page` or `data-view` attributes in `<html>` for the active HTML document are change. This is especially useful when you need to execute some statements whenever a valid `data-page` or `data-view` attribute value change is detected, but only after all relevant hooks are called. With that said, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_onmutation()
>
> _void_ **mochi_onmutation(** [_MutationRecord_](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) **mutation** **)**
>
> If defined, executes whenever a [DOM mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) is detected. The `mutation` represents an individual DOM mutation. It's important to be careful when adding DOM-changing statements to this hook, as poor code can result in performance issues and recursion errors. More information [here](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord).

## Options
Several options (or flags) are supported to allow you to take full advantage of all the features available in our [standard distribution package](https://github.com/codeworksdev/mochi-2.0/tree/main/dist). All supported options are listed in the table below.

| Option                                                                | Type     | Default                                                      |
|-----------------------------------------------------------------------|----------|--------------------------------------------------------------|
| [`CLICK_NAME`](#click_name)                                           | `string` | `auto`                                                       |
| [`DEBUG_MODE`](#debug_mode)                                           | `bool`   | `false`                                                      |
| [`ENABLE_SERVICE_WORKER`](#enable_service_worker)                     | `bool`   | `false`                                                      |
| [`LAZY_LOAD_PLUGINS`](#lazy_load_plugins)                             | `array`  | `[]`                                                         |
| [`SW_UPDATE_NOTIFICATIONS`](#sw_update_notifications)                 | `bool`   | `true`                                                       |
| [`SW_UPDATE_NOTIFICATIONS_OPTIONS`](#sw_update_notifications_options) | `object` | [`object`](https://github.com/codeworksdev/mochi-2.0/issues/195) |
| [`SW_VERBOSE_SYNCING`](#sw_verbose_syncing)                           | `bool`   | `true`                                                       |
| [`SW_VERBOSE_SYNCING_OPTIONS`](#sw_verbose_syncing_options)           | `object` | [`object`](https://github.com/codeworksdev/mochi-2.0/issues/196) |

> ## CLICK_NAME
>
> Determines the name of the JavaScript [event](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) to be used by the [`$m.onClick()`](#monclick) method. If set to `"auto"`, the event name will be determined automatically depending on the active host device type. For example, [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) would be used for touch-enabled devices, while [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click) would be used for all other device types.

> ## DEBUG_MODE
>
> If set to `true`, Mochi 2.0 will output informational messages to the [Web Console](https://developer.mozilla.org/en-US/docs/Web/API/Console/info) for some operations. Recommended for app development and debugging, but not for production-ready apps.

> ## ENABLE_SERVICE_WORKER
>
> If set to `true`, activates the built-in [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers). More information [here](#caching-system).

> ## LAZY_LOAD_PLUGINS
>
> Use this flag to allow Mochi 2.0 to "lazy load" a series of [plugins](#plugins), but only after the active HTML document is fully rendered, and other scripts have finished executing. This is especially useful if/when your application meets one or more of the following criteria:
>
> 1. It's an online web application.
> 2. Your app runs over a slow network or needs to be optimized for fast rendering.
> 3. You'd like to load a set of plugins for several HTML documents globally.
> 4. Your app requires one or more plugins, but not immediately at run-time.
> 5. Other situations that require optimal rendering performance.
>
> _**WARNING:** This feature is only supported for protocol schemes: **data**, **http**, and **https**._

> ## SW_UPDATE_NOTIFICATIONS
>
> If set to `true`, allows Mochi 2.0 to produce an HTML-formatted [notification widget](#mwidgetonupdateready) on screen, suggesting to the user that an app refresh/reload is necessary (e.g., when the built-in [Service Worker](#caching-system) downloads updated assets from the network). More information [here](#mwidgetonupdateready).

> ## SW_UPDATE_NOTIFICATIONS_OPTIONS
>
> Only applies when [`SW_UPDATE_NOTIFICATIONS`](#sw_update_notifications) is `true`. More information [here](https://github.com/codeworksdev/mochi-2.0/issues/195).

> ## SW_VERBOSE_SYNCING
>
> If set to `true` (default), allows Mochi 2.0 to produce an HTML-formatted [alert widget](#mwidgetondownloading), indicating to the user that an operation is in progress and the app is busy (e.g., downloading network resources). More information [here](#mwidgetondownloading).

> ## SW_VERBOSE_SYNCING_OPTIONS
>
> Only applies when [`SW_VERBOSE_SYNCING`](#sw_verbose_syncing) is `true`. More information [here](https://github.com/codeworksdev/mochi-2.0/issues/196).

## Properties
The following properties are available in the persistent Mochi 2.0 instance (`$m`):

| Property      | Type                                                                                    | Description                                                                                        |
|---------------|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `__body`      | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/)                   | HTML `<body>` element.                                                                             |
| `__container` | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/)                   | HTML `#container` element, if defined.                                                             |
| `__content`   | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/)                   | HTML `#content` element, if defined.                                                               |
| `__head`      | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/)                   | HTML `<head>` element.                                                                             |
| `__href`      | `string`                                                                                | Current window URL/address.                                                                        |
| `__html`      | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/)                   | HTML `<html>` element.                                                                             |
| `__observer`  | [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) | [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) interface. |
| `__page_name` | `string`                                                                                | Current HTML document name (without extension).                                                    |

___
# Extending Mochi

## Plugins
Mochi 2.0 comes preloaded with specialized, but optional, plugins (or scripts) that further enhance the capabilities of your app. Currently, there are two official plugins available for use right out of the box. More plugins will be added in future releases, but in the meantime, we recommend you review each plugin listed below to get familiar with how to write your own. Happy coding!

| Plugin                | Description                                                                                    | Links                                                                                                     |
|-----------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Dialog                | Enhanced dialog system powered by [jQuery UI](https://jqueryui.com/).                          | [Documentation](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/dialog/README.md) |
| Veeva CLM Application | Adds [Veeva CLM](https://www.veeva.com/products/multichannel-crm/clm/) compatibility to Mochi. | [Documentation](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/README.md)  |
___
# Further Reading
Because Mochi 2.0 is built with Bootstrap, learning to use it is as easy as digging into their official docs and mastering the awesome features provided by the framework. We encourage you to head on over to the [official Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) to learn like a pro. Happy coding!

___
# License
Mochi 2.0 is licensed under the MIT license. (http://opensource.org/licenses/MIT)
