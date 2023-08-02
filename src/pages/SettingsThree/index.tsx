import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const SettingsThreePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[15px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1091px] mt-[39px] mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[1.68px]"
              size="txtPoppinsSemiBold24Gray900"
            >
              Wallets
            </Text>
            <Text
              className="common-pointer text-base text-gray-900 tracking-[1.12px]"
              size="txtPoppinsRegular16Gray900"
              onClick={() => navigate("/settingsone")}
            >
              Back
            </Text>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start max-w-[984px] mt-[17px] mx-auto p-9 md:px-5 rounded-[10px] w-full">
            <div className="flex flex-col gap-5 items-start justify-start my-[3px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Payment
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsRegular16Black900"
                >
                  Choose payment method
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-5 w-full">
                  <div className="bg-gray-50 border border-red-700 border-solid flex flex-row items-center justify-start p-3.5 rounded-[29px]">
                    <Img
                      className="h-[23px] ml-1.5 w-[23px]"
                      src="images/img_streamlinemone.svg"
                      alt="streamlinemone"
                    />
                    <Text
                      className="ml-[15px] text-[19.14px] text-black-900"
                      size="txtPoppinsSemiBold1914"
                    >
                      Card
                    </Text>
                    <div className="bg-amber-A400 h-[15px] ml-7 my-1.5 rounded-[7px] w-[15px]"></div>
                  </div>
                  <div className="bg-gray-50 flex flex-row gap-3 items-center justify-center p-3.5 rounded-[7px]">
                    <div className="flex flex-row gap-4 items-start justify-center ml-[7px] w-[71%]">
                      <Img
                        className="h-[23px]"
                        src="images/img_logospaypal.svg"
                        alt="logospaypal"
                      />
                      <Text
                        className="text-[19.14px] text-black-900"
                        size="txtPoppinsSemiBold1914"
                      >
                        Paypal
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[15px] mr-[5px] my-1.5 rounded-[7px] w-[15px]"></div>
                  </div>
                  <div className="bg-gray-50 flex flex-row items-center justify-center p-[13px] rounded-[7px]">
                    <Img
                      className="h-[23px] ml-2 w-[23px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-[15px] mt-[3px] text-[19.14px] text-black-900"
                      size="txtPoppinsSemiBold1914"
                    >
                      Stripe
                    </Text>
                    <div className="bg-gray-100 h-[15px] ml-5 mr-[7px] my-2 rounded-[7px] w-[15px]"></div>
                  </div>
                  <Img
                    className="h-[59px]"
                    src="images/img_frame427319879.svg"
                    alt="frame427319879"
                  />
                  <div className="bg-gray-50 flex md:flex-1 flex-row items-center justify-between p-4 rounded-[7px] w-1/5 md:w-full">
                    <Img
                      className="h-6 ml-[5px]"
                      src="images/img_logosgooglepay.svg"
                      alt="logosgooglepay"
                    />
                    <div className="bg-gray-100 h-[15px] mr-[3px] my-1 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-[77%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <div className="bg-gray-50 flex flex-col items-center justify-start p-2.5 rounded-[22px] w-full">
                    <div className="flex flex-row items-end justify-between mb-[3px] w-[95%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[13.31px] text-center text-gray-900"
                          size="txtPoppinsMedium1331"
                        >
                          Master card
                        </Text>
                        <Text
                          className="mt-[3px] text-[17.75px] text-center text-gray-900"
                          size="txtPoppinsLight1775"
                        >
                          **** **** **** 5862
                        </Text>
                        <div className="flex flex-row gap-[57px] items-start justify-end w-[74%] md:w-full">
                          <Text
                            className="text-[13.31px] text-center text-gray-900"
                            size="txtPoppinsRegular1331"
                          >
                            08/24
                          </Text>
                          <Text
                            className="text-[13.31px] text-center text-gray-900"
                            size="txtPoppinsRegular1331"
                          >
                            895
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[62px] mb-1 mt-[7px]"
                        src="images/img_logosmastercard.svg"
                        alt="logosmastercard"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="common-pointer h-[46px] w-[46px]"
                  src="images/img_plus_gray_50.svg"
                  alt="plus"
                  onClick={() => navigate("/settings")}
                />
              </div>
            </div>
          </div>
          <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[196px] mt-[37px] py-[11px] rounded-[23px] text-[15.75px] text-center text-white-A700_01">
            Menu Page
          </Button>
          <div className="h-[489px] md:h-[552px] mt-[63px] md:px-5 relative w-full">
            <Line className="bg-gray-100 h-[5px] mt-[165px] mx-auto w-[21%]" />
            <Footer className="absolute flex inset-[0] items-center justify-center m-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsThreePage;
