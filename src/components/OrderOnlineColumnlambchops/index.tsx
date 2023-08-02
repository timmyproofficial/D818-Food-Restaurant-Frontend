import React from "react";

import { Button, Img, Text } from "components";

type OrderOnlineColumnlambchopsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "mealname" | "mealdescription" | "mealprice" | "addtocart"
> &
  Partial<{
    mealname: string;
    mealdescription: string;
    mealprice: string;
    addtocart: string;
  }>;

const OrderOnlineColumnlambchops: React.FC<OrderOnlineColumnlambchopsProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
          src="images/img_divlazyimage_3.png"
          alt="divlazyimage"
        />
        <Text
          className="mt-3.5 text-gray-900 text-xl"
          size="txtSnapITCRegular20"
        >
          {props?.mealname}
        </Text>
        <Text
          className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
          size="txtPoppinsRegular14Black900"
        >
          {props?.mealdescription}
        </Text>
        <Text
          className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtPoppinsSemiBold24"
        >
          {props?.mealprice}
        </Text>
        <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
          {props?.addtocart}
        </Button>
      </div>
    </>
  );
};

OrderOnlineColumnlambchops.defaultProps = {
  mealname: "Lamb Chops",
  mealdescription:
    "Grilled lamb chops with rosemary and garlic, served with a side of roasted root vegetables and a mixed green salad dressed in a balsamic vinaigrette.",
  mealprice: "£57.28",
};

export default OrderOnlineColumnlambchops;
