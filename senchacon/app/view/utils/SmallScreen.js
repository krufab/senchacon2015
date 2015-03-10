/**
 * @author Lee Boonstra
 *
 * This is a mixin which can switch between smallscreen view and
 * large (normal) view on run-time.
 *
 *     Ext.define('MyView', {
 *          extend: 'Ext.panel.Panel',
 *          mixin: ['MyApp.views.utils.SmallScreen'],
 *
 *			updateSmallscreen: function(smallscreen){
 *      		if(this.rendered){
 *          		if(smallscreen){
 *              		//build smallscreen interface
 *           		} else {
 *               		//build normal interface    
 *           		}
 *       		}
 *   		}
 *     });
 *
 */
Ext.define('MyApp.view.utils.SmallScreen', {
    extend: 'Ext.Mixin',
    statics: {
        isSmallScreen: function(){
            return (Ext.ComponentQuery.query('app-main')[0].getWidth() <= 1024);
        },
        isTouch: function(){
            return Ext.feature.has.Touch;
        },
        isTablet: function(){
            return Ext.os.deviceType === "Tablet";
        }
    },

    config: {
       smallscreen: false //will run updateSmallscreen on every change
    },

    plugins: ['responsive'],
    responsiveFormulas: {
        smallscreenCriteria: 'width <= 1024',
        normalScreenCriteria: 'width > 1024'
    },

    responsiveConfig: {
        smallscreenCriteria: {
            smallscreen: true
        },
        normalScreenCriteria: {
            smallscreen: false
        }
    }
});