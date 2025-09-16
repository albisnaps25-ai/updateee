document.getElementById("year").textContent = new Date().getFullYear();

// SVG icons for like, comment, and donate
const heartIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;

const commentIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;

const giftIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20,12 20,22 4,22 4,12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="m5,7 3,-4a2,2 0 0,1 4,0v4h-4z"></path><path d="m19,7 -3,-4a2,2 0 0,0 -4,0v4h4z"></path></svg>`;

// New SVG icons
const clipboardIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

const chatBubbleIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;

const rightArrowIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7,7 17,7 17,17"></polyline></svg>`;

// Photo and Reel Data
const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    likes: 124,
    comments: 32
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    likes: 89,
    comments: 21
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    likes: 156,
    comments: 43
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    likes: 201,
    comments: 56
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    likes: 167,
    comments: 38
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    likes: 142,
    comments: 29
  },
];

const reels = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    likes: 215,
    comments: 47
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    likes: 178,
    comments: 32
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-a-girl-blowing-a-bubble-gum-at-an-amusement-park-1226-large.mp4',
    likes: 243,
    comments: 61
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    likes: 192,
    comments: 41
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    likes: 165,
    comments: 28
  },
  {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-a-girl-blowing-a-bubble-gum-at-an-amusement-park-1226-large.mp4',
    likes: 203,
    comments: 52
  },
];

// Initialize photo and reel grids with Instagram-style post cards
const photosGrid = document.getElementById('photosGrid');
photos.forEach(photo => {
  const postCard = createPostCard(photo, 'photo');
  photosGrid.appendChild(postCard);
});

const reelsGrid = document.getElementById('reelsGrid');
reels.forEach(reel => {
  const postCard = createPostCard(reel, 'reel');
  reelsGrid.appendChild(postCard);
});

// Function to create Instagram-style post card
function createPostCard(item, type) {
  const postCard = document.createElement('div');
  postCard.className = 'post-card';

  // Image container
  const imageWrap = document.createElement('div');
  imageWrap.className = 'image-wrap';

  // Main image
  const img = document.createElement('img');
  img.className = 'post-image';
  img.src = type === 'photo' ? item.url : item.thumbnail;
  img.alt = type === 'photo' ? `Photo ${item.id}` : `Reel ${item.id}`;
  img.setAttribute('crossorigin', 'anonymous');
  img.setAttribute('data-image', type === 'photo' ? item.url : item.thumbnail);

  // Header with profile info
  const imageHeader = document.createElement('div');
  imageHeader.className = 'image-header';
  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  const avatarImg = document.createElement('img');
  avatarImg.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80';
  avatarImg.alt = 'Profile avatar';
  avatar.appendChild(avatarImg);
  const username = document.createElement('div');
  username.className = 'username';
  username.textContent = '@sofia123';
  imageHeader.appendChild(avatar);
  imageHeader.appendChild(username);

  imageWrap.appendChild(img);
  imageWrap.appendChild(imageHeader);

  // Footer with stats and download button
  const postFooter = document.createElement('div');
  postFooter.className = 'post-footer';

  // Create stats container with SVG buttons
  const stats = document.createElement('div');
  stats.className = 'post-stats';

  // Like button with SVG
  const likeBtn = document.createElement('button');
  likeBtn.className = 'stat-btn';
  likeBtn.innerHTML = `${heartIcon} <span class="count">${item.likes}</span>`;
  likeBtn.onclick = (e) => {
    e.stopPropagation();
    likeBtn.classList.toggle('liked');
    const countSpan = likeBtn.querySelector('.count');
    if (likeBtn.classList.contains('liked')) {
      countSpan.textContent = parseInt(countSpan.textContent) + 1;
      // Update the SVG to filled heart
      likeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> <span class="count">${countSpan.textContent}</span>`;
    } else {
      countSpan.textContent = parseInt(countSpan.textContent) - 1;
      // Revert to outline heart
      likeBtn.innerHTML = `${heartIcon} <span class="count">${countSpan.textContent}</span>`;
    }
  };

  // Comment button with SVG
  const commentBtn = document.createElement('button');
  commentBtn.className = 'stat-btn';
  commentBtn.innerHTML = `${commentIcon} ${item.comments}`;
  commentBtn.onclick = (e) => {
    e.stopPropagation();
    alert('Comments functionality coming soon!');
  };

  // Donate button with SVG
  const donateBtn = document.createElement('button');
  donateBtn.className = 'stat-btn';
  donateBtn.innerHTML = `${giftIcon} Donate`;
  donateBtn.onclick = (e) => {
    e.stopPropagation();
    document.getElementById('openDonate').click();
  };

  stats.appendChild(likeBtn);
  stats.appendChild(commentBtn);
  stats.appendChild(donateBtn);

  const downloadBtn = document.createElement('button');
  downloadBtn.className = 'download-btn';
  downloadBtn.textContent = 'Download';
  downloadBtn.addEventListener('click', async (e) => {
    e.stopPropagation(); // Prevent opening the viewer
    const src = img.getAttribute('data-image') || img.src;
    try {
      const res = await fetch(src, { mode: 'cors' });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = type === 'photo' ? `photo-${item.id}.jpg` : `reel-${item.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(src, '_blank');
    }
  });

  postFooter.appendChild(stats);
  postFooter.appendChild(downloadBtn);

  postCard.appendChild(imageWrap);
  postCard.appendChild(postFooter);

  // Add click event to open viewer
  postCard.addEventListener('click', (e) => {
    if (e.target !== downloadBtn && !e.target.closest('.stat-btn')) {
      if (type === 'photo') {
        openPhotoViewer(item.id);
      } else {
        openReelViewer(item.id);
      }
    }
  });

  return postCard;
}

