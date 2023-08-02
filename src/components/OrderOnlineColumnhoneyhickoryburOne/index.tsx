import React from "react";

import { Button, Img, Text } from "components";

type OrderOnlineColumnhoneyhickoryburOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "userdescription" | "userprice" | "addtocart"
> &
  Partial<{
    username: string;
    userdescription: string;
    userprice: string;
    addtocart: string;
  }>;

const OrderOnlineColumnhoneyhickoryburOne: React.FC<
  OrderOnlineColumnhoneyhickoryburOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
          src="images/img_divlazyimage_214x283.png"
          alt="divlazyimage"
        />
        <Text
          className="mt-3.5 text-gray-900 text-xl"
          size="txtSnapITCRegular20"
        >
          {props?.username}
        </Text>
        <Text
          className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
          size="txtPoppinsRegular14Black900"
        >
          {props?.userdescription}
        </Text>
        <Text
          className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtPoppinsSemiBold24"
        >
          {props?.userprice}
        </Text>
        <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-1.5 min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
          {props?.addtocart}
        </Button>
      </div>
    </>
  );
};

OrderOnlineColumnhoneyhickoryburOne.defaultProps = {
  username: "Honey Hickory Burger",
  userdescription:
    "Charbroiled with crispy fried onions, cheddar cheese, crisp smoked bacon, jalapeños and honey hickory BBQ sauce.",
  userprice: "£37.28",
};

export default OrderOnlineColumnhoneyhickoryburOne;
