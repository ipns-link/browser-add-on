const ipfs_gw = "https://cf-ipfs.com/ipfs/"
const ipns_gw= "https://cf-ipfs.com/ipns/"
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.search(/^https?:\/\/[^/]+\/ipfs\//)+1 && details.method == 'GET') {
        return {redirectUrl: details.url.replace(/^https?:\/\/[^/]+\/ipfs\//, ipfs_gw)}
      }
      return {redirectUrl: destination = details.url.replace(/^https?:\/\/(?:[^/]+\/ipns\/)?/, ipns_gw)}
    },
    {
        urls: [
            "*://*.ipns/*",
            "*://*/ipns/*",
            "*://*/ipfs/*"
        ],
    },
    ["blocking"]
);