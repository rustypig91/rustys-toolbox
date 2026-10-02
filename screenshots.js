const screenshotDialog = document.querySelector('.screenshot-dialog');
const enlargedImage = screenshotDialog.querySelector('img');

screenshotDialog.querySelector('.screenshot-close').addEventListener('click', () => {
  screenshotDialog.close();
});
screenshotDialog.addEventListener('click', (event) => {
  if (event.target === screenshotDialog) screenshotDialog.close();
});
screenshotDialog.addEventListener('close', () => {
  enlargedImage.removeAttribute('src');
});

// Hide failed previews while keeping screenshot URLs directly in the HTML.
document.querySelectorAll('.project-screenshot').forEach((figure) => {
  const image = figure.querySelector('img');
  const hideFailedPreview = () => {
    figure.hidden = true;
    const heroScreenshots = figure.closest('.hero-screenshots');
    if (heroScreenshots) {
      heroScreenshots.hidden = [...heroScreenshots.querySelectorAll('.project-screenshot')]
        .every((preview) => preview.hidden);
    }
  };
  figure.querySelector('.screenshot-trigger').addEventListener('click', () => {
    if (!image.getAttribute('src')) return;
    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.alt = image.alt;
    screenshotDialog.showModal();
  });
  image.addEventListener('error', hideFailedPreview);
  if (image.hasAttribute('src') && image.complete && image.naturalWidth === 0) {
    hideFailedPreview();
  }
});
