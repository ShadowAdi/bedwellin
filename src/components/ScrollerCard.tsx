import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const ScrollerCard = ({
  title,
  description,
  src,
  color,
  i,
  progress,
  targetScale,
  range,
}: {
  title: string;
  description: string;
  src: string;
  color: string;
  i: number;
  progress: MotionValue<number>;
  targetScale: number;
  range: [number, number];
}) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(progress, range, [1.05, 1]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="flex flex-col relative h-[400px] lg:h-[500px] w-[1200px] lg:w-[1000px] rounded-[25px] p-3 lg:p-[50px] space-y-5 lg:space-y-10"
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
          scale: scale,
        }}
      >
        <h2 className="text-center m-0 text-[28px]">{title}</h2>

        <div className="flex h-full flex-col lg:flex-row   gap-[50px]">
          <div className="w-full lg:w-[40%] relative top-[10%]">
            <p className="text-[16px] [&::first-letter]:text-[28px] [&::first-letter]:font-['Title'] text-center lg:text-left">
              {description}
            </p>
          </div>

          <div className="relative w-full lg:w-[60%] h-full rounded-[25px] overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image fill src={src} alt="image" className="object-contain" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollerCard;
