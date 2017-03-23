import { ReactiveDict } from 'meteor/reactive-dict';
import {FlowRouter} from 'meteor/kadira:flow-router';

Template.TopBar.onCreated(function () {});

Template.TopBar.onRendered(function () {});

Template.TopBar.onDestroyed(function () {});

Template.TopBar.helpers({
    isLogin: function() {
        return false;
    }
});

Template.TopBar.events({});
