const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 프로필 페이지 GET
export const getProfileData = async () => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패했습니다.');
    }

    const data = await response.json();

    return data.body || [];
  } catch (error) {
    console.error('Error fetching study data:', error);
    return error;
  }
};

// 프로필 페이지 PATCH
export const patchProfileData = async ({ name, introduce }) => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name, introduce }),
    });

    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패했습니다.');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching study data:', error);
    return error;
  }
};
