import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

const UserLayout = {
    topbar: "TopBar",
    header: "Header",
    footer: "Footer",
    copyright: "Copyright",
    sidebar: "SideBar",
    customersection: "CustomerSection"
};

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("MainLayout", {page: "NotFound"});
    }
};

FlowRouter.route('/', {
    name: "HomePage",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "HomePage"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});

FlowRouter.route('/detail', {
    name: "Detail",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Detail"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});

FlowRouter.route('/orders', {
    name: "Orders",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Orders"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});

FlowRouter.route('/orderhistory', {
    name: "OrderHistory",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "OrderHistory"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});

FlowRouter.route('/wishlist', {
    name: "Wishlist",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Wishlist"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});

FlowRouter.route('/account', {
    name: "Account",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Account"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});

FlowRouter.route('/register', {
    name: "Register",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Register"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});

FlowRouter.route('/category', {
    name: "Category",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Category"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});

FlowRouter.route('/admin', {
    name: "Admin",
    action: function() {
        BlazeLayout.render("Admin");
    }
});


FlowRouter.route('/contact', {
    name: "Contact",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Contact"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});
FlowRouter.route('/shoppingcart', {
    name: "ShoppingCart",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "ShoppingCart"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});
FlowRouter.route('/checkout', {
    name: "Checkout1",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Checkout1"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});
FlowRouter.route('/checkout2', {
    name: "Checkout2",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Checkout2"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});
FlowRouter.route('/checkout3', {
    name: "Checkout3",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Checkout3"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});
FlowRouter.route('/checkout4', {
    name: "Checkout4",
    action: function() {
        let curLayout = _.extend(UserLayout, {
            page: "Checkout4"
        });
        BlazeLayout.render("MainLayout", curLayout);
    }
});