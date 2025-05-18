// src/ai/flows/suggest-blog-topics.ts
'use server';

/**
 * @fileOverview Blog topic suggestion flow for South African SEO trends.
 *
 * - generateSouthAfricanBlogTopics - A function that generates blog post topic ideas.
 * - GenerateSouthAfricanBlogTopicsInput - The input type for the generateSouthAfricanBlogTopics function.
 * - GenerateSouthAfricanBlogTopicsOutput - The return type for the generateSouthAfricanBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSouthAfricanBlogTopicsInputSchema = z.object({
  keywords: z.string().describe('Keywords related to SEO in South Africa.'),
  numTopics: z.number().default(5).describe('Number of blog topics to generate.'),
});
export type GenerateSouthAfricanBlogTopicsInput = z.infer<typeof GenerateSouthAfricanBlogTopicsInputSchema>;

const GenerateSouthAfricanBlogTopicsOutputSchema = z.object({
  topics: z.array(z.string()).describe('List of suggested blog post topics.'),
});
export type GenerateSouthAfricanBlogTopicsOutput = z.infer<typeof GenerateSouthAfricanBlogTopicsOutputSchema>;

export async function generateSouthAfricanBlogTopics(input: GenerateSouthAfricanBlogTopicsInput): Promise<GenerateSouthAfricanBlogTopicsOutput> {
  return generateSouthAfricanBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBlogTopicsPrompt',
  input: {
    schema: GenerateSouthAfricanBlogTopicsInputSchema,
  },
  output: {
    schema: GenerateSouthAfricanBlogTopicsOutputSchema,
  },
  prompt: `You are a marketing expert specializing in South African SEO.
  Generate {{numTopics}} blog post topic ideas based on the following keywords:
  {{keywords}}

  The topics should be relevant to South African businesses and SEO trends.
  Format the topics as a numbered list.
  `,
});

const generateSouthAfricanBlogTopicsFlow = ai.defineFlow(
  {
    name: 'generateSouthAfricanBlogTopicsFlow',
    inputSchema: GenerateSouthAfricanBlogTopicsInputSchema,
    outputSchema: GenerateSouthAfricanBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
