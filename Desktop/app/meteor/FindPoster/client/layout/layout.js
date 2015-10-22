Template.layout.curfilm =function(){  
 
  var film = Session.get('film');    
  Meteor.call('getPoster',film, function(err,results){    
     Session.set('poster', JSON.parse(results.content));        
 
  }) 
  	 var jsontest =  Session.get('poster');       
	 return new Handlebars.SafeString ('<h1>'+jsontest.results[0].original_title+'</h1><img src="https://image.tmdb.org/t/p/w185/'+jsontest.results[0].poster_path+'" alt="poster">');  
   }; 
  
Template.layout.events({'submit form' : function(event, template) {
          event.preventDefault(); //prevent page reload            
          var element = $("#wrapper"); 
    	 	if(!element.hasClass("app")){
         	element.addClass("app"); 
    	 } 
          Session.set('film', event.target.films.value );    
        }}); 