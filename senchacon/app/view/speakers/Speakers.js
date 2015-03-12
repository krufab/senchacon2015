Ext.define('MyApp.view.speakers.Speakers', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.toolbar.Toolbar',
        'MyApp.view.main.MainController'
    ],

    xtype: 'app-speakers',

    controller: 'main',
    viewModel: {
       type: 'main'
    },

    bind: {
       store: '{speakers}'
    },

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            xtype: 'textfield',
            name: 'searchstring',
            emptyText: 'Filter on first name...', //Type: J
            flex: 1,
            enableKeyEvents: true,
            listeners: {
                keyup: 'onFilterSessions'
            }

        }]
    }],

    columns: [{
        text: 'First Name',
        dataIndex: 'first',
        filter: {
            type: 'string'
        }
    }, {
        text: 'Last Name',
        dataIndex: 'last',
    }, {
        xtype: 'datecolumn',
        text: 'Event Date',
        format: 'F j, Y',
        dataIndex: 'day',
        flex: 1,
    }]
});
