"use client";
import { useEffect, useRef, useState } from "react";

const StorySection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const containerRef = useRef();

useEffect(()=>{
  const container = containerRef.current
  if(container){
    const updateMaxScroll =()=>{
      setMaxScroll(container.scrollWidth = container.offsetWidth)
    }
  }

})

  return <div>StorySection</div>;
};

export default StorySection;
