const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 로그인 POST
export const signin = async ({ email, password }) => {
  try {
    const response = await fetch(`${API_URL}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
    }
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

// 회원가입 POST
export const signup = async ({ userName, email, password }) => {
  try {
    const response = await fetch(`${API_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
    }
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

// 로그아웃 POST
export const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/profile/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
    }
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

// 회원 탈퇴 DELETE
export const deleteAccount = async () => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
    }
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

// 비밀번호 변경
