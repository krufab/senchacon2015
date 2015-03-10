/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.phone.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'Ext.grid.Panel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'gridpanel',
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
        split: true,
        collapsible: true,
        collapseMode:'mini',
        collapsed: true
    },{
        region: 'center',
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'hamburger',
                glyph: 108,
                handler: function(btn){
                    btn.up('app-main').lookupReference('phonemenu').toggleCollapse();
                }
            },{
                xtype: 'tbtext',
                flex: 1,
                cls: 'tbtitle',
                text: 'SenchaCon'
            }]
        }]
    }],

    initComponent: function(){
        //add the phone base CSS class on the body
        Ext.getBody().addCls('phone');
        this.callParent(arguments);
    }
});
