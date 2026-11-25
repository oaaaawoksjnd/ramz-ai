
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Gunakan metode POST"
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "API Key belum dipasang"
    });
  }

  try {
    const contents = req.body?.contents;

    if (!Array.isArray(contents) || !contents.length) {
      return res.status(400).json({
        error: "Pesan kosong"
      });
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + encodeURIComponent(apiKey),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{
              text: "Kamu adalah RAMZ AI, asisten pintar yang ramah dan selalu menjawab dalam bahasa pengguna."
            }]
          },
          contents: contents.slice(-12),
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1200
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "AI sedang bermasalah"
      });
    }

    const answer = data.candidates?.[0]?.content?.parts
      ?.map(part => part.text || "")
      .join("");

    return res.status(200).json({
      answer: answer || "RAMZ AI belum mendapatkan jawaban."
    });

  } catch (error) {
    return res.status(500).json({
      error: "Terjadi kesalahan server"
    });
  }
            }
      
