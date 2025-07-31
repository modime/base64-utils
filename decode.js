#!/usr/bin/env node
// Base64 decoder with command line argument support

/**
 * Decodes a Base64 string back to original text
 * @param {string} base64Str - The Base64 encoded string to decode
 * @returns {string} - The decoded original string
 */
function decodeFromBase64(base64Str) {
  // In Node.js, use Buffer
  if (typeof Buffer !== "undefined") {
    return Buffer.from(base64Str, "base64").toString("utf8");
  }

  // In browser, use atob
  if (typeof atob !== "undefined") {
    return atob(base64Str);
  }

  throw new Error("Base64 decoding not supported in this environment");
}

// Get command line arguments
const args = process.argv.slice(2);

// Display usage if no arguments provided
if (args.length === 0) {
  console.log("Usage: node decode.js <base64-string-to-decode>");
  console.log('Example: node decode.js "SGVsbG8sIFdvcmxkIQ=="');
  process.exit(1);
}

// Join all arguments in case the Base64 string was split
const inputBase64 = args.join(" ");

try {
  const decodedString = decodeFromBase64(inputBase64);

  console.log(decodedString);
} catch (error) {
  console.error("Error:", error.message);
  console.error("Make sure you provided a valid Base64 string.");
  process.exit(1);
}

// Export the function for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = { decodeFromBase64 };
}
