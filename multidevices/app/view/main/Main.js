Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    requires: [
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'Ext.grid.Panel',
        'Ext.mixin.Responsive',
        'Ext.plugin.Responsive',
    ],
    mixins: ['MyApp.view.utils.SmallScreen'],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    
    dockedItems: [{
        xtype: 'toolbar',
        docked: 'top',
        reference: 'toptoolbar',
        items:['SenchaCon']
    }],

    /* note that I am not using these,
     so I can maintain the tab with responsive design
     on one place. */

    //tabPosition: ..
    //tabBar: ..
    //dockItems: ...

    /* configure the main interface, based on settings
    that change by responsive design. */
    configureInterface: function(conf){
        var me = this,
            tb = me.lookupReference('toptoolbar'),
            tabBar = me.down('tabbar'),
            tabItems = tabBar.items.items,
            i = 0, l = tabItems.length;
        
        tabBar.setLayout({
            pack: conf.pack
        });

        for(i; i<l;i++){
            tabItems[i].setIconAlign(conf.iconAlign);
        }

        tb.setLayout({
            type: conf.type,
            pack: conf.pack
        });

        tb.setHeight(conf.height);
        me.setTabPosition(conf.position);
    },

    afterRender: function(){
        this.callParent(arguments);
        this.updateSmallscreen(MyApp.view.utils.SmallScreen.isSmallScreen());
    },

    /* The update magic method is the magic!
     see the MyApp.view.utils.SmallScreen mixin,
     it has a smallscreen config, which will
     change based on responsive design. */
    updateSmallscreen: function(smallscreen){
        var me = this,
            settings = {
                pack: 'start',
                type: 'hbox',
                height: 120,
                position: 'top',
                iconAlign: 'left',
                baseCls: null
            };
            
        if(me.rendered){
            Ext.getBody().removeCls('tablet');

            //configure a small screen
            //else take defaults
            if(smallscreen){
                settings.pack = 'center';
                settings.height = 50;
                settings.position = 'bottom';
                settings.iconAlign = 'top';

                Ext.getBody().addCls('tablet');
            } 

            me.configureInterface(settings);
        }
    },

    initComponent: function(){
        var me = this,
            s = me.getViewModel().getStore('menuitems');
        me.callParent(arguments);

        me.suspendLayout = true;
        s.each(function(rec){
            me.add({
                glyph: rec.get('glyph'),
                title: rec.get('title')
            });
        });
        me.suspendLayout = false;
    }
});
