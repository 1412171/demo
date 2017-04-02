/**
 * Created by Administrator on 31/03/2017.
 */
import './Detail.html'
Template.Detail.onCreated(function () {
});

Template.Detail.onDestroyed(function () {
});

Template.Detail.onRendered(function () {
    Template.instance().$('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        pauseOnHover:true,
        asNavFor: '.slider-nav2'
    });
    Template.instance().$('.slider-nav2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for2',
        dots: true,
        centerMode: true,
        speed:1000,
        focusOnSelect: true
    });
    Template.instance().$('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        pauseOnHover:true,
        asNavFor: '.slider-nav1'
    });
    Template.instance().$('.slider-nav1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for1',
        dots: true,
        centerMode: true,
        speed:1000,
        focusOnSelect: true
    });
});

Template.Detail.helpers({
});

Template.Detail.events({

});





