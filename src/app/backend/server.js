// // backend/server.js
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.json());

// const apiKey = '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';
// const apiUrl = 'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B';

// app.post('/generate', async (req, res) => {
//   try {
//     const response = await axios.post(apiUrl, {
//       inputs: req.body.prompt,
//     }, {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.error('Error communicating with Hugging Face:', error);
//     res.status(500).send('Something went wrong');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// server.mjs

const groq = require('groq-sdk');

const key = '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';
const groq = new Groq({ apiKey: key });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama3-8b-8192",
  });
}

main();
