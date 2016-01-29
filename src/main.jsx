var React = require('react');
var ReactDOM = require('react-dom');
var HeaderPanel = require('./components/HeaderPanel.jsx');
var SideBarPanel = require('./components/SideBar.jsx');
var MainPanel = require('./components/MainPanel.jsx');

ReactDOM.render(<HeaderPanel/>, document.getElementById('header'));

ReactDOM.render(<SideBarPanel/>, document.getElementById('sideBar'));

ReactDOM.render(<MainPanel/>, document.getElementById('main-panal-1'));