import { useEffect, useRef, useState } from 'react';

export const LazyVideo = ({ src, classNames }: { src: string; classNames: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '100px',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef}>
      <video className={classNames} controls autoPlay loop muted>
        {isVisible && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
};
