import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

export default function SEO({ title, description, keywords, path = "" }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | FlowOps`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    if (!ogTitle.parentElement) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    if (!ogDescription.parentElement) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', `https://flowops.ai${path}`);
    if (!ogUrl.parentElement) document.head.appendChild(ogUrl);
    
  }, [title, description, keywords, path]);

  return null;
}