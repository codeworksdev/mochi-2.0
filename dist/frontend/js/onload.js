/**
 * Mochi lifecycle hook that initializes default application options.
 */
function mochi_init() {
    this.setOption({
        CLICK_NAME                      : this.getDefaultOption( 'CLICK_NAME'                      ),
        DEBUG_MODE                      : this.getDefaultOption( 'DEBUG_MODE'                      ),
        ENABLE_SERVICE_WORKER           : this.getDefaultOption( 'ENABLE_SERVICE_WORKER'           ),
        LAZY_LOAD_PLUGINS               : this.getDefaultOption( 'LAZY_LOAD_PLUGINS'               ),
        SW_UPDATE_NOTIFICATIONS         : this.getDefaultOption( 'SW_UPDATE_NOTIFICATIONS'         ),
        SW_UPDATE_NOTIFICATIONS_OPTIONS : this.getDefaultOption( 'SW_UPDATE_NOTIFICATIONS_OPTIONS' ),
        SW_VERBOSE_SYNCING              : this.getDefaultOption( 'SW_VERBOSE_SYNCING'              ),
        SW_VERBOSE_SYNCING_OPTIONS      : this.getDefaultOption( 'SW_VERBOSE_SYNCING_OPTIONS'      )
    });
}

/* ========================================================================== */
/* Hooks                                                                      */
/* ========================================================================== */

/*
 * Hooks
 *
 * https://github.com/codeworksdev/mochi-2.0?tab=readme-ov-file#hooks
 *
 * Hooks are provided by Mochi 2.0 to allow your application to hook into
 * the rest of the framework with minimal coding. Each hook is called
 * automatically by the Mochi 2.0 framework under specific circumstances.
 */

function mochi_before       ()         {}
function mochi_load         (data)     {}
function mochi_load_page    (data)     {}
function mochi_load_page0   (data)     {}
function mochi_load_view    (data)     {}
function mochi_load_view0   (data)     {}
function mochi_unload       (data)     {}
function mochi_unload_page  (data)     {}
function mochi_unload_page0 (data)     {}
function mochi_unload_view  (data)     {}
function mochi_unload_view0 (data)     {}
function mochi_last         ()         {}
function mochi_onchange     (data)     {}
function mochi_onmutation   (mutation) {}

/* ========================================================================== */
/* Starter                                                                    */
/* ========================================================================== */

/*
 * Initializes the application once the DOM is ready.
 *
 * Uses `$m.extend()` to register and instantiate `MyMochiApplication`.
 *
 * `$m.extend()` arguments:
 * 1. {string} propertyName - Unique property name to attach the application to (for example, `$m.app`).
 * 2. {Function} constructorFn - Constructor function to instantiate.
 * 3. {Object} meta - Optional metadata or configuration passed to the application.
 * 4. {Function} callback - Function executed after `$m.extend()` finishes.
 */
$(document).ready(

    /**
     * Fired when the document has finished loading.
     *
     * @param {Event} event - The jQuery ready event.
     */
    function(event) {
        $m.extend(
            'app',
            MyMochiApplication,
            {},
            function() {
                if (this.onload) this.onload();
            }
        );
    }
);

/* ========================================================================== */
/* Application                                                                */
/* ========================================================================== */

/**
 * Creates a new MyMochiApplication instance.
 *
 * @constructor
 * @param {Object} meta - Optional metadata or configuration passed to the application.
 */
function MyMochiApplication(meta) {
    this._options();
    this._html();
    this._vars();
    this._init();
}

MyMochiApplication.prototype = {

    /**
     * Define/normalize runtime options (feature flags, constants, timing, etc.).
     * Called early in bootstrapping.
     *
     * @returns {void}
     */
    _options: function() {
    },

    /**
     * Cache commonly-used DOM references (containers, pages, menus, etc.).
     * Called during app bootstrapping.
     *
     * @returns {void}
     */
    _html: function() {
    },

    /**
     * Initialize internal variables/state used by the application.
     * Called during bootstrapping.
     *
     * @returns {void}
     */
    _vars: function() {
    },

    /**
     * Main initializer for runtime behavior (events, UI components init, etc.).
     * Called after options/vars/html setup.
     *
     * @returns {void}
     */
    _init: function() {
    },

    /**
     * Run on initial app load after bootstrapping.
     * Typically triggers initial renders, startup logic, etc.
     *
     * @returns {MyMochiApplication} Fluent instance.
     */
    onload: function() {
        return this;
    },
};
