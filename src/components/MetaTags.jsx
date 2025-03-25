import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ 
  title = '8&90 - Rosticceria e Tavola Calda Napoletana a Marano',
  description = 'Scopri l\'autentica cucina napoletana da 8&90 a Marano. Rosticceria, tavola calda, primi e secondi piatti preparati con ingredienti freschi. Ordina da asporto o a domicilio.',
  canonicalUrl,
  image = 'https://8e90.jaiki.xyz/assets/logoo.png',
  schema
}) => {
  // Format the canonical URL
  const siteUrl = 'https://8e90.jaiki.xyz';
  const fullCanonicalUrl = canonicalUrl 
    ? `${siteUrl}${canonicalUrl}`
    : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="8&90 Rosticceria" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Optional structured data */}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default MetaTags;