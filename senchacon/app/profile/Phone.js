Ext.define('MyApp.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        views: ['Main'],
        mainView: 'MyApp.view.phone.Main'
    },

    isActive: function() {
        console.log('phone', Ext.os.deviceType === 'Phone');
        return Ext.os.deviceType === 'Phone';
    }
});