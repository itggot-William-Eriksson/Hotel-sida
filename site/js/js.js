$(document).scroll(function(){
	var element = document.querySelector("#test")
	console.log(element)
	if(document.body.scrollTop >= 700){
		element.classList.remove("closed");
	}
	else{
		element.classList.add("closed");
	}
});