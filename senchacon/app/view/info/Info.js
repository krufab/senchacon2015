Ext.define('MyApp.view.info.Info', {
    extend: 'Ext.panel.Panel',

    xtype: 'app-info',

    viewModel: {
       type: 'main'
    },

	scrollable: {
        direction: 'vertical'
    },

    bind: {
        data: {
            bindTo: '{content}'
        }
    },
    tpl: '{content}'
});
