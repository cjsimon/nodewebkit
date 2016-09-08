document.onkeydown = getKey;
function getKey(e) {
	e = e || window.event;
	if(e.keyCode == '116') {
		console.log("Refreshing");
		location.reload();
	}
}