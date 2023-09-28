// Define the shout function
function shout(string) {
    return string.toUpperCase();
  }
  const myString = "hello";
const shoutedString = shout(myString);
console.log(shoutedString); // This will log "HELLO"

// Define the whisper function
function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    // If the string is all lowercase
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    // If the string is all uppercase
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    // If the string is equal to "Let's have dinner together!"
    return "I would love to!";
  } else {
    // For any other case
    return "I don't understand your request.";
  }
}

  