// Photo Viewer Functions
function openPhotoViewer(id) {
  const modal = document.getElementById('photoViewerModal');
  const feed = document.getElementById('photoFeed');
  feed.innerHTML = '';

  photos.forEach(photo => {
    const view = document.createElement('div');
    view.className = 'post-view';

    // Add username overlay
    const usernameOverlay = document.createElement('div');
    usernameOverlay.className = 'media-username';
    usernameOverlay.textContent = '@sofia123';
    view.appendChild(usernameOverlay);

    const img = document.createElement('img');
    img.className = 'post-media';
    img.src = photo.url;
    img.onload = () => {
      img.style.width = 'auto';
      img.style.height = 'auto';
    };
    view.appendChild(img);

    const actions = document.createElement('div');
    actions.className = 'post-actions';

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    likeBtn.onclick = (e) => {
      e.stopPropagation();
      likeBtn.classList.toggle('liked');
      if (likeBtn.classList.contains('liked')) {
        likeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
      } else {
        likeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
      }
    };

    const donateBtn = document.createElement('button');
    donateBtn.className = 'donate-btn';
    donateBtn.textContent = 'Donate';
    donateBtn.onclick = (e) => {
      e.stopPropagation();
      document.getElementById('openDonate').click();
    };

    actions.appendChild(likeBtn);
    actions.appendChild(donateBtn);

    view.appendChild(actions);
    feed.appendChild(view);
  });

  modal.style.display = 'flex';
  feed.scrollTo(0, (id - 1) * window.innerHeight);
}

function closePhotoViewer() {
  document.getElementById('photoViewerModal').style.display = 'none';
}

// Reel Viewer Functions (UPDATED with wrapper, z-index, responsive, and auto-hide overlay)
function openReelViewer(id) {
  const modal = document.getElementById('reelViewerModal');
  const feed = document.getElementById('reelFeed');
  feed.innerHTML = '';

  reels.forEach(reel => {
    const view = document.createElement('div');
    view.className = 'post-view';

    // Username overlay (stays at view level)
    const usernameOverlay = document.createElement('div');
    usernameOverlay.className = 'media-username';
    usernameOverlay.textContent = '@sofia123';
    view.appendChild(usernameOverlay);

    // Wrapper around video and overlay (key change)
    const mediaWrap = document.createElement('div');
    mediaWrap.className = 'media-wrap';
    view.appendChild(mediaWrap);

    // Video element
    const video = document.createElement('video');
    video.className = 'post-media';
    video.src = reel.url;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    mediaWrap.appendChild(video);

    // Overlay actions positioned inside wrapper
    const actions = document.createElement('div');
    actions.className = 'post-actions overlay';

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    likeBtn.onclick = (e) => {
      e.stopPropagation();
      likeBtn.classList.toggle('liked');
      if (likeBtn.classList.contains('liked')) {
        likeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
      } else {
        likeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
      }
    };

    const donateBtn = document.createElement('button');
    donateBtn.className = 'donate-btn';
    donateBtn.textContent = 'Donate';
    donateBtn.onclick = (e) => {
      e.stopPropagation();
      document.getElementById('openDonate').click();
    };

    actions.appendChild(likeBtn);
    actions.appendChild(donateBtn);
    mediaWrap.appendChild(actions);

    // Optional UX: hide overlay during playback to avoid blocking
    video.addEventListener('play', () => actions.classList.add('overlay-hidden'));
    video.addEventListener('pause', () => actions.classList.remove('overlay-hidden'));
    video.addEventListener('ended', () => actions.classList.remove('overlay-hidden'));

    feed.appendChild(view);
  });

  modal.style.display = 'flex';
  feed.scrollTo(0, (id - 1) * window.innerHeight);
}

