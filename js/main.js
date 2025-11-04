/* =====================
   CRAWFORD SOLAR POWER
   MAIN JS CONTROLS
===================== */

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .media-item').forEach(section => {
  section.classList.add('fade');
  observer.observe(section);
});

// Background video optimization
const bgVideo = document.querySelector('.background-video');
if (bgVideo) {
  bgVideo.playbackRate = 0.8;  // slower, cinematic feel
  bgVideo.addEventListener('error', () => {
    console.warn("Background video failed to load.");
  });
}

// Pause other videos when one starts (avoid overlapping sound)
const allVideos = document.querySelectorAll('video');
allVideos.forEach(video => {
  video.addEventListener('play', function() {
    allVideos.forEach(v => {
      if (v !== video) v.pause();
    });
  });
});

// Light hover motion
document.querySelectorAll('.media-item').forEach(item => {
  item.addEventListener('mouseenter', () => item.classList.add('hovered'));
  item.addEventListener('mouseleave', () => item.classList.remove('hovered'));
});
