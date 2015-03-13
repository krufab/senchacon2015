Ext.define('MyApp.view.sessions.Sessions', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.toolbar.Toolbar',
        'MyApp.view.sessions.Presentations'
    ],

    xtype: 'app-sessions',
    scrollable: true,
    items: [{
        xtype: 'app-presentations',
        bind: {
            store: '{sessions}'
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        layout: {
            type: 'hbox',
            padding: 2
        },
        items: [
        {
                    xtype: 'button',
                    iconCls: 'heart',
                    toggleHandler: function(button, state) {
                        button.setGlyph(state?'72@senchacon':'104@senchacon');
                    },
                    reference: 'favorites',
                    itemId: 'favorites',
                    enableToggle: true,
                    glyph: '104@senchacon'
        },
        {
            xtype: 'segmentedbutton',
            date: null,
            reference: 'dayOfWeek',
            itemId: 'dayOfWeek',
            items: [{
                enableToggle: true,
                glyph: '83@senchacon',
                pressed: true,
                text: 'Tuesday',
                value: 2
            }, {
                glyph: '83@senchacon',
                text: 'Wednesday',
                value: 3
            }, {
                glyph: '83@senchacon',
                text: 'Thursday',
                value: 4
            }]
        }, {
            xtype: 'segmentedbutton',
            reference: 'tracks',
            itemId: 'track',
            allowMultiple: true,
            items: [{
                reference: 'design',
                enableToggle: true,
                glyph: '101@senchacon',
                iconCls: 'design',
                pressed: true
            }, {
                reference: 'develop',
                enableToggle: true,
                glyph: '99@senchacon',
                iconCls: 'develop',
                pressed: true
            }, {
                reference: 'deploy',
                enableToggle: true,
                glyph: '67@senchacon',
                iconCls: 'deploy',
                pressed: true
            }]
        }]
    }]


});
