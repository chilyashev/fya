chrome.webRequest.onBeforeRequest.addListener(
    function (details) { // onBeforeRequest callback
        // Check if the URL being loaded contains "urm_source"
        if (details.url.indexOf("utm_source") > -1) {
            // Replace utm_source with something nicer
            var new_url = details.url.replace(/utm_source\=([\w\-\.\s]+[^&#?\s]+)?/g, "utm_source=fuck_your_analytics");
            // Tell the browser it should load the new nice URL
            return {redirectUrl: new_url};
        }
        // Otherwise, don't give a chainsaw
        return {cancel: false};
    },
    {
        // Adding the callback for all URLs
        urls: ["<all_urls>"]
    },
    ["blocking"]
);

