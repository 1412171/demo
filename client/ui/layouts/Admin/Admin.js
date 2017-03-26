/**
 * Created by OP on 3/26/2017.
 */
import './Admin.html'

function builtColumn() {

    $('#container-column').highcharts({

        chart: {
            type: 'column'
        },

        title: {
            text: 'Weekly Revenue'
        },

        subtitle: {
            text: 'Source: Group9'
        },

        credits: {
            enabled: false
        },

        xAxis: {
            categories: [
                'Mon',
                'Tus',
                'Wed',
                'Thur',
                'Fir',
                'Sat',
                'Sun',
            ]
        },

        yAxis: {
            min: 0,
            title: {
                text: '$'
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },

        series: [{
            name: 'Group 9',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

        }]
    });
}

Template.Admin.onCreated(function () {
});

Template.Admin.onDestroyed(function () {
});

Template.Admin.onRendered(function () {
    builtColumn();
});

Template.Admin.helpers({
    getListProducts: function () {
        return {
            Name: "DECOR",
            Link: "#",
            BgColor: 'white',
            Top5: [
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                },
                {
                    image: '/images/product1.jpg',
                    link: '#',
                }
            ]

        }
    }
});

Template.Admin.events({

});
