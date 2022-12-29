const captureScreenButton = document.querySelector('#src-btn');
      previewModal = document.querySelector('.src-preview');
      closeButton = document.querySelector('#close-btn');

const captureScreen = async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({preferCurrentTab: true});
        const video = document.createElement('video');

        video.addEventListener('loadedmetadata', () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            video.play();

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            stream.getVideoTracks()[0].stop();
            
            previewModal.querySelector('img').src = canvas.toDataURL();
            previewModal.classList.add('show');
        });
        video.srcObject = stream;
    } catch (error) {
        console.log(error);
    }
};

closeButton.addEventListener('click', () => previewModal.classList.toggle('show'));

captureScreenButton.addEventListener('click', captureScreen);