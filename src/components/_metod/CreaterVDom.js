var React = require('react');
var InfoPanel = require('../InfoPanel.jsx');
var extend = require('./extend.js');

var CreaterVDom = function( structure ) {
    
    var panelsArr =  structure.items.map(function(item, index){

        for(var keys in  structure.baseStyle) {
            if(item[keys]) {
                item[keys] = extend( structure.baseStyle[keys],item[keys]);
                console.log( item[keys]);
            } else {
                item[keys] =  structure.baseStyle[keys];
            }
        }

        return (
            <InfoPanel  data={item} key={index}></InfoPanel>
        )
    });

    return panelsArr;
};

module.exports = CreaterVDom;