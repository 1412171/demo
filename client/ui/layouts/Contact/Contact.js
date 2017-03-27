/**
 * Created by OP on 3/27/2017.
 */
import { GoogleMaps } from 'meteor/dburles:google-maps';

if (Meteor.isClient) {
    Meteor.startup(function () {
        GoogleMaps.load({key: 'AIzaSyCn21G2vLO9n4e1bM76QYREimbgH5gqWvQ'});
    });
}
Template.Contact.onCreated(function() {
});

Template.Contact.onRendered(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
        // Add a marker to the map once it's ready
        let marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
    });
});

Template.Contact.helpers({
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(10.7632872, 106.683731),
                zoom: 15
            };
        }
    }
});