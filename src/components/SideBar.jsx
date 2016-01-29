var React = require('react');
var CreaterVDom = require('./_metod/CreaterVDom.js');

var SadeBar = React.createClass({
    render: function() {

        var dataObj = {
            baseStyle: {
                containerStyle:{
                    borderRadius: '5',
                    border: '1px solid #eee',
                    background: '#fff',
                    height: '160px',
                    padding: '0',
                    marginTop: '20px',
                    textAlign: 'center'
                },
                titleStyle:{
                    fontSize: '24',
                    fontWeight: 'normal',
                    color: '#fff',
                    height: '40px',
                    margin: '0',
                    padding: '0',
                    borderRadius: '5px 5px 0 0'
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
                    containerClass: 'col-md-12 col-lg-12',
                    titleTxt: '18',
                    contentTxt: 'Paris',
                    containerStyle:{
                        background: 'orange'
                    },
                    titleStyle:{
                        fontSize: '46px',
                        padding: '20px'
                    },
                    contentStyle:{
                        padding: '30px'
                    }
                },
                {
                    containerClass: 'col-md-12 col-lg-12',
                    titleTxt: 'New visotors',
                    contentTxt: '1.5k',
                    titleStyle:{
                        background: '#0096D0'
                    },
                    contentStyle:{
                        background: '#0096D0'
                    }

                },
                {
                    containerClass: 'col-md-12 col-lg-12',
                    titleTxt: 'Bounce Rate',
                    contentTxt: 'Average Monthly income',
                    titleStyle:{
                        background: '#63C254'
                    },
                    contentStyle:{
                        background: '#63C254'
                    }
                },
                {
                    containerClass: 'col-md-12 col-lg-12',
                    titleTxt: 'Searchs',
                    contentTxt: 'Yearly income Goal',
                    titleStyle:{
                        background: '#B28AD6'
                    },
                    contentStyle:{
                        background: '#B28AD6'
                    }
                },
                {
                    containerClass: 'col-md-12 col-lg-12',
                    titleTxt: 'Traffic',
                    contentTxt: 'Yearly income Goal',
                    titleStyle:{
                        background: '#FF4826'
                    },
                    contentStyle:{
                        background: '#FF4826'
                    }
                }
            ]
        };

        var SadeBarPanels = new CreaterVDom(dataObj);

        return (
            <div className='row'>
                {SadeBarPanels}
            </div>
        );
    }
});

module.exports = SadeBar;