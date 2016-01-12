window.addEventListener('DOMContentLoaded', fin.desktop.main.bind(null, init));

var send;

function init() {
		var bus = fin.desktop.InterApplicationBus;
		send = bus.send.bind(bus,
												 'launch-and-history',
												 'winTwo',
												 'demo');
}
												
