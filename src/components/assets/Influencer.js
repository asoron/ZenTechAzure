export const AIModelData = {
    systemPrompt: "I want you to act as a social media influencer. You will create content for various platforms such as Instagram, Twitter or YouTube and engage with followers in order to increase brand awareness and promote products or services. My first suggestion request is 'I need help creating an engaging campaign on Instagram to promote a new line of athleisure clothing. Speak Turkish.'",
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
