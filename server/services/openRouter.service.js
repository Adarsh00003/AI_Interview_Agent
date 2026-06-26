import axios from "axios"

export const askAi = async (messages) => {
    try {
        if(!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-4o-mini",
                messages: messages

            },
            {
            headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },});

        const content = response?.data?.choices?.[0]?.message?.content
            || response?.data?.choices?.[0]?.delta?.content
            || response?.data?.choices?.[0]?.text;

        if (!content || !String(content).trim()) {
            console.error("OpenRouter invalid response:", response?.data);
            throw new Error("AI returned empty response.");
        }

        return String(content).trim();
    } catch (error) {
        console.error("OpenRouter Error:", error.response?.data || error.message);
        throw new Error(`OpenRouter API Error: ${error.response?.data?.error || error.message}`);
    }
}