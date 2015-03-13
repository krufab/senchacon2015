Ext.define('MyApp.model.Presentation', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.field.Date'
    ],

    fields: [
        {
            type: 'date',
            mapping: 'start_time',
            name: 'startTime',
            dateFormat: 'c'
        },
        {
            type: 'date',
            mapping: 'end_time',
            name: 'endTime',
            dateFormat: 'c'
        },
        {
            calculate: function(data) {
                return data.startTime.getDay();
            },
            name: 'startDay'
        },
        {
            mapping: 'track.name',
            name: 'track'
        },
                {
            calculate: function(data) {
                return (Ext.Date.getElapsed(data.startTime, data.endTime)) / 1000 / 60;
            },
            name: 'duration'
        },
        {
            calculate: function(data) {
                return ((data.startTime.getHours() * 60) + data.startTime.getMinutes());
            },
            name: 'startMinutesFromMidnight'
        }
    ],

    proxy: {
        url: 'resources/sessions.json',
        reader: {
            rootProperty: 'sessions'
        }
    },

    contains: function(string) {
        return	Ext.String.createRegex(string, false, false, true).test(this.data.title) ||
                Ext.String.createRegex(string, false, false, true).test(this.data.description);

    }

});