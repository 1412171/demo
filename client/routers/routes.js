import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

const UserLayout = {
    topbar: "TopBar",
    header: "Header",
    footer: "Footer",
    copyright: "Copyright"
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