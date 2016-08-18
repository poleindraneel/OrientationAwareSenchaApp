var Main = new Ext.define('OrientationTutorialApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainView',
    fullscreen: true,
    //layout: 'hbox',
    ref: 'mainView',
    config: {
        id: 'mainView', //this id can be used for getter setter object in controller refs
        items: [
    {
        xtype: 'toolbar',
        docked: 'top',
        cls: 'toolbarUI',
        title: 'Welcome to the tutorial on Orientation Aware Apps',
    }

        ]
    }
});