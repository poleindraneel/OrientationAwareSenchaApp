//Ext.define('OrientationTutorialApp.controller.main', {
//    extend: 'Ext.app.Controller',
//    //views: ['Home'],
//    config: {
//        refs: {
//            mainView: '#mainView', //Needs hash in front of it
//            homeView: '[ref="homeView"]'
//        },
//        control: {
//            'viewport': {
//                orientationchange: 'onOrientationChange'
//            }
//        },
//        onOrientationChange: function (viewport, orientation, width, height) {

//        },
//        showTab: function (config) {
//            var change = {};
//            Ext.apply(change, config);
//            var orient = window.orientation;
//            var viewItemId = change.id;
//            var newClassName = 'portrait' + (Ext.os.is('Phone') ? '-phone' : '-tablet');
//            switch (orient) {
//                case 0:
//                    if (viewItemId.indexOf('portrait') == -1) {
//                        viewItemId = "portrait." + viewItemId;
//                    }
//                    change.id = viewItemId;
//                    Ext.getBody().addCls(newClassName);
//                    break;
//                default:
//                    if (viewItemId.indexOf('portrait') != 1) {
//                        var i = viewItemId.indexOf(".");
//                        viewItemId = viewItemId.substring(i + 1, viewItemId.length);
//                    };
//                    change.id = viewItemId;
//                    Ext.getBody().removeCls(newClassName);
//                    break;
//            }
//            var view = this.getMainView().getComponent(change.id);
//            if (!view) {
//                console.log('change.id is : ' + change.id);
//                view = Ext.widget(change.id);
//                this.getMainView().add([view]);
//            }
//        }
//    }
//});