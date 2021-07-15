const logo = document.querySelector('#logo');
console.log(
	`
OSE The Incandescent Grottoes Module Loaded
------------------------------






-------------------------------

`
);

logo.src = 'modules/OSE-Incandescent-Grottoes/assets/OSE-logo.webp';

// async function fixTheTokens() {
// 	const actors = game.actors.entities;
// 	for (let i = 0; i < actors.length; i++) {}
// }
Hooks.on('renderPause', (app, html, options) => {
	if (options.paused) {
		//html.find("img")[0].src = (game.settings.get("custom-pause", "chooseFile"))
		document.querySelector('#pause img').src = 'modules/OSE-Incandescent-Grottoes/assets/img/pauseRing.webp';
	}
});
// set multiple flags to a single scope
/*	expects target scope and array of objects:
{
	key: string containing the desire key name
	val: string containing the desired key value
}


*/
