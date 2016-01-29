var React = require('react');
var CreaterVDom = require('./_metod/CreaterVDom.js');

var HeaderPanel = React.createClass({
	render: function() {

		var dataObj = {
			baseStyle: {
				containerStyle:{
					background: '#fff',
					borderRadius: '5',
					border: '1px solid #eee',
					margin: '20px 0 20px 0'
				},
				titleStyle:{
					padding: '30px 5px 10px 10px',
					fontSize: '24',
					fontWeight: 'bold',
					color: '#000'
				},
				contentStyle:{
					padding: '5px 10px 30px 10px',
					fontSize: '14',
					fontWeight: 'normal',
					color: '#ccc'
				}
			},
			items: [
				{
					containerClass: 'col-xs-12 col-ms-4 col-md-4 col-lg-4',
					titleTxt: '20',
					contentTxt: 'New follwers added this month'
				},
				{
					containerClass: 'col-xs-12 col-ms-4 col-md-4 col-lg-4',
					titleTxt: '$1250',
					contentTxt: 'Average Monthly income'
				},
				{
					containerClass: 'col-xs-12 col-ms-4 col-md-4 col-lg-4',
					titleTxt: '$13865',
					contentTxt: 'Yearly income Goal'
				}
			]
		};

		var headerPanels = new CreaterVDom(dataObj);

		return (
			<div className='row'>
				{headerPanels}
			</div>
		);
	}
});

module.exports = HeaderPanel;
