import React from "react";

import { Button, Img, Text } from "components";

type OrderOnlineColumnlanguageProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "foodname" | "fooddescription" | "foodprice" | "addtocart"
> &
  Partial<{
    foodname: string;
    fooddescription: string;
    foodprice: string;
    addtocart: string;
  }>;

const OrderOnlineColumnlanguage: React.FC<OrderOnlineColumnlanguageProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
          src="images/img_divlazyimage_5.png"
          alt="divlazyimage"
        />
        <Text
          className="mt-3 text-center text-gray-900 text-xl"
          size="txtSnapITCRegular20"
        >
          {props?.foodname}
        </Text>
        <Text
          className="leading-[20.00px] mt-3 text-black-900 text-center text-sm w-full"
          size="txtPoppinsRegular14Black900"
        >
          {props?.fooddescription}
        </Text>
        <Text
          className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtPoppinsSemiBold24"
        >
          {props?.foodprice}
        </Text>
        <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
          {props?.addtocart}
        </Button>
      </div>
    </>
  );
};

OrderOnlineColumnlanguage.defaultProps = {
  foodname: "French Fries",
  fooddescription:
    "English-style fish and chips, featuring battered cod fillets and a side of thick-cut French fries, served with tartar sauce and malt vinegar.",
  foodprice: "£27.28",
};

export default OrderOnlineColumnlanguage;
