Ext.define('MyApp.view.phone.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'Ext.grid.Panel'
    ],

    xtype: 'app-main-phone',
    
    controller: 'main',
    viewModel: {
       type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'gridpanel',
        cls: 'phonelist',
        reference: 'phonemenu',
        region: 'west',
        bind: {
            store: '{menuitems}'
        },
        columns: [{
            dataIndex: 'title',
            text: 'Menu',
            flex: 1
        }],
        width: 250,
        split: {
            size: 0
        },
        collapsible: true,
        collapseMode:'mini',
        collapsed: true,
        listeners: {
            itemclick: function(grid, rec){
                var deck = grid.up('app-main-phone').lookupReference('deck');
                deck.removeAll();
                deck.add({
                    xtype: rec.get('typename'),
                    glyph: rec.get('glyph'),
                    title: rec.get('title'),
                    headerPosition: 'bottom'
                });
            }
        }
    },{
        region: 'center',
        layout: 'card',
        reference: 'deck',
        bodyPadding: 5,
        
        items: [{
            xtype: 'app-sessions',
            glyph: '83@senchacon',
            title: 'Sessions',
            headerPosition: 'bottom'
        }],

        dockedItems: [{
            xtype: 'toolbar',
            ui: 'dark',
            items: [{
                ui: 'dark',
                glyph: '108@senchacon',
                handler: function(btn){
                    btn.up('app-main-phone').lookupReference('phonemenu').toggleCollapse();
                }
            },{
                xtype: 'tbtext',
                flex: 1,
                cls: 'tbtitle',
                text: 'SenchaCon'
            }]
        }]
    }]

    ,initComponent: function(){
        //add the phone base id  on the body
        //for styling purposes
        Ext.getBody().setId('phone');
        this.callParent(arguments);
    }
});
