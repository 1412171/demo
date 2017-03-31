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
                Link: "Category",
                BgColor: 'white',
                Top5: [
                    {
                        image: '/images/Decor/bang_2_mat.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/bang_ghim_30_40_cm.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/bang_ghim_40_60_cm.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/dinh_ghim.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/flower_flag.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/gia_treo_1.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/gia_treo_2.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/gia_treo_3.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/gia_treo_4.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/ke_go.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/kep_go.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/kep_go_6_loai.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/kep_go_cau_vong.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/khung_khong_lo.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/khung_map.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/khung_om.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/khung_to_bu.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/lucy.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/party_flag_set.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/rainy_set.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Decor/travel_flag.jpg',
                        link: 'Detail',
                    }
                ]
            },
            {
                Name: "LIGHT",
                Link: "Category",
                BgColor: 'Detailefefef',
                Top5: [
                    {
                        image: '/images/Lights/ball_bling.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Lights/bling_bling.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Lights/chips_bling.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Lights/letter_bling.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Lights/star_bling.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Lights/tiny_bling.jpg',
                        link: 'Detail',
                    }
                ]

            },
            {
                Name: "NOTEBOOKS",
                Link: "Category",
                BgColor: 'white',
                Top5: [
                    {
                        image: '/images/Notebooks/lucky_planer.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Notebooks/note_for.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Notebooks/tui_chong_tham_lucky_planer.jpg',
                        link: 'Detail',
                    }
                ]
            },
            {
                Name: "STATIONERY",
                Link: "Category",
                BgColor: 'Detailefefef',
                Top5: [
                    {
                        image: '/images/Notebooks/lucky_planer.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Notebooks/note_for.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Notebooks/tui_chong_tham_lucky_planer.jpg',
                        link: 'Detail',
                    }
                ]
            },
            {
                Name: "STICKER",
                Link: "Category",
                BgColor: 'white',
                Top5: [
                    {
                        image: '/images/Notebooks/lucky_planer.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Notebooks/note_for.jpg',
                        link: 'Detail',
                    },
                    {
                        image: '/images/Notebooks/tui_chong_tham_lucky_planer.jpg',
                        link: 'Detail',
                    }
                ]
            },
        ]
    }
});

Template.HomePage.events({

});