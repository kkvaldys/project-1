function controlsTheAnimation() {
  const coversGalleries = document.querySelectorAll('.covers-container');
  coversGalleries.forEach(coversGallery => {
    const coversAnimations = document.querySelectorAll('.covers-item');
    const rect = coversGallery.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    coversAnimations.forEach(coversAnimation => {
      if (visibleHeight / viewportHeight >= 0.2) {
        if (
          window
            .getComputedStyle(coversAnimation)
            .getPropertyValue('animation-play-state') === 'paused'
        ) {
          coversAnimation.style.animationPlayState = 'running';
        }
      } else {
        if (
          window
            .getComputedStyle(coversAnimation)
            .getPropertyValue('animation-play-state') === 'running'
        ) {
          coversAnimation.style.animationPlayState = 'paused';
        }
      }
    });
  });
}
window.addEventListener('scroll', controlsTheAnimation);