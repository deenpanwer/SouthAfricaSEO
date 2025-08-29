// public/linkinator-embed.js
(function() {
  const container = document.getElementById('linkinator-widget-container');
  if (!container) {
    console.warn('Linkinator widget container with ID "linkinator-widget-container" not found.');
    return;
  }

  const iframe = document.createElement('iframe');
  const initialUrl = container.dataset.initialUrl || '';
  const widgetSrc = `${window.location.origin}/linkinator/embed/widget?initialUrl=${encodeURIComponent(initialUrl)}`;

  iframe.src = widgetSrc;
  iframe.width = container.dataset.width || '100%';
  iframe.height = container.dataset.height || '600px';
  iframe.frameBorder = '0';
  iframe.scrolling = 'auto'; // Allow scrolling within the iframe
  iframe.allowFullscreen = true;
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%'; // Make iframe fill its container

  // Optional: Add a loading spinner before iframe loads
  const loadingDiv = document.createElement('div');
  loadingDiv.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100%; font-family: sans-serif; color: #E67E22;">Loading Linkinator...</div>';
  loadingDiv.style.width = '100%';
  loadingDiv.style.height = '100%';
  loadingDiv.style.display = 'flex';
  loadingDiv.style.justifyContent = 'center';
  loadingDiv.style.alignItems = 'center';

  container.appendChild(loadingDiv);

  iframe.onload = () => {
    loadingDiv.remove(); // Remove loading spinner once iframe content loads
  };

  container.appendChild(iframe);

  // Inject embed-specific CSS into the parent document if needed (less ideal for isolation)
  // For better isolation, the widget page itself should load its CSS.
  // If you need to ensure the parent page has some base styles for the container:
  // const style = document.createElement('style');
  // style.textContent = `
  //   #linkinator-widget-container {
  //     /* Add any necessary base styles for the container here */
  //   }
  // `;
  // document.head.appendChild(style);

})();
