# cwi-array-encoding

Efficiently encode Uint8Arrays as base64 strings

## Usage

```js
import { encodeUint8AsString, decodeUint8FromString } from '@cwi/array-encoding'

// Start with a Uint8Array of any length
const originalArray = new Uint8Array([1, 2, 3, 4])

// encodeUint8ArrayAsString produces an efficiently-encoded base64 string
const encodedString = encodeUint8AsString(originalArray)

// To get your original array back, just pass the base64 string to decodeUint8FromString
const decodedArray = decodeUint8FromString(encodedString)

// You can also encode and decode hex strings by specifiying the format (defaults to base64)
const encodedStringAsHex = encodeUint8AsString(originalArray, 'hex')
const decodedArrayFromHex = decodeUint8FromString(encodedStringAsHex, 'hex')
```

## API

### `encodeUint8AsString(Uint8Array, outputFormat) => string`

This function takes an arbitrary Uint8Array of any length and returns an efficiently-encoded base64 or hex string that can be easily stored in a database or sent over the network.

### `decodeUint8FromString(string, format) => Uint8Array`

This function takes a base64 or hex encoded string that was produced by the `encodeUint8AsString` function and returns the original Uint8Array.

## Testing

If any changes are required to this library, please maintain an adequate level of test coverage for critical production environments.

## License

The license for the code in this repository is the Open BSV License.