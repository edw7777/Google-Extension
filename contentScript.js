// Create a new button element
const button = document.createElement('button');
button.innerHTML = 'Remove LinkedIn Ads';

// Add a click event listener to the button
button.addEventListener('click', () => {
  chrome.runtime.sendMessage({ message: 'removeLinkedInAds' });
});

// Find the container element to add the button to
const container = document.querySelector('.global-nav__content .global-nav__primary-items');
if (container) {
  // Add the button to the container
  container.appendChild(button);
}