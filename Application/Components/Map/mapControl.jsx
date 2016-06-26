var MapControl=React.createClass({
	render:function()
	{
		return (
			<LocationMap/>
		);
	}
});


ReactDOM.render(<MapControl/>,document.getElementById('content'));