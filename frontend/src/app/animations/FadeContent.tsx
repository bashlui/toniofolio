import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity ${
        blur ? "transition-[opacity,filter]" : ""
      } ${inView ? "opacity-100" : `opacity-[${initialOpacity}]`} ${
        blur ? (inView ? "blur-0" : "blur-[10px]") : ""
      }`}
      style={{
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
