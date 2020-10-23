"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var node = document.createElement('h1');
            node.append('Header');
            document.body.appendChild(node);
        }
        return Header;
    }());
    Components.Header = Header;
    var Body = /** @class */ (function () {
        function Body() {
            var node = document.createElement('h1');
            node.append('Body');
            document.body.appendChild(node);
        }
        return Body;
    }());
    Components.Body = Body;
    var Footer = /** @class */ (function () {
        function Footer() {
            var node = document.createElement('h1');
            node.append('Footer');
            document.body.appendChild(node);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Body();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
