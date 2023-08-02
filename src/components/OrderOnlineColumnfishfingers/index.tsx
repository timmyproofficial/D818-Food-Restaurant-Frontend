import React from "react";

import { Button, Img, Text } from "components";

type OrderOnlineColumnfishfingersProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "mealname" | "mealdescription" | "mealprice" | "addtocart"
> &
  Partial<{
    mealname: string;
    mealdescription: string;
    mealprice: string;
    addtocart: string;
  }>;

const OrderOnlineColumnfishfingers: React.FC<
  OrderOnlineColumnfishfingersProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
          src="images/img_divlazyimage_6.png"
          alt="divlazyimage"
        />
        <Text
          className="mt-3.5 text-center text-gray-900 text-xl"
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

OrderOnlineColumnfishfingers.defaultProps = {
  mealname: "Fish Fingers",
  mealdescription:
    "Classic fish fingers with tartar sauce, served with a side of oven-baked potato wedges and a mixed green salad.",
  mealprice: "£57.28",
};

export default OrderOnlineColumnfishfingers;
