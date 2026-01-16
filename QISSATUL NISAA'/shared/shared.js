// Shared Configuration
const defaultConfig = {
  site_title: "Quranic Women",
  tagline: "Honoring the Legacy of Women in the Quran",
  home_title: "Welcome to Quranic Women",
  home_description: "Discover the inspiring stories and profound wisdom of women mentioned in the Quran. Learn about their courage, faith, and enduring legacy through interactive lessons and engaging content.",
  definition_title: "Women in the Quran",
  quiz_title: "Test Your Knowledge",
  feedback_title: "Share Your Thoughts",
  background_color: "#fce7f3",
  surface_color: "#ffffff",
  text_color: "#1e293b",
  primary_action_color: "#a855f7",
  secondary_action_color: "#ec4899",
  font_family: "system-ui",
  font_size: 16
};

// Audio Context for sound effects
let audioContext;
const correctFreq = 800;
const wrongFreq = 200;

function playSound(isCorrect) {
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = isCorrect ? correctFreq : wrongFreq;
    oscillator.type = isCorrect ? 'sine' : 'square';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (e) {
    console.log('Audio not available');
  }
}

// Create particle effect
function createParticles() {
  const colors = ['#a855f7', '#ec4899', '#c084fc', '#f9a8d4'];
  const particleCount = 15;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 10 + 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.zIndex = '1';
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
      { opacity: 0, transform: 'translate(0, 0) scale(0)' },
      { opacity: 1, transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1)` },
      { opacity: 0, transform: `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0)` }
    ], {
      duration: 1000 + Math.random() * 1000,
      easing: 'ease-out'
    });
    
    animation.onfinish = () => particle.remove();
  }
}

// Add click effect to buttons
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
    const button = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button');
    button.classList.add('pulse');
    setTimeout(() => button.classList.remove('pulse'), 300);
    
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(168, 85, 247, 0.5)';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    
    document.body.appendChild(ripple);
    
    const rippleAnimation = ripple.animate([
      { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
      { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 }
    ], {
      duration: 600,
      easing: 'ease-out'
    });
    
    rippleAnimation.onfinish = () => ripple.remove();
  }
});

// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
    menu.style.maxHeight = "0px";
  } else {
    menu.style.maxHeight = "300px";
  }
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.maxHeight = "0px";
}

// Navigation
function navigateTo(page) {
  closeMenu();
  window.location.href = `${page}.html`;
}

// Element SDK Configuration
async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'system-ui, -apple-system, sans-serif';
  const baseSize = config.font_size || defaultConfig.font_size;
  
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;
  
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.body.style.fontSize = `${baseSize}px`;
  document.body.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, #fbcfe8 25%, #fce7f3 50%, #fbcfe8 75%, ${backgroundColor} 100%)`;
  
  const allSurfaces = document.querySelectorAll('.bg-white');
  allSurfaces.forEach(el => {
    el.style.backgroundColor = surfaceColor;
  });
  
  const allText = document.querySelectorAll('p, h3, h4, label, .text-gray-700, .text-gray-800, .text-gray-600');
  allText.forEach(el => {
    if (!el.classList.contains('text-white') && !el.classList.contains('text-purple-800') && !el.classList.contains('text-pink-800')) {
      el.style.color = textColor;
    }
  });
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.surface_color || defaultConfig.surface_color,
          set: (value) => {
            config.surface_color = value;
            window.elementSdk.setConfig({ surface_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
        {
          get: () => config.primary_action_color || defaultConfig.primary_action_color,
          set: (value) => {
            config.primary_action_color = value;
            window.elementSdk.setConfig({ primary_action_color: value });
          }
        },
        {
          get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
          set: (value) => {
            config.secondary_action_color = value;
            window.elementSdk.setConfig({ secondary_action_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ["home_title", config.home_title || defaultConfig.home_title],
      ["home_description", config.home_description || defaultConfig.home_description],
      ["definition_title", config.definition_title || defaultConfig.definition_title],
      ["quiz_title", config.quiz_title || defaultConfig.quiz_title],
      ["feedback_title", config.feedback_title || defaultConfig.feedback_title]
    ])
  });
}

// Chatbot Functions (Restricted to 7 Quranic Women)
const chatbotResponses = {
  maryam: "Maryam is one of the most honored women in the Quran. 🌟 She was chosen by Allah for her purity and devotion and miraculously gave birth to Prophet Isa (Jesus). Her story is mentioned in Surah Maryam.",

  "wife of imran": "The Wife of Imran is praised in the Quran for her sincerity and devotion to Allah. 🤍 She dedicated her child to the service of Allah and raised Maryam with strong faith.",

  "wife of ibrahim": "The Wife of Prophet Ibrahim demonstrated patience and trust in Allah. 🌿 She received glad tidings of Prophet Ishaq in her old age, showing Allah’s mercy and power.",

  "mother of musa": "The Mother of Prophet Musa showed extraordinary faith in Allah. 🌊 She placed her baby in the river following Allah’s command, trusting that He would protect him.",

  asiyah: "Asiyah, the Wife of Pharaoh, is an example of steadfast faith. 💪 Despite living under tyranny, she believed in Allah and is mentioned in the Quran as a role model for believers.",

  balqis: "Queen Balqis of Sheba ruled with wisdom and intelligence. 👑 After meeting Prophet Sulaiman, she recognized the truth and submitted to Allah.",

  madyan: "The Two Women of Madyan demonstrated modesty, responsibility, and good character. 🌾 Their story highlights the importance of integrity and trust in family life.",

  default: "This chatbot only discusses the seven Quranic women featured on this website. 🌸 Please ask about Maryam, Wife of Imran, Wife of Ibrahim, Mother of Musa, Wife of Pharaoh (Asiyah), Queen of Sheba (Balqis), or the Two Women of Madyan."
};


function toggleChatbot() {
  const popup = document.getElementById('chatbotPopup');
  popup.classList.toggle('show');

  if (popup.classList.contains('show')) {
    showWelcomeMessage();
  }
}

function showWelcomeMessage() {
  const chatMessages = document.getElementById('chatMessages');

  if (chatMessages.children.length > 0) return;

  const welcome = document.createElement('div');
  welcome.className = 'message-bot';
  welcome.innerHTML = `
    <p><strong>Assalamu Alaikum 🌙</strong><br>
    I’m here to help you explore the inspiring women featured on this website.</p>
    <div class="quick-replies">
      <button onclick="sendQuick('Maryam')">Maryam</button>
      <button onclick="sendQuick('Asiyah')">Asiyah</button>
      <button onclick="sendQuick('Queen of Sheba')">Queen of Sheba</button>
    </div>
  `;
  chatMessages.appendChild(welcome);
}

const allowedTopics = [
  "maryam",
  "wife of imran",
  "wife of ibrahim",
  "mother of musa",
  "wife of pharaoh",
  "asiyah",
  "queen of sheba",
  "balqis",
  "two women of madyan",
  "madyan"
];

function isAllowedQuestion(text) {
  return allowedTopics.some(topic =>
    text.toLowerCase().includes(topic)
  );
}

function initializeChatbot() {
  const chatForm = document.getElementById('chatForm');
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const input = document.getElementById('chatInput');
      const message = input.value.trim().toLowerCase();
      if (!isAllowedQuestion(message)) {
  const warningMessage = document.createElement('div');
  warningMessage.className =
    'message-bot text-white rounded-2xl p-3 max-w-[80%] text-sm slide-in';
  warningMessage.innerHTML =
    "<p>Sorry 🌸 This chatbot only discusses the seven Quranic women featured on this website.</p>";
  chatMessages.appendChild(warningMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return;
}

      if (!message) return;
      
      const chatMessages = document.getElementById('chatMessages');
      
      const userMessage = document.createElement('div');
      userMessage.className = 'message-user text-white rounded-2xl p-3 max-w-[80%] text-sm ml-auto slide-in';
      userMessage.innerHTML = `<p>${input.value}</p>`;
      chatMessages.appendChild(userMessage);
      
      input.value = '';
      
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'message-bot text-white rounded-2xl p-3 max-w-[80%] text-sm';
      typingIndicator.innerHTML = '<p class="flex gap-1"><span class="animate-bounce">●</span><span class="animate-bounce" style="animation-delay: 0.1s">●</span><span class="animate-bounce" style="animation-delay: 0.2s">●</span></p>';
      chatMessages.appendChild(typingIndicator);
      
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      setTimeout(() => {
        typingIndicator.remove();
        
        let response = chatbotResponses.default;

// Cuba padankan dengan tokoh yang ada
for (const [key, value] of Object.entries(chatbotResponses)) {
  if (key !== "default" && message.includes(key)) {
    response = value;
    break;
  }
}

// Kalau user taip random / pendek
if (message.length < 3) {
  response =
    "😊 Assalamu Alaikum! You can ask me about the inspiring women highlighted on this website, or simply click one of the suggestions.";
}
        
        const botMessage = document.createElement('div');
        botMessage.className = 'message-bot text-white rounded-2xl p-3 max-w-[80%] text-sm slide-in';
        botMessage.innerHTML = `<p>${response}</p>`;
        chatMessages.appendChild(botMessage);
        
        playSound(true);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    });
  }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeChatbot);
} else {
  initializeChatbot();
}