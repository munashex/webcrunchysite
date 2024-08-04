// app/robots.js

export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/private/', '/admin/'],
        },
      ],
      sitemap: 'https://www.webcrunchy.co.za/sitemap.xml',
      host: 'https://www.webcrunchy.co.za',
    };
  }