import { useEffect, useRef } from "react";

export default function AnimatedStrokeSVG() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // set dash animation
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // trigger animation (next frame so browser registers styles)
    requestAnimationFrame(() => {
      path.style.transition = "stroke-dashoffset 3s cubic-bezier(.65,0,.35,1)";
      path.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <svg
      viewBox="0 0 500 200"
      className="w-[400px]"
    >
      <path
        ref={pathRef}
        d="M20 150 Q120 20 220 150 T420 150"
        fill="none"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}