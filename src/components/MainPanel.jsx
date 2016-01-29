var React = require('react');
var CreaterVDom = require('./_metod/CreaterVDom.js');

var MainPanel = React.createClass({
    render: function() {

        var dataObj = {
            topBlockStyle:{
                background: '#0096D0',
                height: '200px',
                borderRadius: '5'
            },
            baseStyle: {
                containerStyle:{
                    background: '#484D4D',
                    height: '100px',
                    padding: '0',
                    textAlign: 'center'
                },
                titleStyle:{
                    fontSize: '24',
                    fontWeight: 'normal',
                    color: '#fff',
                    height: '40px',
                    margin: '0',
                    padding: '0'
                },
                contentStyle:{
                    fontSize: '14',
                    fontWeight: 'normal',
                    color: '#fff',
                    height: '40px',
                    margin: '0',
                    padding: '0'
                }
            },
            items: [
                {
                    containerClass: 'col-xs-4 col-ms-4 col-md-4 col-lg-4',
                    titleTxt: '20',
                    contentTxt: 'New follwers added this month'
                },
                {
                    containerClass: 'col-xs-4 col-ms-4 col-md-4 col-lg-4',
                    titleTxt: '$1250',
                    contentTxt: 'Average Monthly income'
                },
                {
                    containerClass: 'col-xs-4 col-ms-4 col-md-4 col-lg-4',
                    titleTxt: '$13865',
                    contentTxt: 'Yearly income Goal'
                }
            ]
        };

        var PanelNodes = new CreaterVDom(dataObj);

        return (
                <div className='row'>
                    <div style={dataObj.topBlockStyle}></div>
                    <div>
                        {PanelNodes}
                    </div>
                </div>
        );
    }
});

module.exports = MainPanel;