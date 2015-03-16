/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.state.LocalStorageProvider'
    ],

    alias: 'controller.main',

    onFilterSessions: function(form, e) {
        var grid = form.up('grid');

        grid.getStore().addFilter({
           property: 'speakername',
           value: form.getValue()
        });
    },

    onStoreLoad: function(store, records) {
        Ext.Array.forEach(records, function(presentation){
            presentation.set('favorite', !!MyApp.stateProvider.get(presentation.id));
        });
    },

    onStoreUpdate: function(store, record) {
        MyApp.stateProvider.set(record.id, record.data.favorite);
    }
});
