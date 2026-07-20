import {
  HumanMessage,
  AIMessage,
  SystemMessage,
} from "@langchain/core/messages";

const human = new HumanMessage("Hello");

const ai = new AIMessage("Hi Tarun!");

const system = new SystemMessage(
  "You are a helpful AI assistant."
);

console.log(human);

console.log(ai);

console.log(system);