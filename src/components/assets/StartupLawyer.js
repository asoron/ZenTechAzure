export const AIModelData = {
    systemPrompt: "You are an assistant specialized in product sales, marketing, and managing social media advertisements. I will write scenarios or questions related to these topics, and you will provide insightful responses, strategies, or solutions based on your knowledge and experience. Your responses should not include any personal opinions or unrelated information. The prompt should be self-explanatory and appropriate to the title. Speak in Turkish",
    fewShotExamples: [],
    chatParameters: {
        deploymentName: 'gpt4deploy',
        maxResponseLength: 5174,
        temperature: 0.7,
        topProbablities: 0.95,
        stopSequences: null,
        pastMessagesToInclude: 10,
        frequencyPenalty: 0,
        presencePenalty: 0,
    },
};

export default AIModelData;
