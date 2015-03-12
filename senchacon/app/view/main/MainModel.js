/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    requires: [
        'MyApp.view.sessions.Sessions',
        'MyApp.view.speakers.Speakers',
        'MyApp.view.info.Info',
        'MyApp.model.Presentation',
        'Ext.util.Filter',
        'Ext.util.Sorter'
    ],

    data: {
        content: '<h1>The Future of Application Development</h1>' +
            '<p>In the heart of Silicon Valley. April 7-9, 2015</p>' +
            '<p>' +
            'Join us for SenchaCon 2015 in the San Francisco Bay Area, April 7-9, 2015. The Santa Clara Convention Center will be alive and buzzing for 3 days as the HTML5 and JavaScript developer communities come together to collaborate and share world-class technical information. At the conference, we’ll present exciting news about our frameworks, the latest enhancements to our developer tools, updates on Sencha Space, and share concepts for a powerful new application development, testing, deployment, and management platform. The conference will also provide an awesome forum to show your own expertise, network with your peers in the Sencha community, and directly engage with the Sencha team, partners and sponsors. As with every SenchaCon, you’ll have access to more than a few epic parties — it will definitely be an event you don’t want to miss. So, save the date and join us for what promises to be an incredible technical conference.' +
            '</p>' +
            '<p>' +
            'Santa Clara is located just south of San Francisco, in the heart of Silicon Valley, and is the headquarters of many high tech companies. It is also the new home of the San Francisco 49ers football team at the state-of-the-art Levi’s Stadium.' +
            '</p>' +
            '<h2>Venue</h2>' +
            '<p>Santa Clara Convention Center<br/>' +
            '5001 Great America Parkway<br/>' +
            'Santa Clara, CA 95054<br/>' +
            '408.748.7000</p>',

        dayOfWeek: 2,
        design: true,
        develop: true,
        deploy: true,
        search: ''
    },

    stores: {
        menuitems: {
            fields: ['typename'],
            data: [{
                typename: 'app-sessions',
                glyph: '83@senchacon',
                title: 'Sessions'
            }, {
                typename: 'app-speakers',
                glyph: '115@senchacon',
                title: 'Speakers'
            }, {
                typename: 'app-info',
                glyph: '105@senchacon',
                title: 'Info'
            }]
        },

        speakers: {
            fields: ['first', 'last', {
                name: 'day',
                type: 'date',
                dateFormat: 'm/d/Y'
            }],
            data: [{
                first: 'Lee',
                last: 'Boonstra',
                day: '04/07/2015',
            }, {
                first: 'Max',
                last: 'Rahder',
                day: '04/08/2015'
            }]
        },

        sessions: {
            autoLoad: true,
            model: 'MyApp.model.Presentation',
            filters: [
                // {
                //     filterFn: function(item) {
                //         var track = item.data.track;
                //         var isTrack =
                //         (this.track.design      && (track==="Design"))  ||
                //         (this.track.develop     && (track==="Develop")) ||
                //         (this.track.deploy      && (track==="Deploy"))
                //         ;

                //         return (isTrack);

                //     },
                //     track: {
                //         design: '{design.pressed}',
                //         develop: '{develop.pressed}',
                //         deploy: '{deploy.pressed}'
                //     },
                //     id: 'track'
                // },
                // {
                //     filterFn: function(item) {
                //         return (item.contains(this.searchTerm));
                //     },
                //     searchTerm: '{search}',
                //     id: 'search'
                // },
                // {
                //     filterFn: function(item) {
                //         return (item.data.startTime.getDay() === this.dayOfWeek);

                //     },
                //     dayOfWeek: '{dayOfWeek.value}',
                //     id: 'dayOfWeek'
                // },
                // {
                //     filterFn: function(item) {
                //         return (!this.favorites || MyApp.stateProvider.get(item.data.id)) ;
                //     },
                //     favorites: '{favorites.pressed}',
                //     id: 'favorites'
                // }
            ],
            sorters: [
                {
                    property: 'startTime'
                },
                {
                    property: 'track'
                }
            ]


        }


    }
});
