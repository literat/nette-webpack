import React from 'react';

export default class MyReactComponent extends React.Component
{

	nice = true;

	constructor(props)
	{
		super(props);
		this.state = {
			value: this.props.value
		};
		this.isNice = this.isNice.bind(this);
	}

	componentWillMount()
	{
		// ...
	}

	isNice()
	{
		return this.nice;
	}

	render()
	{
		var paragraph = (
			<p>{this.props.value}</p>
		);

		return (
			<div ref="content" className="content">
				{paragraph}
			</div>
		);
	}
}
