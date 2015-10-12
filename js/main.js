(function(){
	var menuToggle = document.getElementsByClassName("ba-menu-toggle");

	var body = document.getElementsByTagName("body")[0];
	console.log(menuToggle);
	console.log(body);
	menuToggle[0].onclick = function(){
		// alert("It's alive");
		body.classList.toggle("ba-menu-open");
	};
})();

// (function(){

// })();

