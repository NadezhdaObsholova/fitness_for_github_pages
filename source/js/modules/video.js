const playVideo = () => {
  const playBtn = document.querySelector('.about__preview-button');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const preview = document.querySelector('.about__video-preview');
      if (preview) {
        preview.style.display = 'none';
      }

      const videoIframe = document.querySelector('.about__video-source');
      const src = videoIframe.src;
      videoIframe.src = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;

      playBtn.style.display = 'none';
    });
  }
};

export {playVideo};
