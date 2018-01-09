// import _ from 'lodash'

// function component(){
// 	var element = document.createElement('div');
// 	var btn = document.createElement('button');

// 	element.innerHTML = _.join(['Hello', 'from webpack'], '');
// 	btn.innerHTML = 'Click and check console';
// 	//btn.onclick = printMe;

// 	element.appendChild(btn);
// 	return element;
// }

// document.body.appendChild(component());

// function getComponent(){
// 	return import(/* webpackChunkName: "lodash" */ 'lodash').then( _ => {
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(["Hello", "from super webpack"], ' ');
// 		return element;
// 	}).catch(err => 'An error has ocurred while loading the component')
// }

// getComponent().then(component => {
// 	document.body.appendChild(component);
// })

// async function getComponent(){
// 	var element = document.createElement('div');
// 	const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
// 	element.innerHTML = _.join(["Hello", "from super webpack with babel"], ' ');
// }

//  getComponent().then(component => {
//  	document.body.appendChild(component);
//  })

import _ from 'lodash'

function component(){
	var element = document.createElement('div');
	var btn = document.createElement('button');
	var br = document.createElement('br');

	btn.innerHTML = 'Click and check the console';
	element.innerHTML = _.join(['Hello', 'from webpack again!'], ' ');
	element.appendChild(br);
	element.appendChild(btn);

	btn.onclick = e => import(/* webpackChunkName: "print" */ './print')
	.then(module => {
		var print = module.default;
		print();
	})
	return element;
}

document.body.appendChild(component());