document.querySelectorAll('*').forEach(function(element){
	element.addEventListener('contextmenu', function(ev) { 
		ev.preventDefault();
		return false;
	});
});