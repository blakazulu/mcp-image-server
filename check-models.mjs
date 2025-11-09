import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyCd248kkR_EvBwrUy-v3WecMy_3I6L5gBw';
const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
  try {
    console.log('Fetching available models...\n');

    const models = await genAI.listModels();

    console.log('Available models:');
    for (const model of models) {
      console.log(`\nModel: ${model.name}`);
      console.log(`  Display Name: ${model.displayName}`);
      console.log(`  Description: ${model.description}`);
      console.log(`  Supported Methods: ${model.supportedGenerationMethods?.join(', ') || 'N/A'}`);
    }
  } catch (error) {
    console.error('Error listing models:', error.message);
  }
}

listModels();
