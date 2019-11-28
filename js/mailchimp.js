window.openPopup = function () {
    window.dojoRequire(["mojo/signup-forms/Loader"], function (L) {
        L.start({
            baseUrl: "mc.us20.list-manage.com",
            uuid: "5fdbf6fc6a599de484fd89feb",
            lid: "af69fe4917",
            uniqueMethods: true
        });
    });
};