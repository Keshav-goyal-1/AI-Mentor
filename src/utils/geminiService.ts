import { Message } from '@/components/ChatMessage';
import { v4 as uuidv4 } from 'uuid';

const apiKey  = "AIzaSyDBURpwViKhnHP6qQGsxM-NACmGDzq8dpo";

export async function generateAIResponse(
  userText: string, 
  language: string, 
  difficulty: string
): Promise<Message> {
  try {
    const prompt = `
       You are an AI coding mentor. Answer the following question briefly and formally:

      Question: "${userText}"
      Skill level: ${difficulty}
      Language context: ${language}

      Instructions:
      - Respond in bullet points or numbered format.
      - Be clear, accurate, and to-the-point.
      - Do not over-explain.
      - Include only relevant information.
      - Add a short code example only if necessary.
    `;

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    
    const requestBody = {
      contents: [{ 
        role: "user",
        parts: [{ text: prompt }] 
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
        topP: 0.8,
        topK: 40
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", response.status, errorText);
      throw new Error(`API responded with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    
    if (!data || !data.candidates || data.candidates.length === 0) {
      console.error("Invalid API response:", JSON.stringify(data));
      throw new Error("Invalid response structure received from API");
    }

    let aiResponseText = "";
    const candidate = data.candidates[0];
    
    if (candidate && candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
      aiResponseText = candidate.content.parts[0].text || "";
    } else {
      throw new Error("Unable to extract text from API response");
    }

    if (!aiResponseText) {
      throw new Error("Empty response received from API");
    }
    
    const codeBlocks = extractCodeBlocks(aiResponseText);
    const cleanedText = removeCodeBlocks(aiResponseText);

    return {
      id: uuidv4(),
      type: 'bot',
      text: cleanedText,
      codeBlocks,
      timestamp: new Date(),
    };
  } catch (error) {
    console.error("Error generating AI response:", error);
    
    return {
      id: uuidv4(),
      type: 'bot',
      text: `I encountered an error connecting to the AI service. Please check your internet connection and API configuration. Error details: ${error.message}`,
      timestamp: new Date(),
    };
  }
}

function extractCodeBlocks(text: string) {
  const codeBlockRegex = /```([a-zA-Z0-9]+)?\n([\s\S]*?)```/g;
  const codeBlocks = [];
  let match;
  
  while ((match = codeBlockRegex.exec(text)) !== null) {
    codeBlocks.push({
      language: match[1]?.toLowerCase() || "text",
      code: match[2].trim()
    });
  }
  
  return codeBlocks;
}

function removeCodeBlocks(text: string) {
  return text.replace(/```([a-zA-Z0-9]+)?\n([\s\S]*?)```/g, '').trim();
}
