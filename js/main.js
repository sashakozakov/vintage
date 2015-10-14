(function(){
	var menuToggle = document.querySelectorAll(".ba-menu-toggle"),
	body = document.getElementsByTagName("body")[0],
	overlay = document.querySelectorAll(".ba-overlay");

	menuToggle[0].onclick = function(){
		if (body.className === "ba-menu-open"){
			body.className = "";
		}
		else{
		body.className = "ba-menu-open";
		};
		// console.log(body.className);
	overlay[0].onclick = function(){
			body.className = "";
	}
};

// (function(){

})();

