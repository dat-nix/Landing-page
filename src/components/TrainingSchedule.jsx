import React, { useEffect, useRef, useState } from "react";
import { content } from "../configs/content";

export default function TrainingSchedule({ language = "en" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const trainingschedule = content[language]?.trainingschedule || content["en"]?.trainingschedule;

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // ✅ Ensure trainingschedule exists before rendering
  if (!trainingschedule) {
    console.error(`Training schedule data is missing for language: ${language}`);
    return <div className="text-white">Error: Training schedule not found.</div>;
  }

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
          {trainingschedule?.time || "Time Missing"}
        </p>
        <p className="text-white text-[40px] sm:text-[70px] md:text-[100px] font-bold">
          {trainingschedule?.days || "Days Missing"}
        </p>
        <p className="text-yellow-200 text-[70px] sm:text-[120px] md:text-[180px] font-extrabold leading-none">
          {trainingschedule?.description || "Description Missing"}
        </p>
      </div>
    </section>
  );
}
