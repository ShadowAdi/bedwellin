"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomReviewCard from "./CustomReviewCard";
import { reviews } from "@/lib/data";
const ReviewSection = () => {
  return (
    <section className="relative w-full max-w-[1440px] px-4 sm:px-14 flex flex-col lg:flex-row py-24 md:py-10 gap-10 lg:gap-6">
      <div className="lg:w-2/3 w-full md:sticky top-20 self-start h-fit">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl lg:text-5xl font-bold md:text-left text-center">
            What guests are saying
          </h1>
          <p className="text-lg text-gray-600 md:text-left text-center">
            Real experiences from travelers who chose Bedwell in their journeys.
          </p>
        </motion.div>
      </div>
      <div className="lg:w-full flex flex-col gap-10 mb-5 items-center md:items-end">
        {[0, 1, 2].map((groupIdx) => (
          <motion.div
            key={groupIdx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: groupIdx * 0.15,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row gap-6"
          >
            {reviews
              .slice(groupIdx * 2, groupIdx * 2 + 2)
              .map((review, idx) => (
                <CustomReviewCard key={idx} {...review} />
              ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
