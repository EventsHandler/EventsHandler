import OpenAI from "openai";
export const client = new OpenAI({ baseURL: "https://api.aimlapi.com/v1", apiKey: "2cd4c82ff2d841ca9b0da68b6864df53" })

// example
async function test() {
  const completion: any = await client.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4o",
  });
  console.log(completion.choices[0].message.content);
}