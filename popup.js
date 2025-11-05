const popup   = document.getElementById('popup-overlay');
const titleEl = document.getElementById('popup-title');
const detailEl= document.getElementById('popup-details');
const closeEl = document.querySelector('.popup-close');

const projectDetails = {
  "Tyndall": {
    details: [
      "Built a production level platform which allows intraday traders to analyze their overall performance.",
      "Implemented JWT authentication for secure login with OTP mechanism and proper email/password validation and password hashing using Bcrypt.",
      "Utilized Redis for caching, real-time data processing, and improving application performance by reducing database load and enabling fast data retrieval."
    ],
    github: "https://github.com/shiv-rane/tyndall"
  },
  "Auto trading microservice": {
    details: [
      "Developed an automated trading bot based on RSI pullback strategy.",
      "Integrated Binance WebSocket for real-time candle data.",
      "Designed resilient WebSocket infrastructure with heartbeat (ping/pong) and auto-reconnect to maintain persistent data flow even under network drops",
      "Implemented stateful position tracking (entry price, P&L, position type) and exposed it via secured REST APIs for frontend and analytics consumption with minimum latency of 25ms.",
    
    ],
    github: "https://github.com/shiv-rane/autotrade"
  },
  "Secure User Authentication API": {
    details: [
      "Production-grade OTP authentication API using Spring Boot and JWT RS256.",
      "Integrated Redis for token caching and rate limiting.",
      "RSA keypair signing, BCrypt password hashing.",
      "Designed for stateless auth and integration-ready for microservices.",
    ],
    github: "https://github.com/shiv-rane/USER_AUTH_API"
  },
  "AI based email reply generator": {
    details: [
      "AI-driven backend tool for automatic professional email replies.",
      "Uses Gemini API for context-aware response generation.",
      "Added payment gateway integration for premium access.",
    ],
    github: "https://github.com/shiv-rane/AI_email_reply_generator"
  }
};

document.querySelectorAll('.projects button').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('div');
    const heading = card.querySelector('h5').textContent.trim();
    const popupLink = document.getElementById('popup-github');

    const project = projectDetails[heading];

    if (project) {
      titleEl.textContent = heading;
      detailEl.innerHTML = project.details.map(d => `<li>${d}</li>`).join("");
      popupLink.href = project.github;
      popupLink.style.display = "inline-block";
    } else {
      titleEl.textContent = heading;
      detailEl.innerHTML = "<li>No details available</li>";
      popupLink.style.display = "none";
    }

    popup.style.display = 'flex';
  });
});

closeEl.addEventListener('click', () => popup.style.display = 'none');
