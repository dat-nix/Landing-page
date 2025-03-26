import React, { useEffect, useRef, useState } from "react";

export default function TrainingSchedule() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-auto min-h-[808px] flex items-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/training-schedule-bg.png"
          alt="Kendo Training"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay Text with Transition */}
      <div className={`absolute inset-0 flex flex-col items-center sm:items-end justify-center text-center sm:text-right font-['Reddit Sans'] right-0 sm:right-8 
        transition-all duration-1000 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      >
        <p className="text-orange-500 text-[40px] sm:text-[70px] md:text-[100px] font-bold">
          5:30PM - 8:30PM
        </p>
        <p className="text-white text-[40px] sm:text-[70px] md:text-[100px] font-bold">
          MON - WED - FRI
        </p>
         <p className="text-yellow-200 text-[70px] sm:text-[120px] md:text-[180px] font-extrabold leading-none">
          TRAINING SCHEDULE
        </p>
      </div>
    </section>
  );
}
