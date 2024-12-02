'use client';

import { getProfileData, patchProfileData } from '@/app/api/profileApi';
import AccountInfo from '@/components/profile/AccountInfo';
import ProfileInfoEditForm from '@/components/profile/ProfileInfoEditForm';
import ProfileInfoView from '@/components/profile/ProfileInfoView';

import { useEffect, useState } from 'react';

function ProfileClientComponent() {
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const fetchProfileData = async () => {
    try {
      const data = await getProfileData();
      setProfileData(data);
    } catch (error) {
      console.error('Error fetching study data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEdit = async (name, introduce) => {
    try {
      await patchProfileData(name, introduce);
      fetchProfileData();
    } catch (error) {
      console.error('Error deleting study data:', error);
    }
  };

  return (
    <div className='max-w-3xl mx-auto p-6 space-y-8'>
      {isEditing ? (
        <ProfileInfoEditForm handleEdit={handleEdit} handleEditToggle={handleEditToggle} />
      ) : (
        <ProfileInfoView profileData={profileData} handleEditToggle={handleEditToggle} />
      )}

      <AccountInfo profileData={profileData} />
    </div>
  );
}

export default ProfileClientComponent;
