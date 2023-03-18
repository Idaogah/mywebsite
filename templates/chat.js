// chatbot in javascript begins here
const openai = require('openai');

// Set your OpenAI API key
openai.api_key = "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";

// Define a function that takes in a user prompt and returns an OpenAI-generated response
async function generateResponse(prompt) {
  const response = await openai.Completion.create({
    engine: "text-davinci-002",
    prompt: prompt,
    max_tokens: 60,
    temperature: 0.5,
  });
  return response.choices[0].text;
}

// Get the chatbox element
const chatbox = document.getElementById("chatbox");

// Get the chat button element
const chatButton = document.getElementById("chat-button");

// Add event listener to chat button to toggle chatbox visibility
chatButton.addEventListener("click", () => {
  chatbox.classList.toggle("hidden");
});

// Get the chat input and submit button elements
const chatInput = document.getElementById("chat-input");
const chatSubmit = document.getElementById("chat-submit");

// Add event listener to chat submit button to send user message and receive chatbot response
chatSubmit.addEventListener("click", () => {
  // Get user message from chat input
  const userMessage = chatInput.value;
  
  // Clear chat input
  chatInput.value = "";
  
  // Display user message in chat
  displayMessage(userMessage, true);
  
  // Send user message to chatbot and receive response
  generateResponse(userMessage).then(response => {
    // Display chatbot response in chat
    displayMessage(response, false);
  });
});

// Define function to display message in chat
function displayMessage(message, isUser) {
  const chatMessages = document.getElementById("chat-messages");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  if (isUser) {
    messageElement.classList.add("user");
  } else {
    messageElement.classList.add("chatbot");
  }
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
}
