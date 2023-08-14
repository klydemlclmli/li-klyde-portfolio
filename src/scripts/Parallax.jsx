import { useState, useEffect } from 'react';

// Parallax effect
const useParallax = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { offsetY };
};

export default useParallax;