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
                        image: '/images/Decor/bang_2_mat.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/bang_ghim_30_40_cm.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/bang_ghim_40_60_cm.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/dinh_ghim.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/flower_flag.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/gia_treo_1.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/gia_treo_2.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/gia_treo_3.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/gia_treo_4.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/ke_go.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/kep_go.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/kep_go_6_loai.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/kep_go_cau_vong.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/khung_khong_lo.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/khung_map.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/khung_om.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/khung_to_bu.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/lucy.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/party_flag_set.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/rainy_set.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Decor/travel_flag.jpg',
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
                        image: '/images/Lights/ball_bling.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Lights/bling_bling.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Lights/chips_bling.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Lights/letter_bling.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Lights/star_bling.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Lights/tiny_bling.jpg',
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
                        image: '/images/Notebooks/lucky_planer.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Notebooks/note_for.jpg',
                        link: '#',
                    },
                    {
                        image: '/images/Notebooks/tui_chong_tham_lucky_planer.jpg',
                        link: '#',
                    }
                ]
            },
        ]
    }
});

Template.HomePage.events({

});