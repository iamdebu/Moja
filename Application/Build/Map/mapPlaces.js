var MapValues = React.createClass({
	displayName: "MapValues",

	render: function () {
		var indents = [];
		for (var i = 0; i < this.props.mapLocations.length; i++) {

			indents.push(React.createElement(
				"div",
				{ className: "location", id: i, key: i },
				React.createElement("div", { className: "locationName" }),
				React.createElement(
					"div",
					{ className: "delete" },
					i
				)
			));
		}
		return React.createElement(
			"div",
			{ className: "route" },
			indents
		);
	}
});