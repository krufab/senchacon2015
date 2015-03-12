Ext.define('MyApp.view.sessions.Presentations', {
    extend: 'Ext.view.View',
    requires: [
        'MyApp.view.main.MainController',
        'Ext.XTemplate',
        'Ext.button.Segmented'
    ],

    xtype: 'app-presentations',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    scrollable: true,
    emptyText: 'There are no matching presentations.',
    itemTpl: Ext.create('Ext.XTemplate', 
        '<div class="presentation collapsed">',
        '    <div',
        '         class="daybar" ',
        '         style="width:{[this.getDaybarWidth(values)]}px;"',
        '         >',
        '        {[this.getPresentationBar(values)]}',
        '    </div>',
        '    <div class="title">',
        //'        {[this.getFavoriteIcon(values)]}',
        '        {[this.getTrackIcon(values)]}',
        '        {title}',
        '    </div> ',
        '    <div class="description">',
        '        {description}',
        '        <div class="speakers">',
        '            <table><tr>',
        '                <tpl for="speakers">',
        '                    <td>',
        '                        <figure><img src={avatar_url} height="80"/><figcaption>{name}</figcaption</figure>',
        '                    </td>',
        '                </tpl>',
        '            </tr></table>',
        '        </div>',
        '    </div>',
        '    ',
        '</div>',
        {
            getPresentationBar: function(values) {
                var pixelsPerMinute = 1.75,
                    startString = Ext.Date.format(values.startTime, 'H:i'),
                    endString = Ext.Date.format(values.endTime, 'H:i'),
                    presentationMinutes = (Ext.Date.getElapsed(values.endTime, values.startTime) / 1000 / 60),
                    presentationWidth = (presentationMinutes * pixelsPerMinute),
                    startOfDay = Ext.Date.clone(values.startTime),
                    endOfDay = Ext.Date.clone(values.startTime),
                    startMinutes, startPixels, style = "";
                
                startOfDay.setHours(9);
                endOfDay.setHours(18);

                startMinutes = (Ext.Date.getElapsed(startOfDay, values.startTime) / 1000 / 60);
                startPixels = (startMinutes * pixelsPerMinute);
                style = 'width: ' + presentationWidth + 'px' + ';' + 'left: ' + startPixels + 'px;';

                return '<span style="'+style+'">' + startString + ' - ' + endString + '</span>';
            },
            getDaybarWidth: function(values) {
                var pixelsPerMinute = 1.75;
                var startOfDay = Ext.Date.clone(values.startTime);
                Ext.Date.clearTime(startOfDay);
                var endOfDay = Ext.Date.clone(values.startTime);
                Ext.Date.clearTime(endOfDay);
                startOfDay.setHours(9);
                endOfDay.setHours(18);
                var dayMinutes = (Ext.Date.getElapsed(startOfDay, endOfDay) / 1000 / 60);
                var dayPixels = (dayMinutes * pixelsPerMinute);
                
                return dayPixels;
            },
            getFavoriteIcon: function(values) {
                console.log(MyApp.stateProvider.get(values.id));
                var cls = (MyApp.stateProvider.get(values.id)?'heartin':'heartout');
                return '<span class="favoriteicon ' + cls +'"></span>';
            },
            getTrackIcon: function(values) {
                var cls = this.trackIconCls[values.track];
                return '<span class="trackicon ' + cls +'"></span>';
            },
            trackIconCls: {
                Design: 'design',
                Develop: 'develop',
                Deploy: 'deploy'
            }
        }
    ),

    defaultListenerScope: true,
    listeners: {
        itemclick: 'onDataviewItemClick'
    },

    onDataviewItemClick: function(dataview, record, item, index, e, eOpts) {
        if (Ext.fly(e.target).hasCls('favorite')){
            if (MyApp.stateProvider.get(record.data.id)){
                MyApp.stateProvider.clear(record.data.id);
                Ext.fly(e.target).removeCls('heartin');
                Ext.fly(e.target).addCls('heartout');
            } else {
               MyApp.stateProvider.set(record.data.id, true);
               Ext.fly(e.target).removeCls('heartin');
               Ext.fly(e.target).addCls('heartout');
            }
        } else if (!Ext.fly(e.target).hasCls('description')){
            Ext.fly(item).down('div.presentation').toggleCls('collapsed');
        }

    }


});