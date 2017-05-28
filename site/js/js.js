$(document).scroll(function(){
	var element = document.querySelector("#scroll_up")
	console.log(element)
	if(document.body.scrollTop >= 700){
		element.classList.remove("closed");
	}
	else{
		element.classList.add("closed");
	}
});