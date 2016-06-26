var MapValues=React.createClass({
	render: function()
	{
		var indents = [];
		for (var i = 0; i < this.props.mapLocations.length; i++) {
		  
		  indents.push(<div className='location' id={i} key={i}><div className="locationName"></div><div className="delete">{i}</div></div>);
		}
		return (
		   <div className="route">
		    {indents}
		   </div>
		);
	}
});