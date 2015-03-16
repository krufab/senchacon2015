Ext.define('MyApp.view.speakers.Speakers', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Text',
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
    scrollable: true,
    
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
        text: 'Speaker',
        dataIndex: 'speakername',
        flex: 1,
        filter: {
            type: 'string'
        }
    }, {
        text: 'Company',
        dataIndex: 'speakercompany'
    }, {
        xtype: 'datecolumn',
        text: 'Event Date',
        format: 'F j, Y',
        dataIndex: 'date',
        align: 'right',
        width: 120
    }]
});
