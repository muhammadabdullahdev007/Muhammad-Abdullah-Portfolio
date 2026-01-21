import { NextRequest, NextResponse } from "next/server";
import { KNOWLEDGE_BASE, SYSTEM_PROMPT } from "@/constants/knowledgeBase";

// Lazy initialize Groq client
function getGroqClient() {
  const Groq = require("groq-sdk").default;
  return new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Build messages array with system prompt and conversation history
    const messages = [
      {
        role: "system",
        content: `${SYSTEM_PROMPT}\n\nKNOWLEDGE BASE:\n${KNOWLEDGE_BASE}`,
      },
      ...conversationHistory,
      {
        role: "user",
        content: message,
      },
    ];

    // Call Groq API with Llama model
    const groq = getGroqClient();
    const completion = await groq.chat.completions.create({
      messages: messages as any,
      model: "llama-3.3-70b-versatile", // Updated to current model
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    const assistantMessage =
      completion.choices[0]?.message?.content ||
      "I apologize, but I encountered an error. Please try again.";

    return NextResponse.json({
      message: assistantMessage,
      conversationId: completion.id,
    });
  } catch (error: any) {
    console.error("Groq API Error:", error);

    // Handle specific error cases
    if (error?.status === 401) {
      return NextResponse.json(
        {
          error:
            "Invalid API key. Please check your GROQ_API_KEY in .env file.",
        },
        { status: 401 }
      );
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again in a moment." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Failed to get response from AI assistant" },
      { status: 500 }
    );
  }
}

// Optional: Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "online",
    model: "llama-3.3-70b-versatile",
    provider: "Groq",
  });
}
