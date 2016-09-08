document.addEventListener('dragover', function(e){
	e.preventDefault();
	e.stopPropagation();
}, false);
document.addEventListener('drop', function(e){
	e.preventDefault();
	e.stopPropagation();
}, false);