var frontendRouter;

frontendRouter.url = function() {
	return decodeURI(window.location.hash).substr(1);
}

frontendRouter.page = function() {
	var page = decodeURI(window.location.hash).substr(1).split('?')[0];
	if(page.slice(-1) == '/') {
		page = page.slice(0, -1);
	}
	return page;
}

frontendRouter.queryString = function() {
	return decodeURI(window.location.hash).substr(1).split('?')[1];
}

frontendRouter.queryParams = function() {
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

frontendRouter.goToPage = function(page) {
	window.location.hash = page;
}

export default frontendRouter;
