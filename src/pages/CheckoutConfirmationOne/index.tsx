import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const CheckoutConfirmationOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[25px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-row items-center justify-between mt-3 md:px-5 w-[30%] md:w-full">
          <div className="flex flex-col gap-[17px] items-center justify-start pb-0.5 w-[10%]">
            <Img className="h-6 w-6" src="images/img_file.svg" alt="file" />
            <Text
              className="text-center text-red-700 text-sm"
              size="txtPoppinsSemiBold14"
            >
              Order
            </Text>
          </div>
          <div className="flex flex-col gap-[17px] items-center justify-start pb-0.5 w-[23%]">
            <Img
              className="h-6"
              src="images/img_ticket_red_700.svg"
              alt="ticket"
            />
            <Text
              className="text-center text-red-700 text-sm"
              size="txtPoppinsSemiBold14"
            >
              Confirmation
            </Text>
          </div>
          <div className="flex flex-col gap-[19px] items-center justify-start w-[11%]">
            <Img
              className="h-6 w-6"
              src="images/img_checkmark_red_700.svg"
              alt="checkmark"
            />
            <Text
              className="text-center text-red-700 text-sm"
              size="txtPoppinsSemiBold14"
            >
              Ready
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1323px] mt-[18px] mx-auto md:px-5 w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-start p-[54px] md:px-10 sm:px-5 rounded-[10px] w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[90px] items-center justify-center mb-1 w-[53%] md:w-full">
              <Text
                className="md:text-5xl text-[64px] text-center text-gray-900"
                size="txtPoppinsSemiBold64"
              >
                00:43:36
              </Text>
              <div className="flex flex-col gap-[13px] items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                  size="txtPoppinsBold24Gray900"
                >
                  Payment Confirmed
                </Text>
                <Text
                  className="text-base text-center text-gray-900"
                  size="txtPoppinsMedium16"
                >
                  Your order will be ready in 45min
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col justify-start w-[59%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Your order
                    </Text>
                    <Line className="bg-gray-50 h-px ml-8 md:ml-[0] mr-[11px] mt-[30px] w-[95%]" />
                    <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[18px] mt-7 w-[98%] md:w-full">
                      <Text
                        className="mt-0.5 text-gray-900 text-xl"
                        size="txtPoppinsMedium20Gray900"
                      >
                        1 x Fish Fingers
                      </Text>
                      <Text
                        className="mb-0.5 text-center text-gray-900 text-xl"
                        size="txtPoppinsMedium20Gray900"
                      >
                        £57.28
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row items-start justify-between md:mt-0 mt-[66px] pt-0.5 w-[37%] md:w-full">
                    <Text
                      className="text-center text-gray-900 text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      Order Type
                    </Text>
                    <Text
                      className="mt-0.5 text-base text-gray-900 text-right"
                      size="txtPoppinsRegular16Gray900"
                    >
                      Delivery
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between ml-1 md:ml-[0] w-full">
                    <div className="flex md:flex-1 flex-row sm:gap-10 items-center justify-between w-[59%] md:w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtPoppinsMedium20Gray900"
                      >
                        2 x French Fries
                      </Text>
                      <Text
                        className="text-center text-gray-900 text-xl"
                        size="txtPoppinsMedium20Gray900"
                      >
                        £54.56
                      </Text>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-3 items-start justify-start w-[38%] md:w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Delivery Address
                      </Text>
                      <Text
                        className="text-base text-gray-900 text-right"
                        size="txtPoppinsRegular16Gray900"
                      >
                        <>
                          34 Blackthorn Local Centre,
                          <br />
                          Nottingham, United Kingdom
                        </>
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-50 h-px md:ml-[0] ml-[18px] mt-[22px] w-[57%]" />
                  <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between ml-1 md:ml-[0] mt-[27px] w-full">
                    <div className="flex md:flex-1 flex-row sm:gap-10 items-start justify-between pr-1.5 w-[59%] md:w-full">
                      <Text
                        className="mt-0.5 text-center text-gray-900 text-xl"
                        size="txtPoppinsMedium20Gray900"
                      >
                        Delivery Fee
                      </Text>
                      <Text
                        className="mb-0.5 text-center text-gray-900 text-xl"
                        size="txtPoppinsMedium20Gray900"
                      >
                        £9.99
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-row items-start justify-between pt-0.5 w-[38%] md:w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Payment
                      </Text>
                      <Text
                        className="text-base text-gray-900 text-right"
                        size="txtPoppinsRegular16Gray900"
                      >
                        Card
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-50 h-px md:ml-[0] ml-[18px] mt-7 w-[57%]" />
                  <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between mt-[17px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start md:mt-0 mt-[11px] w-[59%] md:w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Sub-Total
                        </Text>
                        <Text
                          className="text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          £121.83
                        </Text>
                      </div>
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="mt-0.5 text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Tip
                        </Text>
                        <Text
                          className="mb-0.5 text-gray-900 text-right text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          £5.59
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[81px] items-start justify-start w-[38%] md:w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Customer
                      </Text>
                      <Text
                        className="text-base text-gray-900 text-right"
                        size="txtPoppinsRegular16Gray900"
                      >
                        <>
                          Customers name
                          <br />
                          Phone number
                          <br />
                          Mail
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between mt-[18px] w-full">
                    <div className="flex md:flex-1 flex-row sm:gap-10 items-center justify-between md:mt-0 mt-[9px] w-[59%] md:w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Taxes
                      </Text>
                      <Text
                        className="text-center text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        £0
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-row items-end justify-between mb-2.5 w-[38%] md:w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Status
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-gray-900 text-right"
                        size="txtPoppinsRegular16Gray900"
                      >
                        Pending
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-center justify-between mt-[29px] py-[5px] w-[59%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtPoppinsBold24Gray900"
                    >
                      Total
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                      size="txtPoppinsBold24Gray900"
                    >
                      £127.42
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-8 md:px-5 w-full" />
      </div>
    </>
  );
};

export default CheckoutConfirmationOnePage;
