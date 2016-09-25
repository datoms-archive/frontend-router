export default class frontendRouter {
	url() {
		return decodeURI(window.location.hash).substr(1);
	}

	page() {
		var page = decodeURI(window.location.hash).substr(1).split('?')[0];
		if(page.slice(-1) == '/') {
			page = page.slice(0, -1);
		}
		return page;
	}

	queryString() {
		return decodeURI(window.location.hash).substr(1).split('?')[1];
	}

	queryParams() {
		var query_params_json = {};
		var query_string = decodeURI(window.location.hash).substr(1).split('?')[1];
		if(query_string) {
			query_string.split('&').map(function (query) {
				query = query.split('=');
				query_params_json[query[0]] = query[1];
			});
		}
		return query_params_json;
	}

	goToPage(page) {
		window.location.hash = page;
	}
}
