import React from "react";

import { Button, Img, Text } from "components";

type LandingPageColumnjollofriceProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "foodname" | "fooddescription" | "foodprice" | "addtochat"
> &
  Partial<{
    foodname: string;
    fooddescription: string;
    foodprice: string;
    addtochat: string;
  }>;

const LandingPageColumnjollofrice: React.FC<
  LandingPageColumnjollofriceProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[222px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-[99%] md:w-full"
          src="images/img_divlazyimage.png"
          alt="divlazyimage"
        />
        <Text
          className="mt-[13px] sm:text-[16.78px] md:text-[18.78px] text-[20.78px] text-gray-900"
          size="txtSnapITCRegular2078"
        >
          {props?.foodname}
        </Text>
        <Text
          className="leading-[20.00px] mt-3 text-[14.55px] text-center text-gray-900 w-[99%] sm:w-full"
          size="txtPoppinsRegular1455"
        >
          {props?.fooddescription}
        </Text>
        <Text
          className="mt-[13px] sm:text-[20.94px] md:text-[22.94px] text-[24.94px] text-gray-900"
          size="txtPoppinsSemiBold2494"
        >
          {props?.foodprice}
        </Text>
        <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[117px] mt-2 py-1.5 rounded-[14px] text-[9.4px] text-center text-gray-50">
          {props?.addtochat}
        </Button>
      </div>
    </>
  );
};

LandingPageColumnjollofrice.defaultProps = {
  foodname: "Jollof Rice",
  fooddescription:
    "A flavorful one-pot rice dish cooked with tomatoes, peppers, onions, and spices. It is often served with fried plantains....",
  foodprice: "£37.28",
  addtochat: "Add To Chat",
};

export default LandingPageColumnjollofrice;
