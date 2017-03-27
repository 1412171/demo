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