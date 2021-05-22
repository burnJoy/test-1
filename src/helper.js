import { LoremIpsum } from "lorem-ipsum";

export function getDate() {
  // генерируем дату
  const date = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  return date.toLocaleString("ru-RU", options);
  
}

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export function textGenerator() {
  return lorem.generateSentences(3);
}
