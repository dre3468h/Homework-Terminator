import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: In a production environment, ensure logic prevents excessive calls if cost is a concern.
// This service is triggered only upon user request (button click).
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStudyAdvice = async (topic: string, userType: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview'; // Efficient model for text
    const prompt = `
      作為一位專業的學術顧問，請為一位${userType}（例如全職護士學生）提供關於"${topic}"的初步學習建議或論文大綱方向。
      請用繁體中文回答，語氣專業、鼓勵性強，並保持簡潔（200字以內）。
      重點在於幫助他們如何平衡工作與學業。
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "抱歉，目前無法生成建議，請稍後再試。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系統繁忙，請稍後再試，或直接聯繫我們的人工客服獲取更詳細的幫助。";
  }
};
