(function() {
  var introContainer = document.getElementById('video-container');
  var introVideo = document.getElementById('intro-video');
  var landingContainer = document.getElementById('container-landing');

  introVideo.addEventListener('ended', function() {
    introContainer.classList.add('fade-out');

    setTimeout(function() {
      introContainer.classList.add('remove-intro');
      landingContainer.classList.add('fade-in');
    }, 2000);
  });
})();
