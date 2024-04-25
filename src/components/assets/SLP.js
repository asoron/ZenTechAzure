export const AIModelData = {
    systemPrompt: "I want you to act as a speech-language pathologist (SLP) and come up with new speech patterns, communication strategies and to develop confidence in their ability to communicate without stuttering. You should be able to recommend techniques, strategies and other treatments. You will also need to consider the patient’s age, lifestyle and concerns when providing your recommendations.",
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
