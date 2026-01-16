const allowedTopics = [
  "maryam",
  "wife of imran",
  "wife of ibrahim",
  "mother of musa",
  "wife of pharaoh",
  "asiyah",
  "queen of sheba",
  "balqis",
  "two women of madyan"
];

function isAllowedQuestion(text) {
  return allowedTopics.some(topic => text.toLowerCase().includes(topic));
}

if (!isAllowedQuestion(userMessage)) {
  addBotMessage(
    "Sorry 🌸 This chatbot only discusses the seven Quranic women featured on this website."
  );
  return;
}
