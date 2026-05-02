/*!
 * Mochi v2.2 (https://github.com/codeworksdev/mochi-2.0)
 * Copyright (c) 2014-2026 CODEWORKS <support@codeworksnyc.com>
 * Licensed under the MIT license
 */

/**
 * @typedef {Object} MochiStatePayload
 * @property {?string} caller - Name of the method or callback that triggered the state change.
 * @property {number} newStateNumber - New page/view number.
 * @property {number} oldStateNumber - Previous page/view number.
 * @property {string} stateName - State type. Expected values are `page` or `view`.
 */

/**
 * @typedef {Object} MochiSyncingOptions
 * @property {string} text - Text displayed while the app is syncing.
 * @property {string} icon - Font Awesome icon class displayed while syncing.
 * @property {boolean} spin - Whether the icon should spin.
 */

/**
 * @typedef {Object} MochiUpdateNotificationOptions
 * @property {string} buttonTitle - Text for the update-available button.
 * @property {string} dialogButtonTitle - Text for the modal update button.
 * @property {string} dialogContent - HTML content displayed in the update modal body.
 * @property {string} dialogTitle - Title displayed in the update modal header.
 */

/**
 * @typedef {Object} MochiOptions
 * @property {string} CLICK_NAME - Click/touch event name, or `auto` for device-based detection.
 * @property {boolean} DEBUG_MODE - Whether to log debug messages.
 * @property {boolean} ENABLE_SERVICE_WORKER - Whether to register `./sw.js`.
 * @property {string[]} LAZY_LOAD_PLUGINS - Plugin names to lazy-load from `mochi/js/plugins/{name}/dist/{name}.min.js`.
 * @property {boolean} SW_UPDATE_NOTIFICATIONS - Whether to notify users when an update is available.
 * @property {MochiUpdateNotificationOptions} SW_UPDATE_NOTIFICATIONS_OPTIONS - Update notification UI options.
 * @property {boolean} SW_VERBOSE_SYNCING - Whether to show a syncing/downloading notification.
 * @property {MochiSyncingOptions} SW_VERBOSE_SYNCING_OPTIONS - Syncing notification UI options.
 */

/**
 * Initializes the Mochi framework once the DOM is ready.
 *
 * - Instantiates the global Mochi instance (`window.$m`)
 * - Executes the initial lifecycle hook sequence:
 *   - `mochi_load`
 *   - `mochi_load_page`
 *   - `mochi_load_page{n}`
 *   - `mochi_load_view`
 *   - `mochi_load_view{n}`
 *   - `mochi_last`
 *
 * This establishes the initial application state and triggers
 * any user-defined hook implementations.
 *
 * @fires Mochi#mochi_load
 * @fires Mochi#mochi_load_page
 * @fires Mochi#mochi_load_page{n}
 * @fires Mochi#mochi_load_view
 * @fires Mochi#mochi_load_view{n}
 * @fires Mochi#mochi_last
 *
 * @returns {void}
 */
$(document).ready(function() {
    /**
     * Global Mochi instance.
     *
     * @type {Mochi}
     */
    window.$m = new Mochi();

    $m.do([
        'mochi_load',
        'mochi_load_page',
        'mochi_load_page' + Number($m.getPage()),
        'mochi_load_view',
        'mochi_load_view' + Number($m.getView()),
        'mochi_last',
    ]);
});

/* ========================================================================== */
/* Core                                                                       */
/* ========================================================================== */

/**
 * Creates the global Mochi framework instance.
 *
 * @class
 */
function Mochi() {
    this._options();
    this._before();
    this._vars();
    this._observe();
    this._html();
    this._fa();
    this._body();
    this._init();
}

/* ========================================================================== */
/* Prototype                                                                  */
/* ========================================================================== */

