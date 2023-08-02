import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import LandingPageColumneforiro from "components/LandingPageColumneforiro";
import LandingPageColumnjollofrice from "components/LandingPageColumnjollofrice";
import LandingPageLandingpage from "components/LandingPageLandingpage";
import LandingPageStackrectangle4346 from "components/LandingPageStackrectangle4346";

const LandingPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <LandingPageLandingpage className="bg-gray-50 flex flex-col items-center justify-start w-full" />
        <div className="h-[332px] md:px-5 relative w-full">
          <Img
            className="h-[332px] m-auto object-cover w-full"
            src="images/img_unsplash2lwgq02dgl8.png"
            alt="unsplash2lwgqTwo"
          />
          <div className="absolute bottom-[22%] flex flex-col gap-[45px] inset-x-[0] items-center justify-start mx-auto w-[37%]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50 text-shadow-ts w-full"
              size="txtSnapITCRegular32"
            >
              First two meal per day is free
            </Text>
            <Button className="bg-red-700 cursor-pointer font-bold font-poppins h-[38px] leading-[normal] py-2 rounded-[19px] text-center text-gray-50 text-sm w-[122px]">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[45px] items-center justify-start max-w-[1097px] mt-[35px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start w-[48%] md:w-full">
            <div className="flex flex-col font-snapitc gap-1.5 items-center justify-start pb-[3px]">
              <Text
                className="text-2xl md:text-[22px] text-center text-red-700 sm:text-xl"
                size="txtSnapITCRegular24"
              >
                Our menu
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                size="txtSnapITCRegular32Gray900"
              >
                Top Weekly Meals
              </Text>
            </div>
            <Text
              className="text-[22px] text-blue_gray-700_b2 text-center sm:text-lg md:text-xl w-full"
              size="txtPoppinsRegular22"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <LandingPageColumnjollofrice className="bg-gray-100 flex md:flex-1 flex-col items-center justify-end p-[13px] rounded-[10px] w-[30%] md:w-full" />
            <LandingPageStackrectangle4346 className="h-[449px] relative w-[30%] md:w-full" />
            <LandingPageColumneforiro className="bg-gray-100 flex md:flex-1 flex-col items-center justify-end p-[13px] rounded-[10px] w-[30%] md:w-full" />
          </div>
          <Button className="bg-red-700 cursor-pointer font-bold h-[39px] leading-[normal] py-[9px] rounded-[19px] text-center text-gray-50 text-sm w-[136px]">
            More Menu
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1029px] mt-[35px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-center text-red-700 sm:text-xl"
              size="txtSnapITCRegular24"
            >
              How it works
            </Text>
            <Text
              className="mt-1 md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
              size="txtSnapITCRegular32Gray900"
            >
              How We Serve
            </Text>
            <Text
              className="mt-[19px] text-[22px] text-blue_gray-700_b2 text-center sm:text-lg md:text-xl w-3/5 sm:w-full"
              size="txtPoppinsMedium22"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[27px] w-full">
              <div className="flex md:flex-1 flex-col gap-8 justify-start w-[23%] md:w-full">
                <Img
                  className="h-[180px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[180px]"
                  src="images/img_order1.png"
                  alt="orderOne"
                />
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900"
                    size="txtSnapITCRegular28"
                  >
                    Easy To Order
                  </Text>
                  <Text
                    className="text-blue_gray-700_b2 text-center text-xl w-full"
                    size="txtPoppinsMedium20"
                  >
                    You only order through the app
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[27%] md:w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_delivery1.png"
                  alt="deliveryOne"
                />
                <Text
                  className="mt-[31px] sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900"
                  size="txtSnapITCRegular28"
                >
                  Fastest Delivery
                </Text>
                <Text
                  className="mt-[13px] text-blue_gray-700_b2 text-center text-xl w-[81%] sm:w-full"
                  size="txtPoppinsMedium20"
                >
                  Delivery will be on time
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-end justify-start w-[24%] md:w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[180px]"
                  src="images/img_courier1.png"
                  alt="courierOne"
                />
                <Text
                  className="mt-8 sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900"
                  size="txtSnapITCRegular28"
                >
                  Best Quality
                </Text>
                <Text
                  className="mt-3 text-blue_gray-700_b2 text-center text-xl w-full"
                  size="txtPoppinsMedium20"
                >
                  The best quality of food for you
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[59px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default LandingPagePage;
