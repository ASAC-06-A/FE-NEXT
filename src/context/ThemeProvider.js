'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

const Provider = ({ children }) => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
