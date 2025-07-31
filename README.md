# base64-utils

Simple JavaScript utilities for encoding and decoding strings to/from Base64. Works both as command-line tools and as importable modules.

## Features

- ✅ Encode strings to Base64
- ✅ Decode Base64 strings back to original text
- ✅ Command-line interface
- ✅ Module exports for programmatic use
- ✅ Cross-platform compatibility (Node.js and browser)
- ✅ Error handling for invalid Base64 strings

## Installation

Clone this repository:

```bash
git clone https://github.com/modime/base64-utils.git
cd base64-utils
```

## Usage

### Command Line Interface

#### Encoding

```bash
# Encode a string to Base64
node encode.js "Hello, World!"
# Output: SGVsbG8sIFdvcmxkIQ==

# Encode strings with spaces
node encode.js "This is a test message"
# Output: VGhpcyBpcyBhIHRlc3QgbWVzc2FnZQ==
```

#### Decoding

```bash
# Decode a Base64 string
node decode.js "SGVsbG8sIFdvcmxkIQ=="
# Output: Hello, World!

# Decode longer Base64 strings
node decode.js "VGhpcyBpcyBhIHRlc3QgbWVzc2FnZQ=="
# Output: This is a test message
```

### Programmatic Usage

#### As Node.js Modules

```javascript
// Import the encoding function
const { encodeToBase64 } = require("./encode.js");

// Import the decoding function
const { decodeFromBase64 } = require("./decode.js");

// Encode a string
const encoded = encodeToBase64("Hello, World!");
console.log(encoded); // SGVsbG8sIFdvcmxkIQ==

// Decode a Base64 string
const decoded = decodeFromBase64("SGVsbG8sIFdvcmxkIQ==");
console.log(decoded); // Hello, World!
```

#### In the Browser

The functions automatically detect the environment and use the appropriate Base64 methods (`btoa`/`atob` for browsers, `Buffer` for Node.js).

```html
<script src="encode.js"></script>
<script src="decode.js"></script>
<script>
  const encoded = encodeToBase64("Hello, World!");
  const decoded = decodeFromBase64(encoded);
  console.log(encoded, decoded);
</script>
```

## API Reference

### `encodeToBase64(str)`

Encodes a string to Base64.

**Parameters:**

- `str` (string): The string to encode

**Returns:**

- (string): The Base64 encoded string

**Throws:**

- Error if Base64 encoding is not supported in the current environment

### `decodeFromBase64(base64Str)`

Decodes a Base64 string back to the original text.

**Parameters:**

- `base64Str` (string): The Base64 encoded string to decode

**Returns:**

- (string): The decoded original string

**Throws:**

- Error if Base64 decoding is not supported in the current environment
- Error if the provided string is not valid Base64

## Error Handling

The utilities include proper error handling:

- Invalid Base64 strings will throw descriptive errors
- Missing command-line arguments will display usage instructions
- Environment compatibility is automatically detected

## Examples

### Complex Strings

```bash
# Encoding special characters
node encode.js "Hello! 👋 This contains émojis and spëcial chars"

# Encoding JSON
node encode.js '{"name": "John", "age": 30}'

# Encoding multiline text (use quotes)
node encode.js "Line 1
Line 2
Line 3"
```

### Error Cases

```bash
# Invalid Base64 will show an error
node decode.js "invalid-base64"
# Output: Error: Make sure you provided a valid Base64 string.

# No arguments will show usage
node encode.js
# Output: Usage: node encode.js <string-to-encode>
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
