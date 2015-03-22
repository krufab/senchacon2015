Ext.define('PlayStation.view.dashboard.RssBoard', {
    extend: 'Ext.panel.Panel',
    xtype: 'rssboard',

    requires: [
        'Ext.ux.dashboard.GoogleRssPart',
        'Ext.dashboard.Dashboard',
        'PlayStation.view.slider.Slider'
    ],

    layout: 'border',

    items: [
    {

        xtype: 'gamesslider',
        height: 320,
        region: 'north'
    },
    {

        xtype: 'dashboard',
        reference: 'dashboard',
        stateful: false,
        region: 'center',
        columnWidths: [
            0.40,
            0.30,
            0.30
        ],
        parts: {
            rss: 'google-rss'
        },

        defaultContent: [{
            type: 'rss',
            columnIndex: 0,
            height: 280,
            feedUrl: 'http://cdn.us.playstation.com/pscomauth/groups/public/documents/webasset/rss/playstation/Games_PS4.rss'
        }, {
            type: 'rss',
            columnIndex: 1,
            height: 180,
            feedUrl: 'http://feeds.ign.com/ign/ps3-all'
        }, {
            type: 'rss',
            columnIndex: 1,
            height: 180,
            feedUrl: 'http://feeds.ign.com/ign/ps-vita-all'
        }, {
            type: 'rss',
            columnIndex: 1,
            height: 180,
            title: 'IGN - PS4',
            feedUrl: 'http://feeds.ign.com/IGNPS4All'
        }, {
            type: 'rss',
            columnIndex: 2,
            height: 280,
            feedUrl: 'http://www.gamestop.com/SyndicationHandler.ashx?Filter=comingsoon'
        }]
    }]
});
