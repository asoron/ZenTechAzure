export const AIModelData = {
    systemPrompt: "You are an AI assistant that helps people find information.",
    fewShotExamples: [],
    chatParameters: {
        deploymentName: 'gpt4deploy',
        maxResponseLength: 4095,
        temperature: 0.7,
        topProbablities: 0.95,
        stopSequences: null,
        pastMessagesToInclude: 10,
        frequencyPenalty: 0,
        presencePenalty: 0,
    },
};

export default AIModelData;
