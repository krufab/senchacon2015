Ext.define('PlayStation.view.slider.Slider', {
	extend: "Ext.view.View",

	xtype: 'gamesslider',
	config: {
		games: null
	},
    bind: {
        games: '{games}'
    },

    componentCls: 'gamesslider',
    itemCls: 'game',
    overItemCls: 'over',
    selectedItemCls: 'selected',

    reference: 'gamesslider',
    scrollable: true,
    tpl: ['<div class="gamesliderroot"><tpl for=".">',
        '<div class="game">',
            '<img src="http:{img}"><h3>{title}</h3>',
            '<div class="extra"><span class="platformslider"><span>{platform}</span></span>',
            '<span class="progress">Progress: {progress}</span>',
            '<ul class="trophies"><li class="bronze">{trophies.bronze}</li><li class="silver">{trophies.silver}</li><li class="gold">{trophies.gold}</li><li class="platinum">{trophies.platinum}</li></ul></div>',
        '</div>',
        '</tpl></div>'],
    itemSelector: 'div.game',
    updateGames: function(games){
    	this.setStore(Ext.create('Ext.data.Store', {
	        storeId: 'Games',
	        data: games,
	        model: 'PlayStation.model.Game'
	    }));
    }

})