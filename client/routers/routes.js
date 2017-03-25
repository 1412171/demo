import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

const UserLayout = {
    topbar: "TopBar",
    header: "Header",
    footer: "Footer"
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
