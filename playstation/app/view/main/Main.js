/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PlayStation.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'PlayStation.view.main.MainController',
        'PlayStation.view.main.MainModel',
        'PlayStation.view.dashboard.RssBoard'
    ],
    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'center'
    },

    items: [{
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    xtype: 'button',
                    cls: 'shop',
                    text: 'shop'
                }, {
                    xtype: 'button',
                    cls: 'info',
                    text: 'info'
                }, '->', {
                    xtype: 'component',
                    cls: 'username',
                    bind: {
                        html: 'Username: {profile.username}'
                    }
                }, '-', {
                    xtype: 'component',
                    cls: 'trophies',
                    bind: {
                        html: '<span class="total">{profile.trophies.total}</span>'
                    }
                }, 
                {
                    xtype: 'component',
                    cls: 'bronze',
                    bind: {
                        html: '<span class="bronze">{profile.trophies.bronze}</span>'
                    }
                },
                {
                    xtype: 'component',
                    cls: 'silver',
                    bind: {
                        html: '<span class="silver">{profile.trophies.silver}</span>'
                    }
                },
                {
                    xtype: 'component',
                    cls: 'gold',
                    bind: {
                        html: '<span class="gold">{profile.trophies.gold}</span>'
                    }
                },
                {
                    xtype: 'component',
                    cls: 'platinum',
                    bind: {
                        html: '<span class="platinum">{profile.trophies.platinum}</span>'
                    }
                }, '-', {
                    xtype: 'component',
                    cls: 'timer',
                    reference: 'timer'
                }]
            }],
        xtype: 'rssboard',
        height: '90%',
        width: '90%'
    }]
});
