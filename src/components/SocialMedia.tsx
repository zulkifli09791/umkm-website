import Link from 'next/link';

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
      name: 'YouTube',
      icon: '/medsos/youtube.png',
      url: 'https://youtube.com/@yourumkm',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-400 hover:text-emerald-500 transition-colors"
          aria-label={social.name}
        >
          <div className="w-8 h-8 mb-1">
            <img
              src={social.icon}
              alt={social.name}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xs font-medium">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;