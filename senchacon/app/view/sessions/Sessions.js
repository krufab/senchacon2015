Ext.define('MyApp.view.sessions.Sessions', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.toolbar.Toolbar',
        'MyApp.view.sessions.Presentations'
    ],

    xtype: 'app-sessions',

    scrollable: {
        direction: 'vertical'
    },

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
            reference: 'dayOfWeek',
            itemId: 'dayOfWeek',
            items: [{
                enableToggle: true,
                glyph: '83@senchacon',
                pressed: true,
                text: 'TUE',
                value: 2
            }, {
                glyph: '83@senchacon',
                text: 'WED',
                value: 3
            }, {
                glyph: '83@senchacon',
                text: 'THU',
                value: 4
            }]
        } 
        // ,{
        //     xtype: 'segmentedbutton',
        //     reference: 'tracks',
        //     itemId: 'track',
        //     allowMultiple: true,
        //     items: [{
        //         reference: 'design',
        //         enableToggle: true,
        //         itemId: 'design',
        //         glyph: '101@senchacon',
        //         iconCls: 'design',
        //         pressed: true
        //     }, {
        //         reference: 'develop',
        //         enableToggle: true,
        //         itemId: 'develop',
        //         glyph: '99@senchacon',
        //         iconCls: 'develop',
        //         pressed: true
        //     }, {
        //         reference: 'deploy',
        //         enableToggle: true,
        //         itemId: 'deploy',
        //         glyph: '67@senchacon',
        //         iconCls: 'deploy',
        //         pressed: true
        //     }
        //    ]
        //}
        ]
    }]


});
