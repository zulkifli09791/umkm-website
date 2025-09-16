import React from 'react';

const SocialMedia = () => {
  const socials = [
     {
      name: 'Instagram',
      icon: '/medsos/instagram.png',
      url: 'https://instagram.com/yourumkm',
    },
    {
      name: 'Facebook',
      icon: '/medsos/facebook.png',
      url: 'https://facebook.com/yourumkm',
    },
    {
      name: 'TikTok',
      icon: '/medsos/tiktok.png',
      url: 'https://tiktok.com/@yourumkm',
    },
    {
      name: 'Youtube',
      icon: '/medsos/youtube.png',
      url: 'https://youtube.com/@yourumkm',
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-600 hover:text-emerald-600 transition"
        >
          <span className="text-2xl mb-1">{social.icon}</span>
          <span className="text-sm">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;