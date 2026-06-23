function navigateHome() {
    window.location.href = "https://youtube.com";
}

function closeLiveChat() {
    for (const iframe of document.querySelectorAll('iframe')) {
	try {
	    const closeButton = iframe.contentDocument?.querySelector('#close-button > yt-button-renderer > yt-button-shape > button');

	    if (closeButton) {
		closeButton.click();
		break;
	    }
	} catch (e) {
	    console.log("Error trying to get close button", e);
	}
    }
}

function navigateToSubscriptions() {
    window.location.href = "https://www.youtube.com/feed/subscriptions";
}
