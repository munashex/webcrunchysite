// app/sitemap.js

// Helper function to get a date 1 day ago
const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  };
  
  export default async function sitemap() {
    
  
    const routes = [
      {
        url: 'https://www.webcrunchy.co.za',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.webcrunchy.co.za/about',
        lastModified: getYesterday(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.webcrunchy.co.za/portfolio',
        lastModified: getYesterday(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: 'https://www.webcrunchy.co.za/webdesign',
        lastModified: getYesterday(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://www.webcrunchy.co.za/ecommerce',
        lastModified: getYesterday(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://www.webcrunchy.co.za/webdev',
        lastModified: getYesterday(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://www.webcrunchy.co.za/mobileapp',
        lastModified: getYesterday(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://www.webcrunchy.co.za/shopify',
        lastModified: getYesterday(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://www.webcrunchy.co.za/contact',
        lastModified: getYesterday(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ];
  
   
  
    return [
      ...routes,
    ];
  }