function closeReelViewer() {
  document.getElementById('reelViewerModal').style.display = 'none';
}

// New functions for menu and subscription modal
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');

  // Close menu when clicking outside
  if (menu.classList.contains('active')) {
    document.addEventListener('click', closeMenuOnClickOutside);
  } else {
    document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

function openSubscribeModal() {
  document.getElementById('subscriptionModal').style.display = 'flex';
}

function closeSubscribeModal() {
  document.getElementById('subscriptionModal').style.display = 'none';
}

function subscribe() {
  const selectedPlan = document.querySelector('input[name="plan"]:checked').value;
  alert(`You have subscribed to the ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan! Thank you!`);
  closeSubscribeModal();
}

function switchTab(tabName) {
  // Close menu when a tab is selected
  document.querySelector('.menu').classList.remove('active');
  document.querySelector('.hamburger').classList.remove('active');

  // Hide all content
  document.querySelectorAll('.content').forEach(content => {
    content.classList.remove('active');
  });

  // Remove active class from all tabs
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.classList.remove('active');
  });

  // Activate the selected tab
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Show the selected content
  if (tabName === 'photos') {
    document.getElementById('photos-content').classList.add('active');
  } else if (tabName === 'reels') {
    document.getElementById('reels-content').classList.add('active');
  } else if (tabName === 'exclusive') {
    document.getElementById('exclusive-content').classList.add('active');
  } else if (tabName === 'chat') {
    document.getElementById("openChat").click();
  } else {
    alert(`The ${tabName} section is coming soon!`);
  }
}

/* Tabs */
document.querySelectorAll(".tab-btn").forEach(b => {
  b.onclick = () => {
    document.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
    document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
    b.classList.add("active");
    switchTab(b.dataset.tab);
  };
});

/* Chat */
const chatScreen = document.getElementById("chatScreen");
const openChat = document.getElementById("openChat");
const backToMain = document.getElementById("backToMain");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendMessage = document.getElementById("sendMessage");

function addMessage(text, sender = "creator") {
  const wrapper = document.createElement("div");
  wrapper.className = "msg-wrapper";
  if (sender === "creator") wrapper.style.alignItems = "flex-start";

  const msg = document.createElement("div");
  msg.className = "msg " + (sender === "creator" ? "creator-msg" : "user-msg");

  // Replace emojis with SVG icons in text
  let formattedText = text;
  if (sender === "creator") {
    formattedText = formattedText.replace("💬", chatBubbleIcon);
    formattedText = formattedText.replace("👉", rightArrowIcon);
    msg.innerHTML = formattedText;
  } else {
    msg.textContent = text;
  }

  wrapper.appendChild(msg);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  return wrapper;
}

function addSeen(wrapper) {
  const seen = document.createElement("div");
  seen.className = "seen";
  seen.textContent = "Seen";
  wrapper.appendChild(seen);
}

function showTyping() {
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.textContent = "Sofia is typing...";
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return typing;
}

openChat.onclick = () => {
  // Hide main header when chat is opened
  document.querySelector('.header').style.display = 'none';
  chatScreen.style.display = "flex";
  document.querySelector(".main-screen").style.display = "none";
  chatMessages.innerHTML = "";
  setTimeout(() => addMessage("Welcome to my chat! 💬", "creator"), 400);
};

backToMain.onclick = () => {
  // Show main header again when returning from chat
  document.querySelector('.header').style.display = 'flex';
  chatScreen.style.display = "none";
  document.querySelector(".main-screen").style.display = "block";
};

sendMessage.onclick = () => {
  const text = chatInput.value.trim();
  if (text) {
    const wrapper = addMessage(text, "user");
    chatInput.value = "";
    setTimeout(() => {
      addSeen(wrapper);
      const typingIndicator = showTyping();
      setTimeout(() => {
        typingIndicator.remove();
        const reply = addMessage("Check this out 👉 https://mywebsite.com", "creator");
        reply.querySelector(".msg").innerHTML = 'Check this out ' + rightArrowIcon + ' https://mywebsite.com';
      }, 3000);
    }, 2000);
  }
};

chatInput.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage.click(); });

/* Donation Modals */
const donateModal = document.getElementById("chooseMethodModal");
const btcDonateModal = document.getElementById("btcDonateModal");
const openDonate = document.getElementById("openDonate");
const closeDonate = document.getElementById("closeDonate");
const openBtcDonate = document.getElementById("openBtcDonate");
const closeBtcDonate = document.getElementById("closeBtcDonate");
const backToDonate = document.getElementById("backToDonate");
const copyBtcAddress = document.getElementById("copyBtcAddress");
const donateBtcNow = document.getElementById("donateBtcNow");
const btcAddress = document.getElementById("btcAddress").textContent.trim();

