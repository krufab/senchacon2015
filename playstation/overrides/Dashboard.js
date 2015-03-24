Ext.define('Dashboard', {
	override: 'Ext.dashboard.Panel',

	header: false,
	frame: false
});

Ext.define('GoogleRssView', {
	override: 'Ext.ux.dashboard.GoogleRssView',

	title: null,
    detailTpl:
    '<tpl for="entries[currentEntry]">' +
    '<div class="' + Ext.baseCSSPrefix + 'dashboard-googlerss-detail-header">' +
            '<div class="' + Ext.baseCSSPrefix + 'dashboard-googlerss-detail-nav">' +
                '<tpl if="parent.hasPrev">' +
                    '<span class="' + Ext.baseCSSPrefix + 'dashboard-googlerss-prev ' +
                            Ext.baseCSSPrefix + 'dashboard-googlerss-glyph">'+
                        '{parent.prevGlyph}' +
                    '</span> '+
                '</tpl>' +
                ' {[parent.currentEntry+1]}/{parent.numEntries} ' +
                '<span class="' + Ext.baseCSSPrefix + 'dashboard-googlerss-next ' +
                            Ext.baseCSSPrefix + 'dashboard-googlerss-glyph"' +
                    '<tpl if="!parent.hasNext">' +
                        ' style="visibility:hidden"'+
                    '</tpl>' +
                    '> {parent.nextGlyph}' +
                '</span> '+
                '<span class="' + Ext.baseCSSPrefix + 'dashboard-googlerss-close ' +
                            Ext.baseCSSPrefix + 'dashboard-googlerss-glyph"> ' +
                    '{parent.closeGlyph}' +
                '</span> '+
            '</div>' +
            '<div class="' + Ext.baseCSSPrefix + 'dashboard-googlerss-title">'+
                '<a href="{link}" target=_blank>{title:ellipsis(33)}</a>'+
            '</div>'+
            '<div class="' + Ext.baseCSSPrefix + 'dashboard-googlerss-author">By {author} - {publishedDate:this.date}</div>' +
        '</div>' +
        '<div class="' + Ext.baseCSSPrefix + 'dashboard-googlerss-detail">' +
            '<h2>{title}</h2>' +
            '{content}' +
        '</div>' +
    '</tpl>'
})