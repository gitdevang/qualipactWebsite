import { useEffect, useState } from 'react';

function useWatchAnimation(refs, threshold) {
  const [visibility, setVisibility] = useState({});

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibility((prev) => ({
                ...prev,
                [index]: true,
              }));
              observer.unobserve(entry.target); // Stop observing after animation triggers
            }
          });
        },
        {
          threshold, // Set threshold for all elements
          rootMargin: '0px 0px -100px 0px',
        }
      );

      if (ref.current) {
        observer.observe(ref.current); // Observe each ref
      }

      return observer;
    });

    // Cleanup observers on component unmount
    return () => {
      observers.forEach((observer, index) => {
        if (refs[index]?.current) {
          observer.unobserve(refs[index].current);
        }
      });
    };
  }, [refs]);

  return visibility;
}

export default useWatchAnimation;
