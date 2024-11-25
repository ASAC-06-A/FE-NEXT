import RoadmapClientComponent from '@/components/roadmap/RoadmapClientComponent';
import { META } from '@/constants/metadata';

export const metadata = {
  title: '스터디허브 - 로드맵 생성',
  description: '원하는 강의들로 나만의 로드맵을 만들어보세요.',
  openGraph: {
    title: '스터디허브 - 로드맵 생성',
    description: '원하는 강의들로 나만의 로드맵을 만들어보세요.',
    url: `${META.url}/roadmap`,
    type: 'website',
    images: {
      url: META.ogImage,
    },
  },
  twitter: {
    title: '스터디허브 - 로드맵 생성',
    description: '원하는 강의들로 나만의 로드맵을 만들어보세요.',
    images: {
      url: META.ogImage,
    },
  },
};

function MyRoadmapPage() {
  return <RoadmapClientComponent />;
}
export default MyRoadmapPage;
