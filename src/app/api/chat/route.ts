export const runtime = 'edge';

export async function POST(req: Request) {
    const { messages } = await req.json();
    const latestMessage = messages[messages.length - 1];

    const responseText = `[CRISIS-AI]: Analyzing scenario: "${latestMessage.content}"\n` +
        `\n**LOGISTICAL BREAKDOWN**\n` +
        `• [Dispatch] Supply Convoy 4 has been assigned.\n` +
        `• [Inventory] Requested units identified. 1200+ available in National Reserve Facility.\n` +
        `• [Routing] Optimal secure route calculated. Avoid Sector 7 (flooding). ETA: 45 mins.\n` +
        `• [Personnel] 2 Medical Response teams activated for triage support.\n\n` +
        `> Action plan logged. Status broadcasted to field operative channels.`;

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
        async start(controller) {
            // Send the response in chunks to simulate streaming
            const splitText = responseText.split(/(?<=\n| )/);

            for (const piece of splitText) {
                // AI SDK standard stream protocol uses 0:"string"
                const formatted = `0:${JSON.stringify(piece)}\n`;
                controller.enqueue(encoder.encode(formatted));
                // Add a small delay for the typing effect
                await new Promise((resolve) => setTimeout(resolve, 30));
            }
            controller.close();
        },
    });

    return new Response(readable, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "x-vercel-ai-data-stream": "v1",
        },
    });
}
