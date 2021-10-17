const resolver = "https://ipns-link.herokuapp.com/ipns/";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: details.url.replace(/^https?:\/\/(?:[^/]+\/ipns\/)?/, resolver)};
    },
    {
        urls: [
            "*://*.ipns/*",
            "*://*/ipns/*"
        ],
    },
    ["blocking"]
);