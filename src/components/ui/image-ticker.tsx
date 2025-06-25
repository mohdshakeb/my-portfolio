"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ImageTickerProps {
  className?: string;
}

export function ImageTicker({ className = "" }: ImageTickerProps) {
  // Create an array of 6 image items
  const items = [
    {
      src: "/images/ticker/image1.jpeg", 
      alt: "Project 1"
    },
    {
      src: "/images/ticker/image2.jpeg", 
      alt: "Project 2"
    },
    {
      src: "/images/ticker/image3.jpeg", 
      alt: "Project 3"
    },
    {
      src: "/images/ticker/image4.jpeg", 
      alt: "Project 4"
    },
    {
      src: "/images/ticker/image5.jpeg", 
      alt: "Project 5"
    },
    {
      src: "/images/ticker/image6.jpeg", 
      alt: "Project 6"
    }
  ];
  
  // Duplicate the items for the seamless loop
  const allItems = [...items, ...items];
  
  const tickerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;
    
    // Get the width of one set of items
    const tickerWidth = ticker.scrollWidth / 2;
    let currentPosition = 0;
    let animationId: number;
    
    const animate = () => {
      // Move the ticker left by 0.5px each frame
      currentPosition -= 0.5;
      
      // Reset position when we've moved one full set of items
      if (Math.abs(currentPosition) >= tickerWidth) {
        currentPosition = 0;
      }
      
      // Apply the transform
      ticker.style.transform = `translateX(${currentPosition}px)`;
      
      // Continue the animation
      animationId = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div 
        ref={tickerRef} 
        className="flex"
        style={{ willChange: "transform" }}
      >
        {allItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[320px] h-[320px] mx-3 relative overflow-hidden rounded-lg"
          >
            <Image 
              src={item.src}
              alt={item.alt}
              fill
              sizes="320px"
              className="object-cover"
              // Use placeholder images until real images are added
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QOQviwAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>
    </div>
  );
} 