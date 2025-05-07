import OpenAI from 'openai';
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.API_AI_KEY,
});
export async function chatCompletition(input: string) {
  const completion: any = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1-distill-qwen-32b:free",
    messages: [
      {
        "role": "user",
        "content": input,
      }
    ],
    
  });

  return completion.choices[0].message.content
}