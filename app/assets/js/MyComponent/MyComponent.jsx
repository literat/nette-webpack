export default class MyComponent
{

	id;

	constructor(id)
	{
		this.id = id;
	}

	render()
	{
		jQuery('#' + this.id).text('Hello word!');
	}

}