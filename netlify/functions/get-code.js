let globalCode = null; // stored in memory (resets if function cold-starts)

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ code: globalCode })
  };
}

// Expose globalCode so set-code can update it
export { globalCode };
