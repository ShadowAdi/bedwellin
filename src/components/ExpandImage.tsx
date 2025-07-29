"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const ExpandImage = ({
  imgUrl,
  isHovered,
  onHover,
  onLeave,
  totalImages,
  hoveredIndex,
  name,
  description,
  stays,
  isMobile,
  isClicked,
  onClickMobile,
}: {
  imgUrl: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  totalImages: number;
  hoveredIndex: number | null;
  name: string;
  description: string;
  stays: string;
  isMobile: boolean;
  isClicked: boolean;
  onClickMobile: () => void;
}) => {
  const getFlexBasis = () => {
    if (isMobile) return "auto";

    if (hoveredIndex === null) return `${100 / totalImages}%`;
    if (isHovered) return "50%";

    const remainingSpace = 59;
    const otherImagesCount = totalImages - 1;
    return `${remainingSpace / otherImagesCount}%`;
  };

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={isMobile ? onClickMobile : undefined}
      className={`relative ${
        isMobile
          ? "w-full transition-all duration-500"
          : "cursor-pointer transition-all duration-700 ease-linear flex-shrink-0"
      } overflow-hidden`}
      style={{
        flexBasis: getFlexBasis(),
        height: isMobile ? (isClicked ? "200px" : "180px") : "440px",
        minWidth: isMobile ? "100%" : "40px",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage: `url(${imgUrl})`,
          filter:
            hoveredIndex === null
              ? "brightness(0.6)"
              : isHovered
              ? "brightness(0.8)"
              : "brightness(0.4)",
          zIndex: 0,
        }}
      />

      {(isHovered || isClicked) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black/50 z-10"
        />
      )}

      <div className="absolute inset-0 flex items-end justify-start px-3 py-12 z-20">
        {isHovered || isClicked ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white text-lg relative space-y-2 font-semibold text-left flex items-center justify-center h-full w-full flex-col"
          >
            <h4 className="text-lg font-semibold text-center">
              Explore {name}
            </h4>
            <p className="text-base font-light text-center">{description}</p>
            <Badge className="rounded-full px-3 py-2 bg-[#a855f7] text-white">
              {stays}
            </Badge>
          </motion.div>
        ) : (
          <div className="h-full flex items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={`text-white text-2xl font-semibold whitespace-nowrap ${
                isMobile ? "" : "rotate-180"
              }`}
              style={
                isMobile
                  ? {}
                  : {
                      writingMode: "vertical-lr",
                      textOrientation: "mixed",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }
              }
            >
              {name}
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExpandImage;
