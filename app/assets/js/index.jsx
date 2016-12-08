window.$ = jQuery = require("jquery");

import 'tether';
import 'bootstrap';

import '../../../js_libraries/some-js-plugin.js';

import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent/MyComponent.jsx';
import MyReactComponent from './MyReactComponent/MyReactComponent.jsx';

window.loadContent = function() {
	var value = 'Test content';

	return ReactDOM.render(<MyReactComponent
		value = {value}
	/>, document.getElementById('content-container'));
};

window.mesour = new MyComponent('test-element');

(function() {

	window.loadContent();

})();

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

import 'bootstrap/dist/css/bootstrap.css';
import '../../../js_libraries/style.css';

requireAll(require.context('../less/', true, /^\.\/.*\.less/));

requireAll(require.context('../sass/', true, /^\.\/.*\.sass$/));

requireAll(require.context('../scss/', true, /^\.\/.*\.scss$/));
