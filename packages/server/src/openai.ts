import OpenAI from "openai";
export const client = new OpenAI({ baseURL: "https://api.aimlapi.com/v1", apiKey: process.env.API_AI_KEY })

// example
async function test() {
  const completion: any = await client.chat.completions.create({
    messages: [{ role: "user", content: "You are a helpful assistant." }],
    model: "o3-mini",
  });
  console.log(completion.choices[0].message.content);
}
// test()