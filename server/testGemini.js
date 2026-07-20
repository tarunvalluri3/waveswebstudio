const apiKey = "AQ.Ab8RN6KLZ4aQ5ypCKAyXdy_FDOTyUAVLJC9nZBOuYSo8N6jijA";

const model = "gemini-3.5-flash";

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: "Say Hello",
            },
          ],
        },
      ],
    }),
  }
);

console.log("Status:", response.status);
console.log(await response.text());