openDonate.onclick = () => donateModal.style.display = "flex";
closeDonate.onclick = () => donateModal.style.display = "none";

openBtcDonate.onclick = () => {
  donateModal.style.display = "none";
  btcDonateModal.style.display = "flex";
};

closeBtcDonate.onclick = () => btcDonateModal.style.display = "none";

backToDonate.onclick = () => {
  btcDonateModal.style.display = "none";
  donateModal.style.display = "flex";
};

copyBtcAddress.onclick = () => {
  navigator.clipboard.writeText(btcAddress).then(() => showStatus("Address copied! " + clipboardIcon, "success")).catch(() => showStatus("Failed to copy", "error"));
};

donateBtcNow.onclick = () => {
  window.open("https://www.blockchain.com/explorer/addresses/btc/" + btcAddress, "_blank");
  btcDonateModal.style.display = "none";
};

function showStatus(msg, type) {
  const s = document.getElementById("statusMessage");
  s.innerHTML = msg;
  s.className = "status-message status-" + type;
  s.style.display = "block";
  setTimeout(() => s.style.display = "none", 3000);
}

/* Stories */
const profilePic = document.getElementById("profilePic");
const storyModal = document.getElementById("storyModal");
const storyContainer = document.getElementById("storyContainer");
const storyCloseBtn = document.getElementById("storyCloseBtn");
const prevStoryBtn = document.getElementById("prevStoryBtn");
const nextStoryBtn = document.getElementById("nextStoryBtn");
const storyImages = document.querySelectorAll(".story-image");
const progressBars = document.getElementById("progressBars");
const storyCount = document.getElementById("storyCount");
const replyInput = document.getElementById("replyInput");
const sendStoryBtn = document.getElementById("sendStoryBtn");
const likeStoryBtn = document.getElementById("likeStoryBtn");

let currentStory = 0, timer, total = storyImages.length;
const duration = 10000;
let isLiked = false;

function createBars() {
  progressBars.innerHTML = "";
  storyImages.forEach(() => {
    let b = document.createElement("div");
    b.className = "progress-bar";
    let f = document.createElement("div");
    f.className = "progress-bar-fill";
    b.appendChild(f);
    progressBars.appendChild(b);
  });
}

function showStory(i) {
  clearTimeout(timer);
  storyImages.forEach(im => im.classList.remove("active"));
  storyImages[i].classList.add("active");
  let fills = document.querySelectorAll(".progress-bar-fill");
  fills.forEach((f, j) => {
    f.style.transition = "none";
    f.style.width = j < i ? "100%" : "0%";
  });
  void progressBars.offsetWidth;
  fills[i].style.transition = `width ${duration}ms linear`;
  requestAnimationFrame(() => fills[i].style.width = "100%");
  storyCount.textContent = `${i + 1}/${total}`;
  currentStory = i;
  isLiked = false;
  likeStoryBtn.classList.remove("liked");
  likeStoryBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  updateNav();
}

function updateNav() {
  prevStoryBtn.classList.toggle("visible", currentStory > 0);
  nextStoryBtn.classList.toggle("visible", currentStory < total - 1);
}

function start() {
  timer = setTimeout(() => {
    if (currentStory < total - 1) {
      showStory(currentStory + 1);
      start();
    } else closeStory();
  }, duration);
}

function closeStory() {
  clearTimeout(timer);
  storyModal.style.display = "none";
  currentStory = 0;
  replyInput.value = "";
  sendStoryBtn.classList.remove("visible");
}

profilePic.onclick = () => {
  storyModal.style.display = "flex";
  createBars();
  showStory(0);
  start();
};

storyCloseBtn.onclick = closeStory;

replyInput.oninput = () => sendStoryBtn.classList.toggle("visible", !!replyInput.value.trim());

sendStoryBtn.onclick = () => {
  if (replyInput.value.trim()) {
    alert("Reply: " + replyInput.value);
    replyInput.value = "";
    sendStoryBtn.classList.remove("visible");
  }
};

likeStoryBtn.onclick = () => {
  isLiked = !isLiked;
  likeStoryBtn.classList.toggle("liked", isLiked);
  if (isLiked) {
    likeStoryBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  } else {
    likeStoryBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  }
};

prevStoryBtn.onclick = () => {
  if (currentStory > 0) {
    clearTimeout(timer);
    showStory(currentStory - 1);
    start();
  }
};

nextStoryBtn.onclick = () => {
  if (currentStory < total - 1) {
    clearTimeout(timer);
    showStory(currentStory + 1);
    start();
  } else closeStory();
};
