var homeView = new Ext.define('OrientationTutorialApp.view.phone.Home', {
    extend: 'Ext.Container',
    xtype: 'homeView',
    fullscreen: true,
    id: 'homeView',
    ref:'homeView',
    alias: 'widget.homeView',
    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                {
                    xtype: 'button',
                    text: 'I am button One',
                    ref: 'btnOne',
                },
                {
                    xtype: 'button',
                    text: 'I am button Two',
                    ref: 'btnTwo'
                },
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
            {
                xtype: 'button',
                text: 'I am button Three',
                ref: 'btnThree'
            },
            {
                xtype: 'button',
                text: 'I am button Four',
                ref: 'btnFour'
            }
                ]
            },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
            {
                xtype: 'button',
                text: 'I am button Five',
                ref: 'btnFive',
                cls: 'fifth-button'
            }
                    ]
                }
        ]
    }
})