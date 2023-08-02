import React from "react";

import { Button, Img, Text } from "components";

type LandingPageColumneforiroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "foodname" | "fooddescription" | "foodprice" | "addtochat"
> &
  Partial<{
    foodname: string;
    fooddescription: string;
    foodprice: string;
    addtochat: string;
  }>;

const LandingPageColumneforiro: React.FC<LandingPageColumneforiroProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[221px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-[99%] md:w-full"
          src="images/img_divlazyimage_1.png"
          alt="divlazyimage_Two"
        />
        <Text
          className="mt-[13px] sm:text-[16.71px] md:text-[18.71px] text-[20.71px] text-gray-900"
          size="txtSnapITCRegular2071"
        >
          {props?.foodname}
        </Text>
        <Text
          className="leading-[20.00px] mt-3 text-[14.5px] text-center text-gray-900 w-[99%] sm:w-full"
          size="txtPoppinsRegular145"
        >
          {props?.fooddescription}
        </Text>
        <Text
          className="mt-3 sm:text-[20.85px] md:text-[22.85px] text-[24.85px] text-gray-900"
          size="txtPoppinsSemiBold2485"
        >
          {props?.foodprice}
        </Text>
        <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[117px] mt-[9px] py-1.5 rounded-[13px] text-[9.37px] text-center text-gray-50">
          {props?.addtochat}
        </Button>
      </div>
    </>
  );
};

LandingPageColumneforiro.defaultProps = {
  foodname: "Efo Riro",
  fooddescription:
    "A vegetable soup made with a variety of leafy greens such as spinach, amaranth, or pumpkin leaves. It is often..",
  foodprice: "£57.28",
  addtochat: "Add To Chat",
};

export default LandingPageColumneforiro;
