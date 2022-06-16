/* jshint esversion: 8 */

async function main() {
	await new Promise(r => setTimeout(r, 5000));

	window.history.replaceState({}, document.title, mylocation);
}

console.log("Script invoked with " + document.currentScript.getAttribute('location'));

var mylocation = document.currentScript.getAttribute('location');

if (mylocation == null) {
	mylocation = window.location.pathname;
}

main();
