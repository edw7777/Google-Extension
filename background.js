chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('linkedin.com/feed/')) {
    chrome.tabs.executeScript(tabId, {file: 'linkedin.js'});
  }
});