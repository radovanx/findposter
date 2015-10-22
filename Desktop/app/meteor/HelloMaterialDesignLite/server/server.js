Meteor.methods({ 	
		'getBank':function(city){  
			return Meteor.http.call('GET', 'https://api.csas.cz/sandbox/webapi/api/v2/places/atms?q='+city, { headers: { 'WEB-API-key':'3ce3b270-f6df-444c-8f7c-0c9ad5b67075' }});   
		}
	});