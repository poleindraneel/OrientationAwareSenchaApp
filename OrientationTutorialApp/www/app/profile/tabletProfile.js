/*
This is the tablet profile.
It checks if the device is tablet.
If yes, it launches a function that adds tablet view to the viewport
*/
var profileTablet = new Ext.define('OrientationTutorialApp.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        //views: ['Home']
    },

    isActive: function () {
        console.log("Tablet view is " + Ext.os.is('Tablet'));
        return Ext.os.is('Tablet');
    },
    launch: function () {
        Ext.ClassManager.setAlias('OrientationTutorialApp.view.tablet.Home', 'widget.homeView');
        Ext.Viewport.add(Ext.create('OrientationTutorialApp.view.Main', { fullscreen: true }));
    }
});
