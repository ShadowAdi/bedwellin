import React from "react";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { Star } from "lucide-react";

const CustomReviewCard = ({
  cardDescription,
  profileLetter,
  profileName,
  countryName,
  profileColor,
  profileTextColor,
}: {
  cardDescription: string;
  profileLetter: string;
  profileName: string;
  countryName: string;
  profileColor: string;
  profileTextColor: string;
}) => {
  return (
    <Card className="px-4 flex flex-col gap-3 max-w-[320px] lg:max-w-[360px]">
      <CardHeader className="p-0 mb-0 flex items-center justify-start">
        <Star className="h-6 w-6 text border-transparent outline-transparent fill-[#fbbf24] text-transparent" />
        <Star className="h-6 w-6 text border-transparent outline-transparent fill-[#fbbf24] text-transparent" />
        <Star className="h-6 w-6 text border-transparent outline-transparent fill-[#fbbf24] text-transparent" />
        <Star className="h-6 w-6 text border-transparent outline-transparent fill-[#fbbf24] text-transparent" />
        <Star className="h-6 w-6 text border-transparent outline-transparent fill-[#fbbf24] text-transparent" />
      </CardHeader>
      <CardDescription className="text-black text-sm">
        {cardDescription}
      </CardDescription>
      <CardFooter className="flex px-0 gap-x-2 items-center w-full justify-start">
        <div
        style={{backgroundColor:profileColor}}
          className={`h-10 w-10 rounded-full flex items-center justify-center `}
        >
          <span className={`text-sm text-[${profileTextColor}]`}>
            {profileLetter}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium text-black">{profileName}</span>
          <span className="text-xs text-[#94a3b8]">{countryName}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CustomReviewCard;
