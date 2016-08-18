var homePortrait = new Ext.define('OrientationTutorialApp.view.portrait.Home', {
    extend: 'Ext.Container',
    fullscreen: true,
    id: 'homeView',
    alias: 'widget.portrait.homeView',
    ref: 'homeView',
    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'button',
                text: 'I am button One',
                ref: 'btnOne'
            },
            {
                xtype: 'spacer',
                height: 15
            },
            {
                xtype: 'button',
                text: 'I am button Two',
                ref: 'btnTwo'
            },
            {
                xtype: 'spacer',
                height: 15
            },
            {
                xtype: 'button',
                text: 'I am button Three',
                ref: 'btnThree'
            },
            {
                xtype: 'spacer',
                height: 15
            },
            {
                xtype: 'button',
                text: 'I am button Four',
                ref: 'btnFour'
            },
            {
                xtype: 'spacer',
                height: 15
            },
            {
                xtype: 'button',
                text: 'I am button Five',
                ref: 'btnFive'
            }
        ]
    }
});