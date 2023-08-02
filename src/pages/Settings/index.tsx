import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[15px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1095px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="h-9 relative w-[10%]">
              <Text
                className="m-auto text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[1.68px]"
                size="txtPoppinsSemiBold24Gray900"
              >
                Wallets
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[1.68px] w-max"
                size="txtPoppinsSemiBold24Gray900"
              >
                Wallets
              </Text>
            </div>
            <Text
              className="common-pointer text-base text-gray-900 tracking-[1.12px]"
              size="txtPoppinsRegular16Gray900"
              onClick={() => navigate("/settingsthree")}
            >
              Back
            </Text>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start max-w-[984px] mt-[17px] mx-auto p-[35px] md:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-start justify-start my-1 w-full">
              <div className="flex flex-col font-poppins items-start justify-start w-full">
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
                  <div
                    className="common-pointer bg-gray-50 border border-red-700 border-solid flex flex-row items-center justify-start p-3.5 rounded-[29px]"
                    onClick={() => navigate("/checkoutordercard")}
                  >
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
                  <div
                    className="common-pointer bg-gray-50 flex flex-row gap-3 items-center justify-center p-3.5 rounded-[7px]"
                    onClick={() => navigate("/checkoutorderpaypal")}
                  >
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
                  <div
                    className="common-pointer bg-gray-50 flex flex-row items-center justify-center p-[13px] rounded-[7px]"
                    onClick={() => navigate("/checkoutorderstripe")}
                  >
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
                    className="common-pointer h-[59px]"
                    src="images/img_frame427319879.svg"
                    alt="frame427319879"
                    onClick={() => navigate("/checkoutorderapplepay")}
                  />
                  <div
                    className="common-pointer bg-gray-50 flex md:flex-1 flex-row items-center justify-between p-4 rounded-[7px] w-1/5 md:w-full"
                    onClick={() => navigate("/checkoutordergooglepay")}
                  >
                    <Img
                      className="h-6 ml-[5px]"
                      src="images/img_logosgooglepay.svg"
                      alt="logosgooglepay"
                    />
                    <div className="bg-gray-100 h-[15px] mr-[3px] my-1 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-inter gap-[30px] items-center justify-between mt-[18px] w-full">
                <div className="flex sm:flex-1 flex-col gap-[3.06px] items-start justify-start md:mt-0 mt-0.5 w-auto sm:w-full">
                  <div className="flex flex-col font-inter items-start justify-start pr-[2.48px] w-auto">
                    <Text
                      className="text-[14.22px] text-gray-900 w-auto"
                      size="txtInterBold1422"
                    >
                      <span className="text-gray-900 font-poppins text-left font-bold">
                        Cardholder Name{" "}
                      </span>
                      <span className="text-red-A700 font-poppins text-left font-bold">
                        {" "}
                        *
                      </span>
                    </Text>
                  </div>
                  <Input
                    name="inputemailone"
                    placeholder="Enter Cardholder’s Name"
                    className="font-poppins leading-[normal] p-0 placeholder:text-blue_gray-100 sm:pr-5 text-[17.5px] text-blue_gray-100 text-left tracking-[1.09px] w-full"
                    wrapClassName="bg-white-A700_01 border border-blue_gray-100 border-solid pl-[17px] pr-[35px] py-3 rounded-[10px] w-full"
                    type="text"
                  ></Input>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[3.06px] items-start justify-start mb-0.5 w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.04px] w-auto">
                    <Text
                      className="text-[14.22px] text-gray-900 w-auto"
                      size="txtInterBold1422"
                    >
                      <span className="text-gray-900 font-poppins text-left font-bold">
                        Card Number{" "}
                      </span>
                      <span className="text-red-A700 font-poppins text-left font-bold">
                        {" "}
                        *
                      </span>
                    </Text>
                  </div>
                  <div className="bg-white-A700_01 border border-blue_gray-100 border-solid flex flex-col font-poppins items-start justify-start px-[17.5px] py-[12.03px] rounded-[10px] w-[441px] sm:w-full">
                    <Input
                      name="divplaceholder"
                      placeholder="Enter Card Number"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-[17.5px] text-blue_gray-100 text-left tracking-[1.09px] w-full"
                      wrapClassName="w-[46%]"
                      type="number"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-inter gap-[30px] items-center justify-between mt-[17px] w-full">
                <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[49%] md:w-full">
                  <div className="flex flex-col gap-[3.06px] items-start justify-start w-auto">
                    <div className="flex flex-col font-inter items-start justify-start pr-[1.04px] w-auto">
                      <Text
                        className="text-[14.22px] text-gray-900 w-auto"
                        size="txtInterBold1422"
                      >
                        <span className="text-gray-900 font-poppins text-left font-bold">
                          Expiration Date{" "}
                        </span>
                        <span className="text-red-A700 font-poppins text-left font-bold">
                          *
                        </span>
                      </Text>
                    </div>
                    <Input
                      name="inputemailconfi"
                      placeholder="mm/yy"
                      className="font-poppins leading-[normal] p-0 placeholder:text-blue_gray-100 sm:pr-5 text-[17.5px] text-blue_gray-100 text-left tracking-[1.09px] w-full"
                      wrapClassName="bg-white-A700_01 border border-blue_gray-100 border-solid pl-[17px] pr-[35px] py-3 rounded-[10px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[48%] sm:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row font-inter items-center justify-start w-[26%] md:w-full">
                        <div className="flex flex-col items-start justify-start pr-[1.04px] w-auto">
                          <Text
                            className="text-[14.22px] text-gray-900 w-auto"
                            size="txtInterBold1422"
                          >
                            <span className="text-gray-900 font-poppins text-left font-bold">
                              CVV{" "}
                            </span>
                            <span className="text-red-A700 font-poppins text-left font-bold">
                              *
                            </span>
                          </Text>
                        </div>
                        <div className="font-poppins h-[11px] relative w-[17%]">
                          <div className="absolute bg-red-A700 h-[9px] inset-[0] justify-center m-auto rounded w-[9px]"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[7.16px] text-center text-white-A700_01 w-max"
                            size="txtPoppinsBold716"
                          >
                            i
                          </Text>
                        </div>
                      </div>
                      <Input
                        name="inputemailconfi_One"
                        placeholder="***"
                        className="font-poppins leading-[normal] p-0 placeholder:text-blue_gray-100 sm:pr-5 text-[17.5px] text-blue_gray-100 text-left tracking-[1.09px] w-full"
                        wrapClassName="bg-white-A700_01 border border-blue_gray-100 border-solid mt-0.5 pb-[15px] pl-[17px] pr-[35px] pt-3 rounded-[10px] w-full"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[3.06px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.04px] w-auto">
                    <Text
                      className="text-[14.22px] text-gray-900 w-auto"
                      size="txtInterBold1422"
                    >
                      <span className="text-gray-900 font-poppins text-left font-bold">
                        Billing Address{" "}
                      </span>
                      <span className="text-red-A700 font-poppins text-left font-bold">
                        {" "}
                        *
                      </span>
                    </Text>
                  </div>
                  <div className="bg-white-A700_01 border border-blue_gray-100 border-solid flex flex-col font-poppins items-start justify-start px-[17.5px] py-[12.03px] rounded-[10px] w-[443px] sm:w-full">
                    <Input
                      name="divplaceholder_One"
                      placeholder="Enter Billing Address"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-[17.5px] text-blue_gray-100 text-left tracking-[1.09px] w-full"
                      wrapClassName="pt-0.5 w-[49%]"
                    ></Input>
                  </div>
                </div>
              </div>
              <Text
                className="ml-1 md:ml-[0] mt-6 text-[16.56px] text-gray-900"
                size="txtInterBold1656"
              >
                <span className="text-red-A700 font-inter text-left font-bold">
                  {" "}
                  *
                </span>
                <span className="text-gray-900 font-inter text-left font-bold">
                  {" "}
                </span>
                <span className="text-gray-900 font-poppins text-left font-light">
                  This field is mandatory
                </span>
              </Text>
              <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[162px] md:ml-[0] ml-[375px] mt-[21px] py-[9px] rounded-[19px] text-[13.03px] text-center text-white-A700_01">
                Save
              </Button>
            </div>
          </div>
          <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[196px] mt-[38px] py-[11px] rounded-[23px] text-[15.75px] text-center text-white-A700_01">
            Menu Page
          </Button>
          <Line className="bg-gray-100 h-[5px] mt-[38px] w-[21%]" />
          <Footer className="flex items-center justify-center mt-3.5 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
