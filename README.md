
# Vercel URL Decoder

This is a simple Vercel app to decode a URL passed as an encoded string.

## Deployment

1. Clone this repository or download the ZIP.
2. Deploy it to Vercel by linking your GitHub or by using the Vercel CLI.
3. Use the `POST` endpoint `/api/decode-url` to decode URL-encoded strings.

Example usage:

```bash
curl -X POST https://your-app-name.vercel.app/api/decode-url -H "Content-Type: application/json" -d '{"encodedURL": "https%3A%2F%2Fboards.greenhouse.io%2Fdoordashusa%2Fjobs%2F6659164"}'
```
