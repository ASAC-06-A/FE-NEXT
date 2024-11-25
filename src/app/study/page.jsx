import StudyClientComponent from '@/components/study/StudyClientComponent';
import { META } from '@/constants/metadata';

export const metadata = {
  title: '스터디 관리 - 스터디허브',
  description: '저장한 강의를 관리하고, 진행 상황을 체크하세요.',
  openGraph: {
    title: '스터디 관리 - 스터디허브',
    description: '저장한 강의를 관리하고, 진행 상황을 체크하세요.',
    url: `${META.url}/study`,
    type: 'website',
    images: {
      url: META.ogImage,
    },
  },
  twitter: {
    title: '스터디 관리 - 스터디허브',
    description: '저장한 강의를 관리하고, 진행 상황을 체크하세요.',
    images: {
      url: META.ogImage,
    },
  },
};

function StudyPage() {
  return <StudyClientComponent />;
}

export default StudyPage;
