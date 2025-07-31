#!/usr/bin/env node
// Base64 encoder with command line argument support

/**
 * Encodes a string to Base64
 * @param {string} str - The string to encode
 * @returns {string} - The Base64 encoded string
 */
function encodeToBase64(str) {
  // In Node.js, use Buffer
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str, "utf8").toString("base64");
  }

  // In browser, use btoa
  if (typeof btoa !== "undefined") {
    return btoa(str);
  }

  throw new Error("Base64 encoding not supported in this environment");
}

// Get command line arguments
const args = process.argv.slice(2);

// Display usage if no arguments provided
if (args.length === 0) {
  console.log("Usage: node encode-cli.js <string-to-encode>");
  console.log('Example: node encode-cli.js "Hello, World!"');
  process.exit(1);
}

// Join all arguments in case the string contains spaces
const inputString = args.join(" ");

try {
  const encodedString = encodeToBase64(inputString);
  console.log(encodedString);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}

// Export the function for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = { encodeToBase64 };
}
