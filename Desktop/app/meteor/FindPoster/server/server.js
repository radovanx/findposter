Meteor.methods({ 'getPoster' : function(film){      
		return Meteor.http.call('GET', 'http://api.themoviedb.org/3/search/movie?api_key=829c3bf896f53b172497fb7c31a024ab&query='+film+'');}      		 
});