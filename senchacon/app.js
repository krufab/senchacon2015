/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.Loader.setConfig({
    disableCache: false
});
Ext.application({
    name: 'MyApp',

    extend: 'MyApp.Application',

    // TODO: mainView config should auto-require
    requires: [
        'MyApp.view.main.Main'
    ],

    // This is the default main view that gets used if none of the profiles are active
    mainView: 'MyApp.view.main.Main',

	profiles: ['Phone']
    
    //-------------------------------------------------------------------------
    // Most customizations should be made to MyApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
