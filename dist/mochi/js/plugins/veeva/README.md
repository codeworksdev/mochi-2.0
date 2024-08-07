# Veeva.js
### Add Veeva CLM compatibility to Mochi 2.0.

> **[v1.0](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/CHANGELOG.md)**

This plugin allows you to develop a **[Veeva Multichannel CRM](https://www.veeva.com/products/multichannel-crm/clm/)** within your Mochi 2.0 application while maintaining full compliance with Veeva standards. It fully utilizes the **[Veeva JS library](https://cdnmc1.vod309.com/clm/release/veeva-library.js)** and includes special **[API calls](https://developer.veevacrm.com/doc/Content/CRM_topics/Veeva/clm-veeva.htm)** that interface directly with the Veeva Multichannel CRM platform.

---
> ## Table Of Contents
> * **[Installation](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/README.md#installation)**
> * **[API](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/README.md#api)**
> * **[Veeva Multichannel CRM](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/README.md#veeva-multichannel-crm)**
> * **[License](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/README.md#license)**
---

# Installation
To use Veeva.js in your app you must drop two files as `<script>` imports in your Mochi 2.0 application (i.e., just before your `onload.js` is included). The plugin will register itself as `$m.veeva`, making it instantly accessible by the rest of your application.

## Files
**Note:** All paths are relative to `dist/mochi/js/plugins/veeva/dist`

| Path                 | Description            |
|----------------------|------------------------|
| ext/veeva-library.js | Veeva JS library       |
| veeva.js             | Base module            |
| veeva.min.js         | Base module (minified) |

> **EXAMPLE**
> ```html
> ...
>         <script src="mochi/js/mochi.min.js"></script>
>         <script src="mochi/js/plugins/veeva/dist/ext/veeva-library.js"></script>
>         <script src="mochi/js/plugins/veeva/dist/veeva.min.js"></script>
>         <script src="frontend/js/onload.js"></script>
>     </body>
> </html>
> ```

___
# API

## Public Methods
**Note:** Scroll down to the [options](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/README.md#options) section for a list of supported options.

> ### getDefaultOptions
> _object_ **$m.veeva.getDefaultOptions()**
> _mixed_ **$m.veeva.getDefaultOptions(** _string_ **option_name** [, _function_ iteratee] **)**
> _object_ **$m.veeva.getDefaultOptions(** _function_ **iteratee** **)**
>
> Same as `$m.veeva.getOptions()`, but returns default options instead. See below for more info.

> ### getOptions
> _object_ **$m.veeva.getOptions()**
> _mixed_ **$m.veeva.getOptions(** _string_ **option_name** [, _bool_ get_defaults] [, _function_ iteratee] **)**
> _object_ **$m.veeva.getOptions(** _function_ **iteratee** [, _bool_ get_defaults] **)**
>
> Allows you to retrieve the value of one or more [options](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/README.md#options) supported by this plugin.
> * If no arguments are given, returns all user-defined options (i.e., not the defaults).
> * If `option_name` is provided, returns the current value of that option. If the value is a `function`, gets the return value of that function.
> * If `get_defaults` is set to `true`, returns all default options (and their associated values), or the assigned value of `option_name`, if provided.
> * If provided, the `iteratee` function can be used to transform the returned value(s). This function is called within the context of the `$m.veeva` instance, and is passed three arguments: the option value, then the name of the option, and finally a reference to the entire list of options.
> * If the first parameter is an `iteratee` function, assumes all options (default variants if `get_defaults` is set to `true`, user-defined otherwise).

> ### goHome
> _instance_ **$m.veeva.goHome()**
>
> Navigates to `options.CLM_FIRST_SLIDE_NUMBER` in `options.CLM_ID`. This is equivalent to `$m.veeva.gotoSlide()`.

> ### gotoSlide
> _instance_ **$m.veeva.gotoSlide()**
> _instance_ **$m.veeva.gotoSlide(** _number_ **slide_number** [, _string_ presentation] **)**
> _instance_ **$m.veeva.gotoSlide(** _string_ **key_message** [, _string_ presentation] **)**
> _instance_ **$m.veeva.gotoSlide(** _string_ **file** **)**
>
> * If no arguments are given, assumes `options.CLM_FIRST_SLIDE_NUMBER` in `options.CLM_ID`.
> * If `slide_number` is given, navigates to the slide number in `presentation`.
> * If `key_message` is given, assumes the media file name of the key message in `presentation` (e.g., `"my_key_message"` becomes `"my_key_message.zip"`).
> * If `presentation` is not given, assumes the presentation defined by `options.CLM_ID`. This parameter only applies when running within the Veeva CRM container.
> * If `file` is given, navigates to the specified file. In Veeva, the `file` is opened using the built-in viewer. Other devices may behave differently depending on the file type given.

> ### is_veeva
> _bool_ **$m.veeva.is_veeva()**
>
> Returns `true` if the host device is currently running within the Veeva CRM container.

> ### nextSlide
> _instance_ **$m.veeva.nextSlide(** [_string_ presentation] **)**
>
> Applies only to numeric slides. Navigates to the next slide number in `presentation`. If `presentation` is not given, assumes the presentation defined by `options.CLM_ID`. Alternatively, if the `<body>` tag in your document has the `data-next-page` attribute set, will use that value as the next slide number, but only if it's numeric (e.g., `<body data-next-page="1.1">`).

> ### prevSlide
> _instance_ **$m.veeva.prevSlide(** [_string_ presentation] **)**
>
> Applies only to numeric slides. Navigates to the previous slide number in `presentation`. If `presentation` is not given, assumes the presentation defined by `options.CLM_ID`. Alternatively, if the `<body>` tag in your document has the `data-prev-page` attribute set, will use that value as the previous slide number, but only if it's numeric (e.g., `<body data-prev-page="0.9">`).

> ### setOptions
> _instance_ **$m.veeva.setOptions()**
> _instance_ **$m.veeva.setOptions(** _object_ **options** [, _function_ callback] **)**
> _instance_ **$m.veeva.setOptions(** _function_ **callback** **)**
>
> Allows you to define one or more `options` supported by this plugin. Any unsupported options are skipped. Scroll down to the [options](https://github.com/codeworksdev/mochi-2.0/blob/main/dist/mochi/js/plugins/veeva/README.md#options) section for a list of supported options and their default values.
> * If no arguments are given, resets all options to their default values.
> * If `options` are provided, defines each option sequentially in the order given.
> * If a `callback` function is provided, executes the function after all options are set. This function is called within the context of the `$m.veeva` instance, and receives `options` as the first parameter.
> * If the first parameter is a `callback` function, the default `options` are assumed.

## Options
```
TYPE   | OPTION NAME                | DEFAULT VALUE
------------------------------------------------------------------------------------------------------------------
string | CLM_VERSION                | '1.0'
string | CLM_NAME                   | $('html title').text()
string | CLM_ID                     | CLM_NAME.replace(/\W/g,'_').toUpperCase()+'_'+CLM_VERSION.replace(/\W/g,'_')
string | CLM_SLIDE_PREFIX           | CLM_ID.toLowerCase()+'_slide'
number | CLM_NUMBER_PAD             | 2
number | CLM_FIRST_SLIDE_NUMBER     | 0
number | CLM_LAST_SLIDE_NUMBER      | 0
bool   | CLM_NAVIGATION             | false
bool   | CLM_NAVIGATION_THEME       | false
bool   | CLM_FORCE_VEEVA_NAVIGATION | false
```
> **CLM_VERSION**
>
> Decimal number representing the presentation version.

> **CLM_NAME**
>
> Descriptive name of the presentation. By default, this value is generated automatically using the contents of the `<title>` tag in your HTML document.

> **CLM_ID**
>
> Machine-readable name of the presentation. By default, this value is generated automatically using `options.CLM_NAME` and `options.CLM_VERSION` combined.

> **CLM_SLIDE_PREFIX**
>
> Prefix for each slide (i.e., HTML file name) in the presentation. By default, this value is generated automatically using `options.CLM_ID` and appending "_slide" to the end of the prefix.

> **CLM_NUMBER_PAD**
>
> Determines the maximum number padding that should be assumed for each slide number in the presentation (e.g., a padding of 2 assumes "my_presentation_slide01.html").

> **CLM_FIRST_SLIDE_NUMBER**
>
> Determines the number of the first slide in the presentation. By default, zero-based numbering is assumed while using `options.CLM_NUMBER_PAD` (e.g., "my_presentation_slide00.html").

> **CLM_LAST_SLIDE_NUMBER**
>
> Determines the number of the last slide in the presentation.

> **CLM_NAVIGATION**
>
> If true, adds HTML navigation controls to the `<body>` tag of your document. The ID of the generated HTML element is `mochi-plugin-veeva-nav`, and contains 3 `<span>` tags &mdash; each defining a separate navigation control:
> ```html
> <div data-mochi="plugin" id="mochi-plugin-veeva-nav">
>     <span></span>
>     <span></span>
>     <span></span>
> </div>
> ```
> * `<span>` <span>#</span>1 triggers `$m.veeva.goHome()`
> * `<span>` <span>#</span>2 triggers `$m.veeva.prevSlide()`
> * `<span>` <span>#</span>3 triggers `$m.veeva.nextSlide()`

> **CLM_NAVIGATION_THEME**
>
> By default, the navigation controls created by `options.CLM_NAVIGATION` are not themed with any CSS or icons (i.e., this option is set to false). This allows you to easily theme the controls yourself. Enabling this option assigns a basic SVG icon to each control.

> **CLM_FORCE_VEEVA_NAVIGATION**
>
> Enabling this option tells the navigation functions to not attempt to auto-detect the platform in use (e.g., Veeva, Windows, web browser, etc.). This is helpful in situtations where the intended target platfom is not fully supported by this plugin. Otherwise, it's recommended to keep this option disabled.

___
# Veeva Multichannel CRM
Veeva publishes a JavaScript library to assist customers and their creative agencies with developing personalized and dynamic HTML5 content that interacts with the Veeva CRM database. This library is supported for CLM, Engage for Portals, CoBrowse, and MyInsights content creation.

Please head on over to the official **[Multichannel CRM documentation](https://developer.veevacrm.com/doc/Content/CRM_topics/Veeva/clm-veeva.htm)** to take full advantage of all functions provided by the Veeva JS library.

___
# License
This plugin is licensed under the MIT license. (http://opensource.org/licenses/MIT)
