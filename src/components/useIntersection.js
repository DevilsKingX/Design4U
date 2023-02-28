import { useEffect, useRef } from 'react';

const useIntersection = (refs) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry,i) => {
        if (entry.isIntersecting) {
          console.log(`Element with ref ${entry.target.getAttribute('classname')} is in the viewport`);
        }
      });
    }, { threshold: 0 });

    refs.forEach((ref) => {
      observer.current.observe(ref.current);
    });

    return () => {
      observer.current.disconnect();
    };
  }, [refs]);
};

export default useIntersection;