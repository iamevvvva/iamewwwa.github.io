import { useEffect, useRef, useState } from 'react';

interface LazyImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
}

export const LazyImg = ({ src, className, ...props }: LazyImgProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '300px',
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
      {/* {!isLoading && <div className={className} />} */}
      {isVisible && <img src={src} className={className} {...props} onLoad={() => setIsLoading(false)} />}
    </div>
  );
};
