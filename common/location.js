async function main() {
	await new Promise(r => setTimeout(r, 5000));
	window.history.replaceState({}, document.title, window.location.pathname);
}
main();
