;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.FrontendRouter = factory();
  }
}(this, function() {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var frontendRouter = function () {
	function frontendRouter() {
		_classCallCheck(this, frontendRouter);
	}

	_createClass(frontendRouter, [{
		key: 'url',
		value: function url() {
			return decodeURI(window.location.hash).substr(1);
		}
	}, {
		key: 'page',
		value: function page() {
			var page = decodeURI(window.location.hash).substr(1).split('?')[0];
			if (page.slice(-1) == '/') {
				page = page.slice(0, -1);
			}
			return page;
		}
	}, {
		key: 'queryString',
		value: function queryString() {
			return decodeURI(window.location.hash).substr(1).split('?')[1];
		}
	}, {
		key: 'queryParams',
		value: function queryParams() {
			var query_params_json = {};
			var query_string = decodeURI(window.location.hash).substr(1).split('?')[1];
			if (query_string) {
				query_string.split('&').map(function (query) {
					query = query.split('=');
					query_params_json[query[0]] = query[1];
				});
			}
			return query_params_json;
		}
	}, {
		key: 'goToPage',
		value: function goToPage(page) {
			window.location.hash = page;
		}
	}]);

	return frontendRouter;
}();

exports.default = frontendRouter;
return FrontendRouter;
}));
