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
        '    <div class="daybar">',
        '        {[this.getPresentationBar(values)]}',
        '    </div>',
        '    <div class="title">',
        '        {[this.getFavoriteIcon(values)]}',
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
                var startOfDayMinutesFromMidnight = (8 * 60); // 8:00 times 60 minutes per hour
                var endOfDayMinutesFromMidnight = (19 * 60); // 19:00 times 60 minutes per hour
                var durationOfDayMinutes = (endOfDayMinutesFromMidnight - startOfDayMinutesFromMidnight);
                var percentagePerMinute = (1 / durationOfDayMinutes * 100);
                var startOfLectureMinutes = (values.startMinutesFromMidnight - startOfDayMinutesFromMidnight);

                var startPercentage = (startOfLectureMinutes * percentagePerMinute);
                var durationPercentage = (values.duration * percentagePerMinute);

                var style = 'left: ' + startPercentage + '%; width: ' + durationPercentage + '%; ';
                var cls = this.trackIconCls[values.track];

                var startString = Ext.Date.format(values.startTime, 'H:i');
                var endString = Ext.Date.format(values.endTime, 'H:i');

                return '<span class= "'+cls+'" style="'+style+'">' + startString + ' - ' + endString + '</span>';
            },
            getFavoriteIcon: function(values) {
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
        if (Ext.fly(e.target).hasCls('favoriteicon')){
            if (MyApp.stateProvider.get(record.data.id)){
                MyApp.stateProvider.clear(record.data.id);
                Ext.fly(e.target).removeCls('heartin');
                Ext.fly(e.target).addCls('heartout');
            } else {
               MyApp.stateProvider.set(record.data.id, true);
               Ext.fly(e.target).removeCls('heartout');
               Ext.fly(e.target).addCls('heartin');
            }
        } else if (!Ext.fly(e.target).hasCls('description')){
            Ext.fly(item).down('div.presentation').toggleCls('collapsed');
        }

    }


});