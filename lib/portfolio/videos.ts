export interface Video {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  description?: string;
}

export const videos: Video[] = [
  {
    id: 1,
    title: 'Why Norway is the Best Country in the World',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1280&h=720&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '12:34',
    description: 'An exploration of what makes Norway consistently rank as one of the happiest nations.',
  },
  {
    id: 2,
    title: 'The Hidden Border Between India and Bangladesh',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1280&h=720&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '18:02',
    description: 'Inside one of the most complex border situations in the world.',
  },
  {
    id: 3,
    title: 'How Iceland Became One of the Safest Countries',
    category: 'Explainer',
    thumbnail: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1280&h=720&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '14:51',
    description: 'The surprising policy decisions that shaped Iceland&apos;s safety record.',
  },
  {
    id: 4,
    title: 'Tokyo: The City That Defies Logic',
    category: 'Travel',
    thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1280&h=720&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '22:17',
    description: 'A deep dive into what makes Tokyo uniquely functional and extraordinary.',
  },
  {
    id: 5,
    title: 'The Real Story of the Swiss Military Tunnels',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1280&h=720&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '16:44',
    description: 'Switzerland&apos;s secret bunker network and what it says about neutrality.',
  },
  {
    id: 6,
    title: 'How Maps Lie to You Every Day',
    category: 'Explainer',
    thumbnail: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1280&h=720&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '10:09',
    description: 'Why every map you&apos;ve ever seen is fundamentally wrong, and why that matters.',
  },
  {
    id: 7,
    title: 'Life on the World&apos;s Highest Inhabited Town',
    category: 'Travel',
    thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1280&h=720&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '19:38',
    description: 'Visiting the remote Andean town of La Rinconada at 16,700 feet.',
  },
  {
    id: 8,
    title: 'Inside the World&apos;s Most Secretive Country',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1280&h=720&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '25:03',
    description: 'Rare footage and interviews from inside North Korea.',
  },
];

export const videoCategories = ['All', 'Documentary', 'Explainer', 'Travel'];
