// script/Chat.js

// Function to send a message
function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value;
    input.value = '';

    // Store message in localStorage (or send it to a server)
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(msg);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    updateChatDisplay();
}

// Function to update chat display
function updateChatDisplay() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(message => {
        messagesDiv.innerHTML += `<div>${message}</div>`;
    });
}

// Call this function to update chat display on page load
window.onload = function() {
    updateChatDisplay();
};
// script/Chat.js (or Cursor.js)

// Function to handle mouse movement
document.addEventListener('mousemove', (event) => {
    const cursorPos = { x: event.clientX, y: event.clientY };
    localStorage.setItem('cursorPos', JSON.stringify(cursorPos));
    updateOtherPlayerCursor();
});

// Function to update the other player's cursor
function updateOtherPlayerCursor() {
    const cursorPos = JSON.parse(localStorage.getItem('cursorPos'));
    const otherCursor = document.getElementById('otherCursor'); // Ensure this element exists
    if (otherCursor) {
        otherCursor.style.left = cursorPos.x + 'px';
        otherCursor.style.top = cursorPos.y + 'px';
    }
}

// Initialize other player's cursor on page load
window.onload = function() {
    updateChatDisplay();
    updateOtherPlayerCursor();
};
