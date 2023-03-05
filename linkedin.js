const removeAds = () => {
  // Find all elements with the class "ad-banner-container" and remove them
  const adBanners = document.querySelectorAll('.ad-banner-container');
  adBanners.forEach(adBanner => adBanner.remove());

  // Find all elements with the class "feed-shared-ad-container" and remove them
  const sharedAds = document.querySelectorAll('.feed-shared-ad-container');
  sharedAds.forEach(sharedAd => sharedAd.remove());

  console.log('LinkedIn Ads removed');
}

// Wait for the page to finish loading before removing the ads
window.addEventListener('load', removeAds);