module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "56M5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: searchQuery,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: leftMenu,
    1: setLeftMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);

  const toggle = () => setIsOpen(!isOpen);

  const changeSearch = event => {
    setQuery(event.target.value);
  };

  const search = event => {
    if (searchQuery.length > 0) searchWithoutEvent();
    event.preventDefault();
  };

  const searchWithoutEvent = () => {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:8080/goods?q=' + searchQuery).then(function (response) {
      response.json().then(data => {
        props.handleSearch(data);
        setPage(1);
      });
    });
  };

  const handleLeftMenu = event => {
    const q = event.currentTarget.textContent;
    setLeftMenu(true);
    setQuery(q);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (leftMenu) {
      setLeftMenu(false);
      searchWithoutEvent();
    }
  }, [searchQuery]);

  const nextPage = event => {
    let url = 'http://localhost:8080/goods?page=' + (page + 1);
    if (searchQuery.length > 0) url += "&q=" + searchQuery;
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url).then(function (response) {
      response.json().then(data => {
        props.handleNextPage(data);
        setPage(page + 1);
      });
    });
  };

  return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    color: "dark",
    dark: true,
    expand: "md"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    href: "/"
  }, "Price Hunter"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggle
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "ml-auto",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/components/"
  }, "Components")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "https://github.com/uuganbold/clearance-goods"
  }, "GitHub")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    nav: true,
    caret: true
  }, "Options"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Option 1"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Option 2"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    divider: true
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Reset")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3"
  }, __jsx("h1", {
    className: "my-4"
  }, "Shop Name"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    onClick: handleLeftMenu,
    "data-query": 'Kids'
  }, "Halloween"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    onClick: handleLeftMenu,
    "data-query": 'Women'
  }, "Shoes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    onClick: handleLeftMenu,
    "data-query": 'Women'
  }, "Women"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    onClick: handleLeftMenu,
    "data-query": 'Men'
  }, "Men"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    onClick: handleLeftMenu,
    "data-query": 'Kids'
  }, "Kids"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    onClick: handleLeftMenu,
    "data-query": 'Kids'
  }, "Clothing"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    onClick: handleLeftMenu,
    "data-query": 'Kids'
  }, "Beauty"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "9"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "py-2 my-2"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    md: 6,
    sm: 4
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: search
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: searchQuery,
    onChange: changeSearch
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "prepend"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Search"))))))), props.children, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "my-2"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    style: {
      textAlign: 'center'
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      width: 500
    },
    color: "light",
    onClick: nextPage
  }, "Next Page")))))), __jsx("footer", {
    className: "py-5 bg-dark"
  }, __jsx("div", {
    className: "container"
  }, __jsx("p", {
    className: "m-0 text-center text-white"
  }, "Copyright \xA9 Your Website 2019"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("56M5");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q4sD");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shop_homepage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("apDj");
/* harmony import */ var _shop_homepage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shop_homepage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pffc");
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Index = props => {
  const manipulateImage = gs => {
    /*
        for (let g of gs) {
          if (g.picture.indexOf("images.ulta.com")) {
                   let lastS = g.picture.lastIndexOf("/");
                   const str2 = g.picture.substring(lastS);
                   g.picture = 'https://res.cloudinary.com/daremighty/image/upload/w_500,h_500,c_scale/ulta/' + str2
          }
        }
        */
    return gs;
  };

  const imgStyle = {
    //flex: 1,
    //aspectRatio: 1.5,
    maxWidth: 500,
    maxHeight: 350 //resizeMode: 'contain'

  };
  const gg = manipulateImage(props.goods);
  const {
    0: goods,
    1: setGoods
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(gg);

  const handleSearch = data => {
    data = manipulateImage(data);
    setGoods(data);
  };

  const handleNextPage = data => {
    data = manipulateImage(data);
    let newGoods = goods.concat(data);
    setGoods(newGoods);
  };

  return __jsx(_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleSearch: handleSearch,
    handleNextPage: handleNextPage
  }, __jsx(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_6___default.a, null, goods.map(g => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: 4,
    md: 6,
    sm: 4,
    key: g.id
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
    top: true,
    src: g.picture,
    style: imgStyle
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
    tag: "h4"
  }, __jsx("a", {
    href: g.link
  }, g.name)), __jsx("h5", {
    style: {
      color: 'red'
    }
  }, "$", g.price), __jsx("strike", {
    style: {
      color: 'grey'
    }
  }, "$", g.regPrice), "\xA0\xA0", __jsx("span", null, g.seller.name)))))));
};

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('http://localhost:8080/goods');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    goods: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "apDj":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pffc":
/***/ (function(module, exports) {

module.exports = require("reactstrap/lib/Row");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ })

/******/ });