import React from "react";

import { Button, Img, Text } from "components";

type LandingPageLandingpageProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "logotext"
  | "hometext"
  | "orderNow"
  | "contactUs"
  | "languagetext"
  | "downloadapptext"
> &
  Partial<{
    logotext: JSX.Element | string;
    hometext: string;
    orderNow: string;
    contactUs: string;
    languagetext: string;
    downloadapptext: string;
  }>;

const LandingPageLandingpage: React.FC<LandingPageLandingpageProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[817px] relative w-full">
          <Img
            className="absolute h-[817px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_rectangle8.png"
            alt="rectangleEight"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto pr-3.5 top-[0] w-[92%]">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-700_b2 text-center sm:text-xl w-[5%] sm:w-full"
              size="txtPoppinsExtraBold24"
            >
              {props?.logotext}
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[619px] md:mt-0 mt-[30px]">
              <Text
                className="text-[15px] text-red-700 tracking-[0.60px]"
                size="txtPoppinsBold15"
              >
                {props?.hometext}
              </Text>
            </div>
            <Button className="bg-transparent cursor-pointer font-medium font-poppins leading-[normal] min-w-[88px] md:ml-[0] ml-[39px] md:mt-0 mt-[30px] text-[15px] text-center text-gray-50 tracking-[0.60px]">
              {props?.orderNow}
            </Button>
            <Button className="bg-transparent cursor-pointer font-medium font-poppins leading-[normal] min-w-[89px] ml-10 md:ml-[0] md:mt-0 mt-[30px] text-[15px] text-center text-gray-50 tracking-[0.60px]">
              {props?.contactUs}
            </Button>
            <div className="flex flex-row gap-2.5 items-center justify-center ml-10 md:ml-[0] md:mt-0 mt-[30px] w-[8%] md:w-full">
              <Text
                className="text-[15px] text-gray-50 tracking-[0.60px]"
                size="txtPoppinsMedium15Gray50"
              >
                {props?.languagetext}
              </Text>
              <Img
                className="h-[17px] w-[17px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[39px] md:mt-0 mt-[30px]">
              <Text
                className="text-[15px] text-gray-50 tracking-[0.60px]"
                size="txtPoppinsMedium15Gray50"
              >
                {props?.downloadapptext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageLandingpage.defaultProps = {
  logotext: (
    <>
      Logo
      <br />
      Here
    </>
  ),
  hometext: "Home",
  languagetext: "Account ",
  downloadapptext: "Download The App",
};

export default LandingPageLandingpage;
