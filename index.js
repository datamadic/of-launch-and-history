window.addEventListener('DOMContentLoaded', fin.desktop.main.bind(null, init));

var launchAppOne, launchAppTwo;

function init() {
		launchAppOne = function () {
				new fin.desktop.Window({
						name: 'winOne',
						url: './app-one.html',
						autoShow: true
				});
		}

		launchAppTwo = function () {
				new fin.desktop.Window({
						name: 'winTwo',
						url: './app-two.html',
						autoShow: true
				});
		}
}
