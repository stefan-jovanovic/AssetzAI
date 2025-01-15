const keywords = [
    "AI-Powered Investments", "Real Estate Analytics", "Market Forecasting", 
    "Property Insights", "Investment Strategies", "Smart Portfolio", 
    "Risk Management", "Predictive Modeling", "Real-Time Data", 
    "Automated Alerts", "Investment Opportunities", "Data-Driven Decisions", 
    "Market Trends", "Asset Management"
];
const keywordContainer = document.querySelector('.keyword-container');

function createKeyword(keyword) {
    const span = document.createElement('span');
    span.className = 'keyword';
    span.textContent = keyword;
    
    const randomTop = Math.random() * 20 + (Math.random() > 0.5 ? 80 : 0); // Only around the edges
    const randomLeft = Math.random() * 20 + (Math.random() > 0.5 ? 80 : 0);
    
    span.style.top = randomTop + '%';
    span.style.left = randomLeft + '%';
    keywordContainer.appendChild(span);

    setTimeout(() => {
        keywordContainer.removeChild(span);
    }, 10000); // Remove the keyword after its animation duration
}

let keywordIndex = 0;
function showNextKeyword() {
    const currentKeywords = keywordContainer.children.length;
    if (currentKeywords < 3) {
        if (keywordIndex >= keywords.length) {
            keywordIndex = 0;
        }
        createKeyword(keywords[keywordIndex]);
        keywordIndex++;
    }
}

setInterval(showNextKeyword, 4000); // Adjust the rate at which keywords appear

const countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
