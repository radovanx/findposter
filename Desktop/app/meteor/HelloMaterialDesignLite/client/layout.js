Template.layout.curbank =function(){  
 
  var city = Session.get('city');   
  Meteor.call('getBank',city, function(err,results){   
     Session.set('bank', JSON.parse(results.content).items);        
  });  
    var parset = Session.get('bank');      
    var arrayLength = parset.length;   
    for (var i = 0; i < arrayLength; i++) {       
      var marker = new google.maps.Marker({ 
      position: new google.maps.LatLng(parset[i].location.lat, parset[i].location.lng),  
      title: parset[i].address,      
    }); 
      marker.setMap(map);   
    }; 
};

Template.layout.events({'submit form' : function(event, template) {
          event.preventDefault(); //prevent page reload           
          Session.set('city', event.target.cities.value );   
        }});
 
Template.layout.events({  
  'change .cities':function(evt, tmpl){  
    Session.set('city', tmpl.find('.cities').value ); 
  } 
}); 