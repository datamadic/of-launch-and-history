window.addEventListener('DOMContentLoaded', fin.desktop.main.bind(null, init));

function init() {
		var bus = fin.desktop.InterApplicationBus,
				list = document.getElementById('list');

		bus.subscribe('launch-and-history',
									'winOne',
									'demo',
									function(data){
											console.log('yup');
											list.innerHTML = list.innerHTML + '<li>'+ data + '</li>';
									});
}
