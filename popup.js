const popup   = document.getElementById('popup-overlay');
const titleEl = document.getElementById('popup-title');
const detailEl= document.getElementById('popup-details');
const closeEl = document.querySelector('.popup-close');

const projectDetails = {
  "Tyndall": [
    "Built a production level platform which allows intraday traders to analyze their overall performance.",
    "Implemented JWT authentication for secure login with OTP mechanism and proper email/password validation and password hashing using Bcrypt.",
    "Utilized Redis for caching, real-time data processing, and improving application performance by reducing database load and enabling fast data retrieval.",
    "GitHub: https://github.com/shiv-rane/tyndall"
  ],
  "Auto trading microservice": [
    "Developed an automated trading bot based on RSI pullback strategy.",
    "Integrated Binance WebSocket for real-time candle data.",
    "Designed resilient WebSocket infrastructure with heartbeat (ping/pong) and auto-reconnect to maintain persistent data flow even under network drops",
    "Implemented stateful position tracking (entry price, P&L, position type) and exposed it via secured REST APIs for frontend and analytics consumption with minimum latency of 25ms.",
    "GitHub: https://github.com/shiv-rane/autotrade"
  ],
  "Secure User Authentication API": [
    "Production-grade OTP authentication API using Spring Boot and JWT RS256.",
    "Integrated Redis for token caching and rate limiting.",
    "RSA keypair signing, BCrypt password hashing.",
    "Designed for stateless auth and integration-ready for microservices.",
    "GitHub: https://github.com/shiv-rane/USER_AUTH_API"
  ],
  "AI based email reply generator": [
    "AI-driven backend tool for automatic professional email replies.",
    "Uses Gemini API for context-aware response generation.",
    "Added payment gateway integration for premium access.",
    "GitHub: https://github.com/shiv-rane/AI_email_reply_generator"
  ]
};

document.querySelectorAll('.projects button').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('div');
    const heading = card.querySelector('h5').textContent;

    titleEl.textContent = heading;
    const points = projectDetails[heading] || ["No details available."];

    detailEl.innerHTML = `<ul>${points.map(p => `<li>${p}</li>`).join('')}</ul>`;
    popup.style.display = 'flex';
  });
});

closeEl.addEventListener('click', () => popup.style.display = 'none');
