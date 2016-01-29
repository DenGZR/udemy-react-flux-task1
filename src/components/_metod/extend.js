var extend = function (a,b) {
    var c = {},
        extObj = {},
        key;
    //debugger;
    for (key in a) {
        console.log(a[key]);
        if (a.hasOwnProperty(key)) {
            c[key] = a[key];
        }
    }
    extObj = Object.assign(c,b);
    c = {};
    return extObj;
};

module.exports = extend;