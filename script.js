document.getElementById("greetingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var name = document.getElementById("name").value;
    var greetingMessage = document.getElementById("greetingMessage");
  
    greetingMessage.textContent = "Hello, " + name + "!"; // Display greeting message
  });