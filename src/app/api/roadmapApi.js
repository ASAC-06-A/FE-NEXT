const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 로드맵 페이지 데이터 GET
export const getRoadmapData = async () => {
  try {
    const response = await fetch(`${API_URL}/roadmap`, {
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
    console.error('Error fetching roadmap data:', error);
    throw error;
  }
};

// 로드맵 메인 페이지 POST
export const postRoadmapData = async ({ roadmapTitle, desc, category }) => {
  try {
    const response = await fetch(`${API_URL}/roadmap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ roadmapTitle, desc, category }),
    });

    if (!response.ok) {
      throw new Error('추가 실패');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding study data:', error);
    throw error;
  }
};

// 로드맵 메인 페이지 DELETE
export const deleteRoadmapData = async (id) => {
  try {
    const response = await fetch(`${API_URL}/roadmap/${id}`, {
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
    return data;
  } catch (error) {
    console.error('Error deleting study data:', error);
    throw error;
  }
};

// 로드맵 메인 페이지 PATCH
export const patchRoadmapData = async (id, { roadmapTitle, desc, category }) => {
  try {
    const response = await fetch(`${API_URL}/roadmap/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ roadmapTitle, desc, category }),
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

//로드맵 상세 페이지 GET
export const getRoadmapDetailData = async (id) => {
  try {
    const response = await fetch(`${API_URL}/roadmap/${id}`, {
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
    console.error('Error fetching roadmap detail data:', error);
    throw error;
  }
};

//로드맵 상세 페이지 POST
export const postRoadmapDetailData = async (id, studyId) => {
  try {
    const response = await fetch(`${API_URL}/roadmap/${id}/study`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ studyId }),
    });

    if (!response.ok) {
      throw new Error('추가 실패');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error adding study data:', error);
    throw error;
  }
};

//로드맵 상세 페이지 DELETE
export const deleteRoadmapDetailData = async (id, studyId) => {
  try {
    const response = await fetch(`${API_URL}/roadmap/${id}/study`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(studyId),
    });

    if (!response.ok) {
      throw new Error('삭제 실패');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting study data:', error);
    throw error;
  }
};
