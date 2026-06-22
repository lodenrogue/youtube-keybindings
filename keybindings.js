function addBinding(key, command) {
    window.addEventListener("keydown", (event) => {
	if (event.target.contentEditable === 'true') return;
	if(event.key === key) command();
    });
}
