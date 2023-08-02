import React from "react";

import { Button, Img, Text } from "components";

type LandingPageStackrectangle4346Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "dishname" | "dishdescription" | "dishprice" | "addtochat"
> &
  Partial<{
    dishname: string;
    dishdescription: string;
    dishprice: string;
    addtochat: string;
  }>;

const LandingPageStackrectangle4346: React.FC<
  LandingPageStackrectangle4346Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-gray-100 h-[449px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[91%]">
          <Img
            className="h-[221px] sm:h-auto object-cover w-full"
            src="images/img_divlazyimage_221x293.png"
            alt="divlazyimage_One"
          />
          <Text
            className="mt-3.5 sm:text-[16.71px] md:text-[18.71px] text-[20.71px] text-gray-900"
            size="txtSnapITCRegular2071"
          >
            {props?.dishname}
          </Text>
          <Text
            className="leading-[20.00px] mt-[11px] text-[14.5px] text-center text-gray-900 w-full"
            size="txtPoppinsRegular145"
          >
            {props?.dishdescription}
          </Text>
          <Text
            className="mt-3 sm:text-[20.85px] md:text-[22.85px] text-[24.85px] text-gray-900"
            size="txtPoppinsSemiBold2485"
          >
            {props?.dishprice}
          </Text>
          <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[117px] mt-[9px] py-1.5 rounded-[13px] text-[9.37px] text-center text-gray-50">
            {props?.addtochat}
          </Button>
        </div>
      </div>
    </>
  );
};

LandingPageStackrectangle4346.defaultProps = {
  dishname: "Egusi Soup",
  dishdescription:
    "A thick soup made from ground melon seeds, vegetables, and assorted meats or fish. It is commonly eaten with...",
  dishprice: "£27.28",
  addtochat: "Add To Chat",
};

export default LandingPageStackrectangle4346;
