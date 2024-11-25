const API_URL = process.env.NEXT_PUBLIC_API_URL;

//스터디 페이지 GET
export const getStudyData = async () => {
  try {
    const response = await fetch(`${API_URL}/study`, {
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

    return data.body.response || [];
  } catch (error) {
    console.error('Error get study data:', error);
    throw error;
  }
};

//스터디 페이지 POST
export const postStudyData = async ({ studyTitle, desc, category, url }) => {
  try {
    const response = await fetch(`${API_URL}/study`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ studyTitle, desc, category, url }),
    });

    if (!response.ok) {
      throw new Error('추가 실패');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error post study data:', error);
    throw error;
  }
};

//스터디 페이지 DELETE
export const deleteStudyData = async (id) => {
  try {
    const response = await fetch(`${API_URL}/study/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('삭제 실패');
    }

    const data = await response.json();
  } catch (error) {
    console.error('Error delete study data:', error);
    throw error;
  }
};

//스터디 상세 페이지 GET
export const getStudyDetailData = async (id) => {
  try {
    const response = await fetch(`${API_URL}/study/${id}`, {
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
    console.error('Error get study detail data:', error);
    throw error;
  }
};

//스터디 상세 페이지 PATCH
export const patchStudyDetailData = async (id, { studyTitle, desc, category, url }) => {
  try {
    const response = await fetch(`${API_URL}/study/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ studyTitle, desc, category, url }),
    });

    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패했습니다.');
    }

    const data = await response.json();
    return data.body || [];
  } catch (error) {
    console.error('Error patch study detail data:', error);
    throw error;
  }
};
