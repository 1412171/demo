import './HomePage.html'

/*
 * Template _Carousel
 */
Template._Carousel.onCreated(function () {
});

Template._Carousel.onDestroyed(function () {
});

Template._Carousel.onRendered(function () {
    Template.instance().$('#carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

Template._Carousel.helpers({
});

Template._Carousel.events({

});


/*
* Template HomePage
*/
Template.HomePage.onCreated(function () {
});

Template.HomePage.onDestroyed(function () {
});

Template.HomePage.onRendered(function () {
});

Template.HomePage.helpers({
    getListProducts: function () {
        return [
            {
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
                    }
                ]

            },
            {
                Name: "LIGHT",
                Link: "#",
                BgColor: '#efefef',
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
                    }
                ]

            },
            {
                Name: "NOTEBOOKS",
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
                    }
                ]

            },
        ]
    }
});

Template.HomePage.events({

});