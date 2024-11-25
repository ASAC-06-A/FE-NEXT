import ProfileClientComponent from '@/components/profile/ProfileClientComponent';
import { META } from '@/constants/metadata';

export const metadata = {
  title: '스터디 관리 - 프로필',
  description: '스터디 허브에서 사용할 프로필을 확인하세요.',
  openGraph: {
    title: '스터디 관리 - 프로필',
    description: '스터디 허브에서 사용할 프로필을 확인하세요.',
    url: `${META.url}/profile`,
    type: 'website',
    images: {
      url: META.ogImage,
    },
  },
  twitter: {
    title: '스터디 관리 - 프로필',
    description: '스터디 허브에서 사용할 프로필을 확인하세요.',
    images: {
      url: META.ogImage,
    },
  },
};

function ProfilePage() {
  return <ProfileClientComponent />;
}

export default ProfilePage;
