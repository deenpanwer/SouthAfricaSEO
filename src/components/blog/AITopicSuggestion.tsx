"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateSouthAfricanBlogTopics, type GenerateSouthAfricanBlogTopicsInput } from '@/ai/flows/suggest-blog-topics';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  keywords: z.string().min(3, { message: "Please enter at least 3 characters for keywords." }),
  numTopics: z.coerce.number().min(1).max(10).default(3),
});

type FormData = z.infer<typeof formSchema>;

export function AITopicSuggestion() {
  const [suggestedTopics, setSuggestedTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: '',
      numTopics: 3,
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSuggestedTopics([]);
    try {
      const result = await generateSouthAfricanBlogTopics({
        keywords: data.keywords,
        numTopics: data.numTopics,
      });
      if (result && result.topics) {
        setSuggestedTopics(result.topics);
        toast({
          title: "Topics Generated!",
          description: `Successfully generated ${result.topics.length} blog topic ideas.`,
        });
      } else {
        toast({
          title: "Error Generating Topics",
          description: "Could not generate topics. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error generating blog topics:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Lightbulb className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">AI-Powered Blog Topic Suggester</CardTitle>
            <CardDescription>Get fresh blog ideas relevant to South African SEO trends.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords</Label>
            <Input
              id="keywords"
              placeholder="e.g., small business SEO, e-commerce South Africa"
              {...register("keywords")}
              disabled={isLoading}
            />
            {errors.keywords && <p className="text-sm text-destructive">{errors.keywords.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="numTopics">Number of Topics (1-10)</Label>
            <Input
              id="numTopics"
              type="number"
              min="1"
              max="10"
              {...register("numTopics")}
              disabled={isLoading}
            />
            {errors.numTopics && <p className="text-sm text-destructive">{errors.numTopics.message}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Suggest Topics"
            )}
          </Button>
        </CardFooter>
      </form>

      {suggestedTopics.length > 0 && (
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold mb-3 text-foreground">Suggested Topics:</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {suggestedTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
