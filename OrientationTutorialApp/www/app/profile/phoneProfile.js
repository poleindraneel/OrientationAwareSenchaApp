///*
//This is the phone profile.
//It checks if the device is phone.
//If yes, it launches a function that adds phone view to the viewport
//*/
//var profilePhone = new Ext.define('OrientationTutorialApp.profile.Phone', {
//    extend: 'Ext.app.Profile',

//    config: {
//        name: 'Phone',
//        //controllers: ['OrientationTutorialApp.controller.Main']
//    },

//    isActive: function () {
//        console.log("Phone view is " + Ext.os.is('Phone'));
//        return Ext.os.is('Phone');
//    },
//    launch: function () {
//        Ext.Viewport.add(Ext.create('OrientationTutorialApp.view.Main', { fullscreen: true }));
//       this.getApplication().getController('OrientationTutorialApp.controller.Main').showTab({ id: "home" });
       
//    }
//});