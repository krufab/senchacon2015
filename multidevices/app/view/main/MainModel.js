/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
    	menuitems: {
	    	fields: ['typename'],
	    	data: [{
	    		typename: 'schedule',
	    		glyph: 92,
	    		title: 'Schedule'
	    	}, {
	    		typename: 'speakers',
	    		glyph: 119,
	    		title: 'Speakers'
	    	}, {
	    		typename: 'contact',
	    		glyph: 87,
	    		title: 'Contact'
	    	}]
    	}
    }
});