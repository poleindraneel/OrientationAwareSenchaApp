/*
This is the entry point of the application.
*/
Ext.application({
    name: "OrientationTutorialApp",
    requires: ['Ext.MessageBox'],
    views: ['Main'],
    controllers: ['main'],
    profiles: ['Phone', 'Tablet'],
    launch: function () {
        Ext.fly('appLoadingIndicator').destroy();
    },
});

Ext.define('OrientationTutorialApp.controller.main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView: '[ref="mainView"]',
            homeView: '[ref="homeView"]'
        },
        control: {
            'viewport': {
                orientationchange: 'onOrientationChange'
            }
        }
    },
        onOrientationChange: function (viewport, orientation, width, height) {

            var viewItemId = this.getMainView().getActiveItem().getId();
            Ext.getCmp(viewItemId).destroy();
            this.showTab({ id: viewItemId, orientation: "true" });
        },

        showTab: function (config) {
            var change = {};
            Ext.apply(change, config);
            var orient = window.orientation;
            var viewItemId = change.id;
            var newClassName = 'portrait' + (Ext.os.is('Phone') ? '-phone' : '-tablet');
            switch (orient) {
                case 0:
                    if (viewItemId.indexOf('portrait') == -1) {
                        viewItemId = "portrait." + viewItemId;
                    }
                    change.id = viewItemId;
                    Ext.getBody().addCls(newClassName);
                    break;
                default:
                    if (viewItemId.indexOf('portrait') != 1) {
                        var i = viewItemId.indexOf(".");
                        viewItemId = viewItemId.substring(i + 1, viewItemId.length);
                    };
                    change.id = viewItemId;
                    Ext.getBody().removeCls(newClassName);
                    break;
            }
            var view = this.getMainView().getComponent(change.id);
            if (!view) {
                console.log('change.id is : ' + change.id);
                view = Ext.widget(change.id);
                this.getMainView().add([view]);
            }
        }
});

/*
This is the phone profile.
It checks if the device is phone.
If yes, it launches a function that adds phone view to the viewport
*/
var profilePhone = new Ext.define('OrientationTutorialApp.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',
        //controllers: ['OrientationTutorialApp.controller.Main']
    },

    isActive: function () {
        console.log("Phone view is " + Ext.os.is('Phone'));
        return Ext.os.is('Phone');
    },
    launch: function () {
        Ext.getBody().addCls('profile-' + this.getName());
        Ext.Viewport.add(Ext.create('OrientationTutorialApp.view.Main', { fullscreen: true }));
        this.showTab({ id: "homeView" });
    },
    showTab: function (config) {
        var change = {};
        Ext.apply(change, config);
        var orient = window.orientation;
        var viewItemId = change.id;
        var newClassName = 'portrait' + (Ext.os.is('Phone') ? '-phone' : '-tablet');
        switch (orient) {
            case 0:
                if (viewItemId.indexOf('portrait') == -1) {
                    viewItemId = "portrait." + viewItemId;
                }
                change.id = viewItemId;
                Ext.getBody().addCls(newClassName);
                break;
            default:
                if (viewItemId.indexOf('portrait') != 1) {
                    var i = viewItemId.indexOf(".");
                    viewItemId = viewItemId.substring(i + 1, viewItemId.length);
                };
                change.id = viewItemId;
                Ext.getBody().removeCls(newClassName);
                break;
        }
        var view = this.getApplication().getController("OrientationTutorialApp.controller.main").getMainView().getComponent(change.id);
        if (!view) {
            console.log('change.id is : ' + change.id);
            view = Ext.widget(change.id);
            this.getApplication().getController("OrientationTutorialApp.controller.main").getMainView().add([view]);

        }
    }
});




