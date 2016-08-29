var frontendRouter = {
	url: decodeURI(window.location.hash).substr(1),
	page: decodeURI(window.location.hash).substr(1).split('?')[0],
	queryString: decodeURI(window.location.hash).substr(1).split('?')[1],
	queryParams: (() => {
		var query_params_json = {};
		var query_string = decodeURI(window.location.hash).substr(1).split('?')[1];
		if(query_string) {
			query_string.split('&').map(function (query) {
				query = query.split('=');
				query_params_json[query[0]] = query[1];
			});
		}

		return query_params_json;
	})()
};