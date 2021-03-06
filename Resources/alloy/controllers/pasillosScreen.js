function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "pasillosScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.inicioScreen = Ti.UI.createView({
        backgroundColor: "#9C213F",
        height: "100%",
        width: "100%",
        id: "inicioScreen"
    });
    $.__views.inicioScreen && $.addTopLevelView($.__views.inicioScreen);
    $.__views.main = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundColor: "#9C213F",
        height: "130px",
        top: "0",
        id: "main"
    });
    $.__views.inicioScreen.add($.__views.main);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: 7,
        top: 25,
        width: "65px",
        height: "65px",
        image: "/menuIcon.png",
        id: "menuBtn"
    });
    $.__views.main.add($.__views.menuBtn);
    $.__views.logoImg = Ti.UI.createImageView({
        top: 17,
        right: 130,
        image: "/unicasaIcon.png",
        id: "logoImg"
    });
    $.__views.main.add($.__views.logoImg);
    $.__views.carritoBtn = Ti.UI.createImageView({
        top: 25,
        right: 7,
        width: "65px",
        height: "65px",
        image: "/carritoIcon.png",
        id: "carritoBtn"
    });
    $.__views.main.add($.__views.carritoBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    var __alloyId61 = [];
    __alloyId61.push($.__views.list);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        width: Ti.UI.FILL,
        height: "43",
        top: "0",
        hintText: "Palabra Clave"
    });
    $.__views.list.add($.__views.search);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId61.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.atrasBtn = Ti.UI.createImageView({
        left: "10px",
        image: "/atras.png",
        id: "atrasBtn"
    });
    $.__views.categoria.add($.__views.atrasBtn);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        text: "Pasillo 1",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        left: "110px",
        id: "__alloyId62"
    });
    $.__views.categoria.add($.__views.__alloyId62);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId61.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "100px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "80px",
        text: "Galletas",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId61.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "100px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "80px",
        text: "Cereales",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId61.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "100px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "80px",
        text: "Leche en Polvo",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId61.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "100px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "80px",
        text: "Granola",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId61.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "100px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "80px",
        text: "Almíbar",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.__alloyId60 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "white",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId61,
        id: "__alloyId60"
    });
    $.__views.inicioScreen.add($.__views.__alloyId60);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;