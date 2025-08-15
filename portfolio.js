let cachedImages = null;
let cachedVideos = null;

async function fetchImages() {
  if (cachedImages) return cachedImages;

  try {
    const res = await fetch(`https://aura-snap-backend.vercel.app/api/media?bucket=${encodeURIComponent('robust-plumbing')}&prefix=images`);
    const files = await res.json();

    const mediaWithUrls = await Promise.all(
      files.map(async (file) => {
        const signedRes = await fetch(`https://aura-snap-backend.vercel.app${file.signedUrl}`);
        const signedData = await signedRes.json();
        return {
          key: file.key,
          title: file.title,
          url: signedData.signedUrl,
        };
      })
    );

    cachedImages = mediaWithUrls;
    return mediaWithUrls;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

async function fetchVideos() {
  if (cachedVideos) return cachedVideos;

  try {
    const res = await fetch(`https://aura-snap-backend.vercel.app/api/media?bucket=${encodeURIComponent('robust-plumbing')}&prefix=videos`);
    const files = await res.json();

    const mediaWithUrls = await Promise.all(
      files.map(async (file) => {
        const signedRes = await fetch(`https://aura-snap-backend.vercel.app${file.signedUrl}`);
        const signedData = await signedRes.json();
        return {
          key: file.key,
          title: file.title,
          url: signedData.signedUrl,
        };
      })
    );

    cachedVideos = mediaWithUrls;
    return mediaWithUrls;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

async function renderImages() {
  const galleryContainer = document.getElementById("imageGrid");
  galleryContainer.innerHTML = '';

  const images = await fetchImages();

  if (images.length === 0) {
   galleryContainer.innerHTML = `<div class="noData flex flex-col justify-center items-center">
    <p class="no-media">We are updating our portfolio. Please check back soon!</p>
    </div>`;
    return;
  }

  images.forEach(item => {
    galleryContainer.innerHTML += `
      <div class="grid-item">
        <a href="https://www.instagram.com/robustplumbing?igsh=MWliNnE5czNxYmF1eA==" target="_blank">
          <img src="${item.url}" alt="${item.title || 'Image'}" />
        </a>
      </div>
    `;
  });
}

async function renderVideos() {
  const galleryContainer = document.getElementById("videoGrid");
  galleryContainer.innerHTML = '';

  const videos = await fetchVideos();

  if (videos.length === 0) {
    galleryContainer.innerHTML = `<div class="noData flex flex-col justify-center items-center">
    <p class="no-media">We are updating our portfolio. Please check back soon!</p>
    </div>`;
    return;
  }

  videos.forEach(item => {
    galleryContainer.innerHTML += `
      <div class="grid-item">
        <video src="${item.url}" controls width="400" height="auto" alt="${item.title || 'Video'}"></video>
      </div>
    `;
  });
}

const btnImages = document.getElementById('btnImages');
const btnVideos = document.getElementById('btnVideos');
const imageGrid = document.getElementById('imageGrid');
const videoGrid = document.getElementById('videoGrid');

btnImages.addEventListener('click', async () => {
  btnImages.classList.add('active');
  btnVideos.classList.remove('active');
  imageGrid.style.display = 'grid';
  videoGrid.style.display = 'none';

  if (!cachedImages) {
    await renderImages();
  }
});

btnVideos.addEventListener('click', async () => {
  btnVideos.classList.add('active');
  btnImages.classList.remove('active');
  videoGrid.style.display = 'grid';
  imageGrid.style.display = 'none';

  if (!cachedVideos) {
    await renderVideos();
  }
});

// On initial load
window.addEventListener('load', async () => {
  await renderImages();
  videoGrid.style.display = 'none';
});
