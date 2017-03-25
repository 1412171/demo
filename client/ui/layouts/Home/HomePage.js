import './HomePage.html'

if (Meteor.isClient) {
    Template.carousel.rendered = function() {
        $('#carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,

        });
    }
}