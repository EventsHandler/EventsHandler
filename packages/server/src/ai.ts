import OpenAI from 'openai';
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
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