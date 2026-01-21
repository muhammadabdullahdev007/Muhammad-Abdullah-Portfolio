import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    const AGENT_ID = process.env.ELEVENLABS_AGENT_ID;

    if (!ELEVENLABS_API_KEY || !AGENT_ID) {
      console.log("ElevenLabs not configured, using fallback");
      return NextResponse.json({
        fallback: true,
        error: "ElevenLabs not configured",
      });
    }

    // Call ElevenLabs Conversational AI API
    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation`,
      {
        method: "POST",
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: AGENT_ID,
          text: message,
          // Include conversation history for context
          conversation_history:
            conversationHistory?.map((msg: any) => ({
              role: msg.role === "user" ? "user" : "assistant",
              content: msg.content,
            })) || [],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("ElevenLabs API Error:", errorText);
      return NextResponse.json({
        fallback: true,
        error: "ElevenLabs API error",
      });
    }

    const data = await response.json();

    return NextResponse.json({
      message: data.response || data.text,
      audioUrl: data.audio_url, // If ElevenLabs returns audio URL
      fallback: false,
    });
  } catch (error: any) {
    console.error("ElevenLabs Conversation Error:", error);
    return NextResponse.json({
      fallback: true,
      error: error.message || "Failed to get response",
    });
  }
}
