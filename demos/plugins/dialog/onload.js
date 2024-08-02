function mochi_before()
{
    this
      .log('hook: mochi_before.apply(Mochi, undefined)', true)
      .setOption('DEBUG_MODE', true);
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function mochi_init           ()     { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_init',           undefined ]) } };
function mochi_load           (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load',           data      ]) } };
function mochi_load_page      (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_page',      data      ]) } };
function mochi_load_page0     (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_page0',     data      ]) } };
function mochi_load_page1_5   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_page1_5',   data      ]) } };
function mochi_load_page2     (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_page2',     data      ]) } };
function mochi_load_view      (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_view',      data      ]) } };
function mochi_load_view0     (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_view0',     data      ]) } };
function mochi_load_view1_5   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_view1_5',   data      ]) } };
function mochi_load_view2     (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_view2',     data      ]) } };
function mochi_unload         (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload',         data      ]) } };
function mochi_unload_page    (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_page',    data      ]) } };
function mochi_unload_page0   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_page0',   data      ]) } };
function mochi_unload_page1_5 (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_page1_5', data      ]) } };
function mochi_unload_page2   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_page2',   data      ]) } };
function mochi_unload_view    (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_view',    data      ]) } };
function mochi_unload_view0   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_view0',   data      ]) } };
function mochi_unload_view1_5 (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_view1_5', data      ]) } };
function mochi_unload_view2   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_view2',   data      ]) } };
function mochi_last           ()     { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_last',           undefined ]) } };
function mochi_onchange       (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_onchange',       data      ]) } };

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function mochi_onmutation(mutation)
{
    switch (mutation.target.nodeName)
    {
        case 'DIV':
        if ($m.app) $m.app.onChange(mutation);
        break;
    }
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

$(document).ready(
    function(event)
    {
        $m.extend(
            'app',
            MyMochiDemo,
            {},
            function() {
                if (this.onload) this.onload()
                }
            );
    }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function MyMochiDemo(meta)
{
    this._vars();
    this._html();
    this._init();
};

MyMochiDemo.prototype =
{
    _vars : function()
    {
        this.code    = $m.__container.find('code');
        this.buttons = $m.__container.find('.btn');
    },

    _html: function()
    {
    },

    _init: function()
    {
        $m.onClick(
            this.buttons,
            function()
            {
                var b = $(this),
                    a = b.attr('data-action');

                switch (a)
                {
                    case 'dialog':
                    $m.dialog.open(
                        '<p>Hello, world!</p>'
                        );
                    break;
                }
            }
            );
    },

    onChange : function(mutation)
    {
        var c = this.code.filter('.mutation'),
            p = $m.getPage(),
            v = $m.getView();

        if (
          mutation
          && mutation.target
          && $(mutation.target).hasClass('mochi-plugin-dialog'))
        {
            c.text(mutation.target.outerHTML)
        }

        return this
    },

    onload : function()
    {
        return this.onChange()
    },
};
