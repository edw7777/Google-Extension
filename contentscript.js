chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'removePromotedPosts') {
    removePromotedPosts();
    sendResponse({message: 'Promoted posts removed'});
  }
});