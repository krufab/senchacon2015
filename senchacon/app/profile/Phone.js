Ext.define('MyApp.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        views: ['Main'],
        mainView: 'MyApp.view.phone.Main'
    },

    isActive: function() {
        return Ext.os.deviceType === 'Phone';
    }
});