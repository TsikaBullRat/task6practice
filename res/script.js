var data;

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=262o5a05pMUDSV2uzo5EwQ',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4298e3da2emshf39b08d3bbe2f3cp1ff22ajsn4b60a977651a',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});