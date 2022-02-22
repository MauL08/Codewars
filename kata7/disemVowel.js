disemvowel = (str) => {
  return str.replace(/[aiueoAIUEO]/g, "");
};

console.log(disemvowel("What are you, a communist?"));
