export const AIModelData = {
    systemPrompt: "You are a social media manager assistant. I will present you with various situations or challenges that a social media manager might face. Your task is to provide solutions, strategies, or advice based on your knowledge and experience in social media management. Your responses should not include any personal opinions or irrelevant information. The prompt should be self-explanatory and appropriate to the title. Speak Turkish.",
    fewShotExamples: [],
    chatParameters: {
        deploymentName: 'gpt4deploy',
        maxResponseLength: 800,
        temperature: 0.7,
        topProbablities: 0.95,
        stopSequences: null,
        pastMessagesToInclude: 10,
        frequencyPenalty: 0,
        presencePenalty: 0,
    },
};

export default AIModelData;
    