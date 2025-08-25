"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

interface BriefingArticleClientProps {
  initialBriefingData: any;
  initialRelatedBriefings: any[];
}

// Helper function to estimate read time (can be moved to a utility file if used elsewhere)
function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  const wordCount = textContent.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export default function BriefingArticleClient({
  initialBriefingData,
  initialRelatedBriefings,
}: BriefingArticleClientProps) {
  const [briefingData, setBriefingData] = useState(initialBriefingData);
  const [relatedBriefings, setRelatedBriefings] = useState(initialRelatedBriefings);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

  useEffect(() => {
    // Set current URL for sharing once component mounts on client
    setCurrentUrl(window.location.href);

    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowShareOptions(false);
      }
    };

    // Add event listener when dropdown is open
    if (showShareOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount or when dropdown closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareOptions]); // Re-run effect when showShareOptions changes

  if (!briefingData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const contentHtml = briefingData.contentHtml || '';
  const readTime = estimateReadTime(contentHtml);

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
    setCopySuccess(''); // Clear copy success message on toggle
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8 sm:py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Wider container */}
        <Link href="/automations/blog" className="text-ph-accent hover:text-primary-foreground transition-colors duration-200 mb-6 inline-block text-sm sm:text-base">
          &larr; Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{briefingData.title || 'Untitled Briefing'}</h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center text-ph-light-gray text-sm sm:text-base mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
            <span>By <span className="font-semibold text-white">{briefingData.author || 'Admin'}</span></span>
            <span className="hidden sm:inline">•</span>
            <span>
              {format(new Date(briefingData.publicationDate), 'MMMM dd, yyyy')}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>{readTime}</span>
          </div>

          {briefingData.tags && briefingData.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {briefingData.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Button and Options */}
          <div className="relative inline-block text-left mt-4" ref={dropdownRef}> {/* Attach ref here */}
            <button
              onClick={handleShareClick}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-ph-accent bg-muted hover:bg-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Share
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {showShareOptions && (
              <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-card ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-ph-light-gray hover:bg-muted hover:text-white" role="menuitem">
                    Share on Facebook
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(briefingData.title || '')}`} target="_blank" rel="noopenernoreferrer" className="block px-4 py-2 text-sm text-ph-light-gray hover:bg-muted hover:text-white" role="menuitem">
                    Share on Twitter
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodeURIComponent(briefingData.title || '')}`} target= "_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-ph-light-gray hover:bg-muted hover:text-white" role="menuitem"> 
                    Share on LinkedIn
                  </a>
                  <button onClick={handleCopyLink} className="block w-full text-left px-4 py-2 text-sm text-ph-light-gray hover:bg-muted hover:text-white" role="menuitem">
                    Copy Link {copySuccess && <span className="ml-2 text-xs text-green-500">({copySuccess})</span>}
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {briefingData.featuredImage && (
          <div className="mb-8">
            <div className="relative w-full h-72 sm:h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden"> {/* More prominent image */}
              <Image
                src={briefingData.featuredImage.url}
                alt={briefingData.featuredImage.title || briefingData.title || 'Image'}
                title={briefingData.featuredImage.description || briefingData.title || 'Image'}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            {briefingData.featuredImage.description && (
              <p className="text-center text-sm text-ph-light-gray mt-2">{briefingData.featuredImage.description}</p>
            )}
          </div>
        )}

        {/* Article Content */}
        <article className="automation-blog-content mx-auto text-ph-light-gray max-w-none"> {/* max-w-none for full width */}
          <div dangerouslySetInnerHTML={{ __html: briefingData.contentHtml }} />
        </article>

        {/* Related Posts */}
        {relatedBriefings.length > 0 && (
          <section className="mt-12 pt-8 border-t border-ph-border">
            <h2 className="text-xl font-semibold text-white mb-4">More Briefings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBriefings.map(briefing => (
                <Link key={briefing.id} href={`/automations/briefings/${briefing.slug}`} className="block">
                  <div className="bg-card p-4 rounded-lg border border-ph-border hover:border-primary transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{briefing.title}</h3>
                    <p className="text-sm text-ph-light-gray line-clamp-3">{briefing.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
