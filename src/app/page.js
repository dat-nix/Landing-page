"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";

export default function Home() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      scroller.scrollTo(scrollTo, { smooth: true, duration: 500 });
    }
  }, [scrollTo]);

  return (
    <div>
      <section id="home" className="h-screen flex justify-center items-center bg-red-500 text-white text-5xl font-bold">
        <h1>Home Section</h1>
      </section>
      <section id="about" className="h-screen flex justify-center items-center bg-green-500 text-white text-5xl font-bold">
        <h1>About Section</h1>
      </section>
      <section id="contact" className="h-screen flex justify-center items-center bg-yellow-500 text-white text-5xl font-bold">
        <h1>Contact Section</h1>
      </section>
    </div>
  );
}
