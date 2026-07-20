const apiKey = "AQ.Ab8RN6KLZ4aQ5ypCKAyXdy_FDOTyUAVLJC9nZBOuYSo8N6jijA";

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
);

const data = await response.json();

for (const model of data.models) {
  console.log("--------------------------------");

  console.log("Name:", model.name);

  console.log(
    "Methods:",
    model.supportedGenerationMethods?.join(", ")
  );
}