var locations=[];

var LocationMap=React.createClass({
	  getInitialState: function getInitialState() {
	    return { mapLocations:[] };
	  },
	  componentDidMount: function componentDidMount() {
	    var map = new google.maps.Map(document.getElementById('map'), {
	      center: { lat: 0, lng: 0 },
	      zoom: 3,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    });

	    // Create the search box and link it to the UI element.
	    var input = document.getElementById('mapSearchBox');
	    var searchBox = new google.maps.places.SearchBox(input);
	    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	    // Bias the SearchBox results towards current map's viewport.
	    map.addListener('bounds_changed', function () {
	      searchBox.setBounds(map.getBounds());
	    });

	    
	    var markers = [];
	    // Listen for the event fired when the user selects a prediction and retrieve
	    // more details for that place.
	    searchBox.addListener('places_changed', function () {
	      var places = searchBox.getPlaces();

	      if (places.length == 0) {
	        return;
	      }

	      // For each place, get the icon, name and location.
	      var bounds = new google.maps.LatLngBounds();
	      places.forEach(function (place) {
	        var icon = {
	          url: place.icon,
	          size: new google.maps.Size(71, 71),
	          origin: new google.maps.Point(0, 0),
	          anchor: new google.maps.Point(17, 34),
	          scaledSize: new google.maps.Size(25, 25)
	        };

	        var location=new google.maps.Marker({
	          map: map,
	          title: place.name,
	          position: place.geometry.location
	        });
	        // Create a marker for each place.
	        markers.push(location);
	        locations.push(location);

	        if (place.geometry.viewport) {
	          // Only geocodes have viewport.
	          bounds.union(place.geometry.viewport);
	        } else {
	          bounds.extend(place.geometry.location);
	        }
	      });
	      map.fitBounds(bounds);
	      this.setState({mapLocations:locations});
	    }.bind(this));

	    map.addListener('click', function(event) {
	      var location= new google.maps.Marker({
	        map: map,
	        title:"A",
	        position: event.latLng
	      });
	      locations.push(location);
	      console.log(locations);
	      this.setState({mapLocations:locations});
	    }.bind(this));
	  },
	render:function(){
		return (
		  	<div className="mapContainer">
		  		<input type="text" id="mapSearchBox" className="controls" placeHolder="Search Box"/>
				<div id="map" className="mapStyle"></div>
				<MapValues mapLocations={this.state.mapLocations}/>
			</div>
		);
	}
});


