chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'removeLinkedInAds') {
    console.log('Removing LinkedIn Ads...');
    chrome.tabs.executeScript({
      file: 'linkedin.js',
    });
  }
});