Mochi.prototype = {

    /**
     * Define default runtime options and create mutable option state.
     *
     * @private
     * @returns {void}
     */
    _options: function() {
        var o = {
            CLICK_NAME                      : 'auto',
            DEBUG_MODE                      : false,
            ENABLE_SERVICE_WORKER           : false,
            LAZY_LOAD_PLUGINS               : [],
            SW_UPDATE_NOTIFICATIONS         : true,
            SW_UPDATE_NOTIFICATIONS_OPTIONS : {
                buttonTitle       : 'Update Available',
                dialogButtonTitle : 'Update Now',
                dialogContent     : '<p>Good news! A new software update is available for your app. We recommend updating now, but if you\'d like, you can hit cancel and manually refresh later.</p>',
                dialogTitle       : 'Software Update',
            },
            SW_VERBOSE_SYNCING              : true,
            SW_VERBOSE_SYNCING_OPTIONS      : {
                text : 'SYNCING',
                icon : 'fa-cog',
                spin : true,
            },
        };

        this.default = JSON.parse(JSON.stringify(o));
        this.options = JSON.parse(JSON.stringify(o));
    },

    /**
     * Fire the `mochi_before` lifecycle hook.
     *
     * @private
     * @returns {void}
     */
    _before: function() {
        this.do('mochi_before');
    },

    /**
     * Cache common DOM references and runtime values.
     *
     * @private
     * @returns {void}
     */
    _vars: function() {
        this.__body      = $('body');
        this.__container = this.__body.find('#container');
        this.__content   = this.__body.find('#content');
        this.__head      = $('head');
        this.__href      = window.location.href;
        this.__html      = $('html');
        this.__observer  = new MutationObserver(function(mutations) {
            mutations.forEach($m._onMutation, $m);
        });
        this.__page_name = /[\\\/]([^\\\\/?]+)(\?.*)?$/.test(this.__href)
            ? RegExp.$1.replace(/\.[^.]+$/, '')
            : 'index';
    },

    /**
     * Start observing document mutations for the `mochi_onmutation` hook.
     *
     * @private
     * @returns {void}
     */
    _observe: function() {
        this.__observer.observe(
            this.__html[0],
            {
                attributes    : true,
                childList     : true,
                characterData : true,
                subtree       : true,
            }
        );
    },

    /**
     * Normalize root HTML state attributes.
     *
     * @private
     * @returns {void}
     */
    _html: function() {
        var d = this.__html;
        var p = d.attr('data-page');
        var v = d.attr('data-view');
        var r = /^\d+(\.\d+)?$/;

        if (!r.test(p)) d.attr('data-page', 0);
        if (!r.test(v)) d.attr('data-view', 0);
    },

    /**
     * Add the Font Awesome fallback class when SVG replacement is not active.
     *
     * @private
     * @returns {void}
     */
    _fa: function() {
        var d = this.__html;
        var c = 'fontawesome-i2svg-active';

        if (!d.hasClass(c)) {
            d.addClass(
                c.replace(/-\w+$/, '-no-icons-found')
            );
        }
    },

    /**
     * Add page-specific classes to the root HTML element.
     *
     * @private
     * @returns {void}
     */
    _body: function() {
        this.__html.addClass(
            'is-page-' +
            this.sanitizeTitle(this.__page_name)
        );
    },

    /**
     * Initialize lifecycle hooks, legacy appcache handlers, service worker support,
     * and lazy-loaded plugins.
     *
     * @private
     * @returns {void}
     */
    _init: function() {
        this.do('mochi_init');

        if (
            this.__html.attr('manifest') &&
            window.applicationCache
        ) {
            if (this.getOption('SW_VERBOSE_SYNCING') === true) {
                window.applicationCache.addEventListener(
                    'downloading',
                    function() {
                        setTimeout(
                            function() {
                                $m.widgetOnDownloading();
                            },
                            500
                        );
                    }
                );

                window.applicationCache.addEventListener(
                    'cached',
                    function() {
                        setTimeout(
                            function() {
                                $('#mochiAlertDownloading-container .alert').alert('close');
                            },
                            3000
                        );
                    }
                );
            }

            if (this.getOption('SW_UPDATE_NOTIFICATIONS') === true) {
                window.applicationCache.addEventListener(
                    'updateready',
                    function() {
                        setTimeout(
                            function() {
                                setTimeout(
                                    function() {
                                        $('#mochiAlertDownloading-container .alert').alert('close');
                                    },
                                    3000
                                );

                                $m.widgetOnUpdateReady();
                            },
                            500
                        );
                    }
                );
            }
        }

        if (
            this.options.ENABLE_SERVICE_WORKER &&
            'serviceWorker' in navigator
        ) {
            navigator.serviceWorker
                .register('./sw.js')
                .then(function(reg) {
                    console.log('ServiceWorker registration successful with scope: ' + reg.scope);

                    reg.addEventListener(
                        'updatefound',
                        function() {
                            var newWorker = reg.installing;

                            if (!newWorker) return;

                            if (reg.active) {
                                newWorker.addEventListener(
                                    'statechange',
                                    function() {
                                        switch (newWorker.state) {
                                            case 'activated':
                                                if ($m.getOption('SW_UPDATE_NOTIFICATIONS') === true) {
                                                    $m.widgetOnUpdateReady();
                                                }
                                                break;
                                        }
                                    }
                                );
                            }
                            else {
                                if ($m.getOption('SW_VERBOSE_SYNCING') === true) {
                                    $m.widgetOnDownloading();
                                }

                                newWorker.addEventListener(
                                    'statechange',
                                    function() {
                                        switch (newWorker.state) {
                                            case 'activated':
                                                setTimeout(
                                                    function() {
                                                        $('#mochiAlertDownloading-container .alert').alert('close');
                                                    },
                                                    1000
                                                );
                                                break;
                                        }
                                    }
                                );
                            }
                        }
                    );
                })
                .catch(function(err) {
                    console.error('ServiceWorker registration failed: ' + err);
                });
        }

        if (
            this.options.LAZY_LOAD_PLUGINS &&
            _.isArray(this.options.LAZY_LOAD_PLUGINS) &&
            this.options.LAZY_LOAD_PLUGINS.length
        ) {
            _.each(
                this.options.LAZY_LOAD_PLUGINS,
                function(name) {
                    $.getScript('mochi/js/plugins/' + name + '/dist/' + name + '.min.js');
                },
                this
            );
        }
    },

    /**
     * Forward observed mutations into the optional `mochi_onmutation` hook.
     *
     * @private
     * @param {MutationRecord} mutation - Mutation record emitted by the observer.
     * @returns {void}
     */
    _onMutation: function(mutation) {
        if (
            window.mochi_onmutation &&
            _.isFunction(window.mochi_onmutation)
        ) {
            this.log('hook: mochi_onmutation(' + mutation.constructor.name + ')');
            window.mochi_onmutation.call(this, mutation);
        }
    },

    /**
     * Execute one or more global Mochi lifecycle hooks by name.
     *
     * @public
     * @param {string|string[]} f - Hook name or array of hook names to execute.
     * @param {Array<*>} [a] - Arguments passed to the hook via `Function#apply`.
     * @returns {Mochi} Fluent instance.
     */
    do: function(f, a) {
        if (_.isArray(f)) {
            _.each(
                f,
                function(v) {
                    this.instance.do(v, this.args);
                },
                {
                    instance : this,
                    args     : a,
                }
            );
        }
        else if (
            f &&
            typeof f === 'string' &&
            /^[a-zA-Z_$][\w$]*$/.test(f) &&
            window[f] &&
            _.isFunction(window[f])
        ) {
            a = _.isArray(a) ? a : [];

            this.log('hook: ' + f + '.apply(Mochi, ' + JSON.stringify(a) + ')');
            window[f].apply(this, a);
        }

        return this;
    },

    /**
     * Attach an application extension instance to the Mochi instance.
     *
     * @public
     * @param {string} k - Property name to create on the Mochi instance.
     * @param {Function} c - Constructor used to create the extension instance.
     * @param {Object|Function} [m] - Metadata object or callback function.
     * @param {Function} [f] - Callback fired after the extension is created.
     * @throws {MochiError} When the extension name is reserved, unsupported, or already defined.
     * @returns {Mochi} Fluent instance.
     */
    extend: function(k, c, m, f) {
        if (
            k &&
            typeof k === 'string' &&
            /^[a-z]\w*$/i.test(k)
        ) {
            var r = [
                '__body',
                '__container',
                '__content',
                '__head',
                '__href',
                '__html',
                '__observer',
                '__page_name',
                '_before',
                '_body',
                '_fa',
                '_html',
                '_init',
                '_observe',
                '_onMutation',
                '_options',
                '_vars',
                'default',
                'do',
                'extend',
                'getDefaultOption',
                'getOnClickName',
                'getOption',
                'getPage',
                'getState',
                'getView',
                'isSimpleObj',
                'load',
                'loadPage',
                'loadView',
                'log',
                'onClick',
                'options',
                'sanitizeTitle',
                'setOnClickName',
                'setOption',
                'setPage',
                'setState',
                'setView',
                'unload',
                'unloadPage',
                'unloadView',
                'widgetOnDownloading',
                'widgetOnUpdateReady',
            ];

            if (
                $.inArray(k, r) === -1 &&
                !_.has(this, k) &&
                _.isFunction(c)
            ) {
                var meta = (m && this.isSimpleObj(m)) ? JSON.parse(JSON.stringify(m)) : {};
                var func = (m && _.isFunction(m)) ? m : f;
                var json = JSON.stringify(meta);

                this.log('extend: $m.' + k + ' = new ' + c.name + '(' + json + ')');
                this[k] = new c(meta);

                if (
                    func &&
                    _.isFunction(func)
                ) {
                    func.call(this[k], meta);
                }

                return this;
            }
        }

        throw new MochiError(
            'Cannot extend as "' + k + '". ' +
            'Name reserved, unsupported, or already defined.'
        );
    },

    /**
     * Return a clone of the default option value for a given key.
     *
     * @public
     * @param {keyof MochiOptions|string} k - Option key.
     * @returns {*} Default option value, or `undefined` when unavailable.
     */
    getDefaultOption: function(k) {
        return this.getOption(k, true);
    },

    /**
     * Return the configured click/touch event name.
     *
     * @public
     * @returns {string} Event name to use for click-like interactions.
     */
    getOnClickName: function() {
        var o = this.getOption('CLICK_NAME');

        return o === 'auto'
            ? (this.__html.hasClass('no-touchevents') ? 'click' : 'touchstart')
            : o;
    },

    /**
     * Return an option value.
     *
     * Object values are cloned before being returned so callers cannot mutate
     * internal option state directly.
     *
     * @public
     * @param {keyof MochiOptions|string} k - Option key.
     * @param {boolean} [d=false] - When true, read from default options.
     * @returns {*} Option value, or `undefined` when unavailable.
     */
    getOption: function(k, d) {
        if (
            k &&
            typeof k === 'string'
        ) {
            var o = this[d ? 'default' : 'options'];

            if (_.has(o, k)) {
                var v = _.isFunction(o[k])
                    ? o[k].call(this)
                    : o[k];

                return this.isSimpleObj(v)
                    ? JSON.parse(JSON.stringify(v))
                    : v;
            }
        }

        return undefined;
    },

    /**
     * Return the current page state.
     *
     * @public
     * @param {number|string} [p] - Optional left-pad width.
     * @returns {number|string} Current page number, optionally left-padded.
     */
    getPage: function(p) {
        return this.getState('page', p);
    },

    /**
     * Return the current numeric state for a page or view.
     *
     * @public
     * @param {string} s - State name. Expected values are `page` or `view`.
     * @param {number|string} [p] - Optional left-pad width.
     * @returns {number|string|undefined} Current state value, optionally left-padded.
     */
    getState: function(s, p) {
        if (
            s &&
            typeof s === 'string' &&
            /^(page|view)$/i.test(s)
        ) {
            var n = this.__html.attr('data-' + s.toLowerCase());

            return window.s.pad(
                (n && /^\d+(\.\d+)?$/.test(n)) ? Number(n) : 0,
                (p && /^\d+$/.test(p)) ? Number(p) : 0,
                '0'
            );
        }

        return undefined;
    },

    /**
     * Return the current view state.
     *
     * @public
     * @param {number|string} [p] - Optional left-pad width.
     * @returns {number|string} Current view number, optionally left-padded.
     */
    getView: function(p) {
        return this.getState('view', p);
    },

    /**
     * Test whether a value is a simple object.
     *
     * @public
     * @param {*} v - Value to test.
     * @returns {boolean} True when the value is a non-array, non-function object.
     */
    isSimpleObj: function(v) {
        return Boolean(
            v &&
            _.isObject(v) &&
            !_.isArray(v) &&
            !_.isFunction(v)
        );
    },

    /**
     * Fire load hooks for a page or view state.
     *
     * @public
     * @param {string} k - State name. Expected values are `page` or `view`.
     * @param {number|string} n - State number to load.
     * @param {Object} [o] - Additional hook payload values.
     * @returns {Mochi} Fluent instance.
     */
    load: function(k, n, o) {
        if (
            k &&
            typeof k === 'string' &&
            /^(page|view)$/i.test(k) &&
            /^\d+(\.\d+)?$/.test(n)
        ) {
            k = k.toLowerCase();
            n = Number(n);

            var h = 'mochi_load_' + k + n.toString().replace(/\D/g, '_');
            var a = [
                _.defaults(
                    this.isSimpleObj(o) ? o : {},
                    {
                        caller         : null,
                        newStateNumber : n,
                        oldStateNumber : n,
                        stateName      : k,
                    }
                ),
            ];

            this.do(
                [
                    'mochi_load',
                    'mochi_load_' + k,
                    h,
                    'mochi_onchange',
                ],
                a
            );
        }

        return this;
    },

    /**
     * Fire page load hooks.
     *
     * @public
     * @param {number|string} n - Page number to load.
     * @param {Object} [f] - Additional hook payload values.
     * @returns {Mochi} Fluent instance.
     */
    loadPage: function(n, f) {
        return this.load('page', n, f);
    },

    /**
     * Fire view load hooks.
     *
     * @public
     * @param {number|string} n - View number to load.
     * @param {Object} [f] - Additional hook payload values.
     * @returns {Mochi} Fluent instance.
     */
    loadView: function(n, f) {
        return this.load('view', n, f);
    },

    /**
     * Log a message when debug mode is enabled or a condition is truthy.
     *
     * @public
     * @param {*} msg - Message or data to log.
     * @param {*} [cond] - Forces logging when truthy.
     * @returns {Mochi} Fluent instance.
     */
    log: function(msg, cond) {
        if (
            cond ||
            this.getOption('DEBUG_MODE') === true
        ) {
            console.info(msg);
        }

        return this;
    },

    /**
     * Attach a click/touch handler using Mochi's configured click event name.
     *
     * @public
     * @param {string|Element|jQuery} target - Selector, DOM element, or jQuery collection.
     * @param {Object|Function} [data] - Optional event data, or handler when no data is needed.
     * @param {Function} [handler] - Event handler.
     * @returns {jQuery} jQuery collection returned by `.on()`.
     */
    onClick: function(target, data, handler) {
        var e = this.getOnClickName();
        var f = _.isFunction(data);
        var d = f ? {} : data;
        var h = f ? data : handler;
        var s;

        switch (typeof target) {
            case 'string':
                s = $(target);
                break;

            default:
                s = _.isElement(target)
                    ? $(target)
                    : target;
                break;
        }

        return s.on(
            e,
            d,
            _.isFunction(h) ? h : false
        );
    },

    /**
     * Convert a string into a lowercase, delimiter-separated slug.
     *
     * @public
     * @param {*} str - Value to sanitize.
     * @param {string|number} [del='-'] - Delimiter used to replace invalid characters.
     * @param {string|number} [def] - Fallback value when the sanitized string is empty.
     * @returns {string} Sanitized title string.
     */
    sanitizeTitle: function(str, del, def) {
        try {
            var repl = (arguments.length > 1 && /^(string|number)$/.test(typeof del) ? del.toString() : '-');
            var patt = '(' + repl.replace(/([.()$^*+\-?|{}\[\]\\])/g, '\\$1') + ')';
            var regx = new RegExp(patt + '{2,}', 'g');

            str = str
                .toString()
                .toLowerCase()
                .replace(/[^a-z\d]/ig, repl)
                .replace(regx, repl)
                .replace(
                    new RegExp(
                        '^' + patt + '*|' + patt + '*$',
                        'g'
                    ),
                    ''
                );

            if (str.length) return str;

            return /^(string|number)$/.test(typeof def)
                ? this.sanitizeTitle(def)
                : '';
        }
        catch (e) {
            return '';
        }
    },

    /**
     * Set the click/touch event name used by `onClick()`.
     *
     * @public
     * @param {string} eventName - Event name to use.
     * @returns {Mochi} Fluent instance.
     */
    setOnClickName: function(eventName) {
        if (
            eventName &&
            typeof eventName === 'string' &&
            /^\w+$/i.test(eventName)
        ) {
            return this.setOption(
                'CLICK_NAME',
                eventName
            );
        }

        return this;
    },

    /**
     * Set one option value or merge a simple object of option values.
     *
     * @public
     * @param {keyof MochiOptions|string|Object} k - Option key, or object map of option keys/values.
     * @param {*} [v] - New option value when `k` is a string.
     * @returns {Mochi} Fluent instance.
     */
    setOption: function(k, v) {
        if (this.isSimpleObj(k)) {
            _.each(
                k,
                function(value, key) {
                    this.setOption(key, value);
                },
                this
            );
        }
        else if (
            k &&
            typeof k === 'string' &&
            _.has(this.options, k)
        ) {
            var msg = 'option: ' + k + ' = ' + JSON.stringify(v);
            var old = _.clone(this.options[k]);

            switch (k) {
                default:
                    this.log(msg);
                    break;

                case 'DEBUG_MODE':
                    if (v) this.log(msg, true);
                    break;
            }

            if (this.isSimpleObj(old)) {
                if (this.isSimpleObj(v)) {
                    _.each(
                        v,
                        function(newValue, newKey) {
                            if (_.has(this, newKey)) this[newKey] = newValue;
                        },
                        this.options[k]
                    );
                }
            }
            else {
                this.options[k] = v;
            }
        }

        return this;
    },

    /**
     * Set the current page state.
     *
     * @public
     * @param {number|string} n - New page number.
     * @param {Function} [f] - Optional callback fired after state hooks.
     * @returns {Mochi} Fluent instance.
     */
    setPage: function(n, f) {
        return this.setState('page', n, f);
    },

    /**
     * Set the current page/view state and fire corresponding unload/load hooks.
     *
     * @public
     * @param {string} s - State name. Expected values are `page` or `view`.
     * @param {number|string} n - New state number.
     * @param {Function} [f] - Optional callback fired after state hooks.
     * @returns {Mochi} Fluent instance.
     */
    setState: function(s, n, f) {
        if (
            s &&
            typeof s === 'string' &&
            /^(page|view)$/i.test(s) &&
            /^\d+(\.\d+)?$/.test(n)
        ) {
            var state = window.s.capitalize(s, true);
            var old_n = Number(this['get' + state]());
            var new_n = Number(n);

            if (new_n !== old_n) {
                var data = {
                    caller         : null,
                    newStateNumber : new_n,
                    oldStateNumber : old_n,
                    stateName      : state.toLowerCase(),
                };

                this.__html.attr('data-' + state.toLowerCase(), new_n);
                this['unload' + state](old_n, _.extend(_.clone(data), { caller : 'unload' + state }));
                this['load' + state](new_n, _.extend(_.clone(data), { caller : 'load' + state }));

                if (
                    f &&
                    _.isFunction(f)
                ) {
                    f.call(
                        this,
                        _.extend(
                            _.clone(data),
                            { caller : f.constructor.name }
                        )
                    );
                }
            }
        }

        return this;
    },

    /**
     * Set the current view state.
     *
     * @public
     * @param {number|string} n - New view number.
     * @param {Function} [f] - Optional callback fired after state hooks.
     * @returns {Mochi} Fluent instance.
     */
    setView: function(n, f) {
        return this.setState('view', n, f);
    },

    /**
     * Fire unload hooks for a page or view state.
     *
     * @public
     * @param {string} k - State name. Expected values are `page` or `view`.
     * @param {number|string} n - State number to unload.
     * @param {Object} [o] - Additional hook payload values.
     * @returns {Mochi} Fluent instance.
     */
    unload: function(k, n, o) {
        if (
            k &&
            typeof k === 'string' &&
            /^(page|view)$/i.test(k) &&
            /^\d+(\.\d+)?$/.test(n)
        ) {
            k = k.toLowerCase();
            n = Number(n);

            var h = 'mochi_unload_' + k + n.toString().replace(/\D/g, '_');
            var a = [
                _.defaults(
                    this.isSimpleObj(o) ? o : {},
                    {
                        caller         : null,
                        newStateNumber : n,
                        oldStateNumber : n,
                        stateName      : k,
                    }
                ),
            ];

            this.do(
                [
                    'mochi_unload',
                    'mochi_unload_' + k,
                    h,
                    'mochi_onchange',
                ],
                a
            );
        }

        return this;
    },

    /**
     * Fire page unload hooks.
     *
     * @public
     * @param {number|string} n - Page number to unload.
     * @param {Object} [f] - Additional hook payload values.
     * @returns {Mochi} Fluent instance.
     */
    unloadPage: function(n, f) {
        return this.unload('page', n, f);
    },

    /**
     * Fire view unload hooks.
     *
     * @public
     * @param {number|string} n - View number to unload.
     * @param {Object} [f] - Additional hook payload values.
     * @returns {Mochi} Fluent instance.
     */
    unloadView: function(n, f) {
        return this.unload('view', n, f);
    },

    /**
     * Render the syncing/downloading alert widget.
     *
     * @public
     * @param {string|number} [text] - Override alert text.
     * @param {string|number} [icon] - Override Font Awesome icon class.
     * @param {boolean} [spin] - Override icon spin behavior.
     * @returns {Mochi} Fluent instance.
     */
    widgetOnDownloading: function(text, icon, spin) {
        var k = 'mochiAlertDownloading';
        var c = this.__body.find('#' + k + '-container');
        var o;
        var d;
        var y;
        var t;
        var i;
        var s;

        if (!c.length) {
            o = this.getOption('SW_VERBOSE_SYNCING_OPTIONS');
            d = this.getDefaultOption('SW_VERBOSE_SYNCING_OPTIONS');
            y = function(v) { return (/^(string|number)$/.test(typeof v) && /\S/.test(v)); };
            t = (y(text) ? text : (y(o.text) ? o.text : d.text)).trim();
            i = (y(icon) ? icon : (y(o.icon) ? o.icon : d.icon)).trim();
            s = Boolean(arguments.length < 3 ? o.spin : spin);

            this.__body.append(
                '<div id="mochiAlertDownloading-container">' +
                    '<div class="alert alert-info alert-dismissible fade show" role="alert">' +
                        '<span class="small"><strong>' + t + '</strong>&nbsp;&nbsp;<i class="fas ' + i + (s ? ' fa-spin ' : ' ') + 'fa-lg"></i></span>' +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                            '<span aria-hidden="true">&times;</span>' +
                        '</button>' +
                    '</div>' +
                '</div>'
            );

            $('#' + k + '-container .alert').on(
                'closed.bs.alert',
                function() {
                    $('#' + k + '-container').remove();
                }
            );
        }

        return this;
    },

    /**
     * Render the update-available modal widget.
     *
     * @public
     * @param {string|number} [buttonTitle] - Override update button title.
     * @param {string|number} [dialogButtonTitle] - Override modal action button title.
     * @param {string|number} [dialogContent] - Override modal body content.
     * @param {string|number} [dialogTitle] - Override modal title.
     * @returns {Mochi} Fluent instance.
     */
    widgetOnUpdateReady: function(buttonTitle, dialogButtonTitle, dialogContent, dialogTitle) {
        var k = 'mochiModalUpdateAvailable';
        var c = this.__body.find('#' + k + '-container');
        var o;
        var d;
        var y;
        var v;

        if (!c.length) {
            o = this.getOption('SW_UPDATE_NOTIFICATIONS_OPTIONS');
            d = this.getDefaultOption('SW_UPDATE_NOTIFICATIONS_OPTIONS');
            y = function(value) { return (/^(string|number)$/.test(typeof value) && /\S/.test(value)); };
            v = {};

            v.buttonTitle       = (y(buttonTitle)       ? buttonTitle       : (y(o.buttonTitle)       ? o.buttonTitle       : d.buttonTitle)).trim();
            v.dialogButtonTitle = (y(dialogButtonTitle) ? dialogButtonTitle : (y(o.dialogButtonTitle) ? o.dialogButtonTitle : d.dialogButtonTitle)).trim();
            v.dialogContent     = (y(dialogContent)     ? dialogContent     : (y(o.dialogContent)     ? o.dialogContent     : d.dialogContent)).trim();
            v.dialogTitle       = (y(dialogTitle)       ? dialogTitle       : (y(o.dialogTitle)       ? o.dialogTitle       : d.dialogTitle)).trim();

            this.__body.append(
                '<div id="' + k + '-container">' +
                    '<button type="button" class="btn btn-success" data-toggle="modal" data-target="#' + k + '">' +
                        v.buttonTitle +
                    '</button>' +
                '</div>' +
                '<div class="modal fade" id="' + k + '" tabindex="-1" role="dialog" aria-labelledby="' + k + 'Label" aria-hidden="true">' +
                    '<div class="modal-dialog modal-dialog-centered" role="document">' +
                        '<div class="modal-content">' +
                            '<div class="modal-header">' +
                                '<h5 class="modal-title" id="' + k + 'Label">' + v.dialogTitle + '</h5>' +
                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                    '<span aria-hidden="true">&times;</span>' +
                                '</button>' +
                            '</div>' +
                            '<div class="modal-body">' +
                                v.dialogContent +
                            '</div>' +
                            '<div class="modal-footer">' +
                                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
                                '<button type="button" class="btn btn-success" onclick="window.location.reload(true)">' + v.dialogButtonTitle + '</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );

            $('#' + k).on(
                'hidden.bs.modal',
                function() {
                    $('#' + k + '-container').remove();
                    $(this).modal('dispose').remove();
                }
            );
        }

        return this;
    },
};

/* ========================================================================== */
/* Errors                                                                     */
/* ========================================================================== */

/**
 * Error thrown by Mochi framework operations.
 *
 * @extends Error
 */
class MochiError extends Error {

    /**
     * Create a Mochi-specific error.
     *
     * @param {string} message - Error message.
     */
    constructor(message) {
        super(message);
        this.name = 'MochiError';
    }
}
