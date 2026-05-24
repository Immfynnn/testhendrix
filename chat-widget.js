// Chat Widget Toggle
document.addEventListener("DOMContentLoaded", () => {
    const chatToggle = document.querySelector(".chat-widget-toggle");
    const chatBox = document.querySelector(".chat-widget-box");
    const chatClose = document.querySelector(".chat-close");
    const chatBody = document.querySelector(".chat-body");

    let isFirstOpen = true;

    // Toggle chat box on icon click
    chatToggle.addEventListener("click", () => {
        chatBox.classList.toggle("active");
        
        // Add initial greeting on first open
        if (isFirstOpen && chatBox.classList.contains("active")) {
            // Clear default message
            chatBody.innerHTML = '';
            
            // Add AI typing indicator
            const typingDiv = document.createElement("div");
            typingDiv.className = "typing-indicator";
            typingDiv.innerHTML = '<span></span><span></span><span></span>';
            chatBody.appendChild(typingDiv);
            
            // Simulate AI response
            setTimeout(() => {
                chatBody.innerHTML = '';
                const greeting = document.createElement("p");
                greeting.textContent = "Hi! How can we help you today?";
                greeting.style.alignSelf = "flex-start";
                greeting.style.backgroundColor = "#e8e8e8";
                greeting.style.color = "#333";
                chatBody.appendChild(greeting);
                chatBody.scrollTop = chatBody.scrollHeight;
                isFirstOpen = false;
            }, 1500);
        }
    });

    // Close chat box
    chatClose.addEventListener("click", (e) => {
        e.stopPropagation();
        chatBox.classList.remove("active");
    });

    // Close chat when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".chat-widget")) {
            chatBox.classList.remove("active");
        }
    });

    // Send message functionality
    const sendBtn = document.querySelector(".chat-input button");
    const input = document.querySelector(".chat-input input");

    sendBtn.addEventListener("click", () => {
        if (input.value.trim()) {
            // Create user message
            const userMsg = document.createElement("p");
            userMsg.textContent = input.value;
            userMsg.style.alignSelf = "flex-end";
            userMsg.style.backgroundColor = "#0066cc";
            userMsg.style.color = "#fff";
            userMsg.style.maxWidth = "80%";
            chatBody.appendChild(userMsg);

            // Clear input
            input.value = "";

            // Scroll to bottom
            chatBody.scrollTop = chatBody.scrollHeight;

            // Show AI typing indicator
            setTimeout(() => {
                const typingDiv = document.createElement("div");
                typingDiv.className = "typing-indicator";
                typingDiv.innerHTML = '<span></span><span></span><span></span>';
                chatBody.appendChild(typingDiv);
                chatBody.scrollTop = chatBody.scrollHeight;

                // Simulate AI response
                setTimeout(() => {
                    // Remove typing indicator
                    typingDiv.remove();
                    
                    const botMsg = document.createElement("p");
                    botMsg.textContent = "Thanks for your message! We'll get back to you soon.";
                    botMsg.style.alignSelf = "flex-start";
                    botMsg.style.backgroundColor = "#e8e8e8";
                    botMsg.style.color = "#333";
                    botMsg.style.maxWidth = "80%";
                    chatBody.appendChild(botMsg);
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 1500);
            }, 500);
        }
    });

    // Allow Enter key to send
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
});
