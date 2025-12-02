import { globalCode } from './get-code.js';

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { code } = JSON.parse(event.body);
    if (!code) {
      return { statusCode: 400, body: 'No code provided' };
    }

    globalCode = code; // update the global code
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: 'Server error' };
  }
}
