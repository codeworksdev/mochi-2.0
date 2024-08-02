(function()
{
    var CACHE = {
        VERSION : 1.0,
        DATE : '2024-07-02',
        NAME : 'mochi-sw-cache-master',
        LIST : [
            './',
            'bootstrap/css/bootstrap.css',
            'bootstrap/css/bootstrap.min.css',
            'bootstrap/css/bootstrap.rtl.css',
            'bootstrap/css/bootstrap.rtl.min.css',
            'bootstrap/css/bootstrap-grid.css',
            'bootstrap/css/bootstrap-grid.min.css',
            'bootstrap/css/bootstrap-grid.rtl.css',
            'bootstrap/css/bootstrap-grid.rtl.min.css',
            'bootstrap/css/bootstrap-reboot.css',
            'bootstrap/css/bootstrap-reboot.min.css',
            'bootstrap/css/bootstrap-reboot.rtl.css',
            'bootstrap/css/bootstrap-reboot.rtl.min.css',
            'bootstrap/css/bootstrap-utilities.css',
            'bootstrap/css/bootstrap-utilities.min.css',
            'bootstrap/css/bootstrap-utilities.rtl.css',
            'bootstrap/css/bootstrap-utilities.rtl.min.css',
            'bootstrap/js/bootstrap.bundle.js',
            'bootstrap/js/bootstrap.bundle.min.js',
            'bootstrap/js/bootstrap.esm.js',
            'bootstrap/js/bootstrap.esm.min.js',
            'bootstrap/js/bootstrap.js',
            'bootstrap/js/bootstrap.min.js',
            'bootstrap/scss/tests/jasmine.js',
            'bootstrap/scss/tests/sass-true/register.js',
            'bootstrap/scss/tests/sass-true/runner.js',
            'frontend/css/print-less.css',
            'frontend/css/print-sass.css',
            'frontend/css/style-less.css',
            'frontend/css/style-sass.css',
            'frontend/img/brand/launcher-icon-1x.png',
            'frontend/img/brand/launcher-icon-4x.png',
            'frontend/img/brand/screenshot_1n.png',
            'frontend/img/brand/screenshot_1w.png',
            'frontend/img/brand/screenshot_2n.png',
            'frontend/img/brand/screenshot_2w.png',
            'frontend/js/onload.js',
            'index.html',
            'mochi/css/helpers/animate.less/dist/css/animate.css',
            'mochi/js/jquery/ui/external/jquery/jquery.js',
            'mochi/js/jquery/ui/images/ui-icons_444444_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_555555_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_777620_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_777777_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_cc0000_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_ffffff_256x240.png',
            'mochi/js/jquery/ui/index.html',
            'mochi/js/jquery/ui/jquery-ui.css',
            'mochi/js/jquery/ui/jquery-ui.js',
            'mochi/js/jquery/ui/jquery-ui.min.css',
            'mochi/js/jquery/ui/jquery-ui.min.js',
            'mochi/js/jquery/ui/jquery-ui.structure.css',
            'mochi/js/jquery/ui/jquery-ui.structure.min.css',
            'mochi/js/jquery/ui/jquery-ui.theme.css',
            'mochi/js/jquery/ui/jquery-ui.theme.min.css',
            'mochi/js/libraries.js',
            'mochi/js/mochi.js',
            'mochi/js/mochi.min.js',
            'mochi/js/plugins/dialog/dist/dialog.js',
            'mochi/js/plugins/dialog/dist/dialog.min.js',
            'mochi/js/plugins/veeva/dist/ext/veeva-library.js',
            'mochi/js/plugins/veeva/dist/veeva.js',
            'mochi/js/plugins/veeva/dist/veeva.min.js',
            'sw.js',
            ],
        };

    self.addEventListener(
        'install',
        function(event)
        {
            self.skipWaiting();

            event.waitUntil(
                caches
                  .open(CACHE.NAME)
                  .then(
                    function(cache)
                    {
                        console.log('Opened cache: '+CACHE.NAME+' (v'+CACHE.VERSION.toString()+' - '+CACHE.DATE+')');
                        return cache.addAll(CACHE.LIST);
                    }
                    )
                );
        }
        );

    self.addEventListener(
        'fetch',
        function(event)
        {
            event.respondWith(
                caches.match(event.request)
                  .then(
                    function(response)
                    {
                        if (response) return response;
                        else var fetchRequest = event.request.clone();

                        return fetch(fetchRequest).then(
                            function(response)
                            {
                                if (
                                  !response
                                  || response.status !== 200
                                  || response.type !== 'basic')
                                {
                                    return response
                                }

                                var responseToCache = response.clone();

                                caches
                                  .open(CACHE.NAME)
                                  .then(
                                    function(cache)
                                    {
                                        cache.put(
                                            event.request,
                                            responseToCache
                                            );
                                    }
                                    );

                                return response
                            }
                            );
                    }
                    )
                );
        }
        );

    self.addEventListener(
        'activate',
        function(event)
        {
            event.waitUntil(
                caches
                  .keys()
                  .then(
                    function(cacheNames)
                    {
                        return Promise.all(
                            cacheNames.map(
                                function(cacheName)
                                {
                                    if (cacheName != CACHE.NAME)
                                    {
                                        return caches.delete(cacheName)
                                    }
                                }
                                )
                            );
                    }
                    )
                );
        }
        );
}
)();
