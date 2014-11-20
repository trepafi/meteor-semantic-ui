Package.describe({
    name: "trepafi:semantic-ui",
    summary: "Semantic UI for Meteor",
    version: "0.0.1",
    git: "https://github.com/trepafi/meteor-semantic-ui.git"
});


Package.onUse(function (api) {
    api.versionsFrom('1.0');
    api.use(['jquery'], ['client']);
    api.addFiles(getFiles(), ['client']);

    function getFiles() {
        var root = 'src/uncompressed/';
        return [
            root + 'collections/breadcrumb.css',
            root + 'collections/form.css',
            root + 'collections/grid.css',
            root + 'collections/menu.css',
            root + 'collections/message.css',
            root + 'collections/table.css',
            root + 'elements/basic.icon.css',
            root + 'elements/button.css',
            root + 'elements/divider.css',
            root + 'elements/header.css',
            root + 'elements/icon.css',
            root + 'elements/image.css',
            root + 'elements/input.css',
            root + 'elements/label.css',
            root + 'elements/loader.css',
            root + 'elements/progress.css',
            root + 'elements/reveal.css',
            root + 'elements/segment.css',
            root + 'elements/step.css',
            root + 'fonts/basic.icons.eot',
            root + 'fonts/basic.icons.svg',
            root + 'fonts/basic.icons.ttf',
            root + 'fonts/basic.icons.woff',
            root + 'fonts/icons.eot',
            root + 'fonts/icons.otf',
            root + 'fonts/icons.svg',
            root + 'fonts/icons.ttf',
            root + 'fonts/icons.woff',
            root + 'images/loader-large-inverted.gif',
            root + 'images/loader-large.gif',
            root + 'images/loader-medium-inverted.gif',
            root + 'images/loader-medium.gif',
            root + 'images/loader-mini-inverted.gif',
            root + 'images/loader-mini.gif',
            root + 'images/loader-small-inverted.gif',
            root + 'images/loader-small.gif',
            root + 'modules/accordion.css',
            root + 'modules/accordion.js',
            root + 'modules/behavior/api.js',
            root + 'modules/behavior/colorize.js',
            root + 'modules/behavior/form.js',
            root + 'modules/behavior/state.js',
            root + 'modules/chatroom.css',
            root + 'modules/chatroom.js',
            root + 'modules/checkbox.css',
            root + 'modules/checkbox.js',
            root + 'modules/dimmer.css',
            root + 'modules/dimmer.js',
            root + 'modules/dropdown.css',
            root + 'modules/dropdown.js',
            root + 'modules/modal.css',
            root + 'modules/modal.js',
            root + 'modules/nag.css',
            root + 'modules/nag.js',
            root + 'modules/popup.css',
            root + 'modules/popup.js',
            root + 'modules/rating.css',
            root + 'modules/rating.js',
            root + 'modules/search.css',
            root + 'modules/search.js',
            root + 'modules/shape.css',
            root + 'modules/shape.js',
            root + 'modules/sidebar.css',
            root + 'modules/sidebar.js',
            root + 'modules/tab.css',
            root + 'modules/tab.js',
            root + 'modules/transition.css',
            root + 'modules/transition.js',
            root + 'modules/video.css',
            root + 'modules/video.js',
            root + 'views/comment.css',
            root + 'views/feed.css',
            root + 'views/item.css',
            root + 'views/list.css',
            root + 'views/statistic.css'
        ];
    }

});