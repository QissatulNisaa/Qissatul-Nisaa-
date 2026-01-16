// Feedback Functions
document.getElementById('feedbackForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('feedbackName').value.trim();
  const email = document.getElementById('feedbackEmail').value.trim();
  const message = document.getElementById('feedbackMessage').value.trim();
  
  if (!name || !email || !message) {
    showFeedbackStatus('Please fill in all fields.', false);
    return;
  }
  
  const feedback = {
    name: name,
    email: email,
    message: message,
    date: new Date().toLocaleString()
  };
  
  let feedbackList = JSON.parse(localStorage.getItem('feedbackList') || '[]');
  feedbackList.unshift(feedback);
  feedbackList = feedbackList.slice(0, 20);
  localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  
  showFeedbackStatus('Thank you for your feedback! 💜', true);
  document.getElementById('feedbackForm').reset();
  displayFeedback();
  
  createParticles();
});

function showFeedbackStatus(message, isSuccess) {
  const statusDiv = document.getElementById('feedbackStatus');
  statusDiv.className = `mt-4 p-4 rounded-lg ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
  statusDiv.textContent = message;
  statusDiv.classList.remove('hidden');
  
  setTimeout(() => {
    statusDiv.classList.add('hidden');
  }, 3000);
}

function displayFeedback() {
  const feedbackList = JSON.parse(localStorage.getItem('feedbackList') || '[]');
  const container = document.getElementById('feedbackList');
  
  if (feedbackList.length === 0) {
    container.innerHTML = '<p class="text-gray-600 text-center">No feedback yet. Be the first to share! 💬</p>';
    return;
  }
  
  container.innerHTML = feedbackList.slice(0, 10).map(entry => `
    <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
      <div class="flex justify-between items-start mb-2">
        <p class="font-bold text-gray-800">${entry.name}</p>
        <p class="text-xs text-gray-600">${entry.date}</p>
      </div>
      <p class="text-sm text-gray-700 mb-1">${entry.email}</p>
      <p class="text-sm text-gray-800 mt-2">${entry.message}</p>
    </div>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  displayFeedback();
  createParticles();
});
