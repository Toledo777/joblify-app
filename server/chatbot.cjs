
async function run(input) {
    // 01157f0f6bcdea562911f45073331da1
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/01157f0f6bcdea562911f45073331da1/ai/run/@cf/meta/llama-2-7b-chat-int8`,
      {
        headers: { Authorization: "Bearer 4DnHZdKiZtJCkQrbsVNLV2uQwtcodTxDJDKNdaWj" },
        method: "POST",
        body: JSON.stringify(input),
      }
    );
    const result = await response.json();
    return result;
  }

module.exports = run;