var MapControl = React.createClass({
	displayName: 'MapControl',

	render: function () {
		return React.createElement(LocationMap, null);
	}
});

ReactDOM.render(React.createElement(MapControl, null), document.getElementById('content'));