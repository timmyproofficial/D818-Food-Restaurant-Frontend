import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const CheckoutReadyPage: React.FC = () => {
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
        <div className="flex flex-col items-center justify-start max-w-[1323px] mt-[30px] mx-auto md:px-5 w-full">
          <div className="md:h-52 h-[217px] sm:h-[332px] relative w-full">
            <div className="absolute bg-gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-11 md:px-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-end sm:px-5 px-[35px] w-[52%] md:w-full">
                <Img
                  className="h-[120px] w-[120px]"
                  src="images/img_successicon.svg"
                  alt="successicon"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtPoppinsBold24Gray900"
                  >
                    Order Delivered
                  </Text>
                  <Text
                    className="text-base text-gray-900"
                    size="txtPoppinsMedium16"
                  >
                    Order delivered successful
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-11 md:px-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-end sm:px-5 px-[35px] w-[52%] md:w-full">
                <Img
                  className="h-[120px] w-[120px]"
                  src="images/img_successicon.svg"
                  alt="successicon_One"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtPoppinsBold24Gray900"
                  >
                    Order Delivered
                  </Text>
                  <Text
                    className="text-base text-gray-900"
                    size="txtPoppinsMedium16"
                  >
                    Order delivered successful
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col gap-[17px] justify-center mt-3 p-[22px] sm:px-5 rounded-[10px] w-full">
            <Img
              className="h-[25px] mr-[1127px] mt-0.5"
              src="images/img_orderrating.svg"
              alt="orderrating"
            />
            <div className="flex flex-col items-start justify-start mb-1 w-[98%] md:w-full">
              <div className="flex flex-row gap-[18px] items-start justify-start w-[14%] md:w-full">
                <Text
                  className="text-[16.94px] text-black-900"
                  size="txtPoppinsMedium1694"
                >
                  Service{" "}
                </Text>
                <div className="flex flex-col items-center justify-start mt-1 w-auto">
                  <List
                    className="sm:flex-col flex-row grid grid-cols-5 justify-center w-auto"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] rounded-[1px] w-[17px]"
                        src="images/img_star1.svg"
                        alt="starOne"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] rounded-[1px] w-[17px]"
                        src="images/img_star1_17x17.svg"
                        alt="starOne"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] rounded-[1px] w-[17px]"
                        src="images/img_star1_1.svg"
                        alt="starOne"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] rounded-[1px] w-[17px]"
                        src="images/img_star1_2.svg"
                        alt="starOne"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[17px] rounded-[1px] w-[17px]"
                        src="images/img_star1_3.svg"
                        alt="starOne"
                      />
                    </div>
                  </List>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col items-start justify-start mt-5 p-[15px] rounded-[10px] w-full">
                <Img
                  className="h-5 mb-[95px] md:ml-[0] ml-[3px]"
                  src="images/img_addacommentoptional.svg"
                  alt="addacommentopti"
                />
              </div>
              <Img
                className="h-[38px] mt-[11px]"
                src="images/img_frame427319691.svg"
                alt="frame427319691"
              />
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start mt-5 p-[30px] sm:px-5 rounded-[10px] w-full">
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
                    <div className="flex md:flex-1 flex-row items-center justify-between mb-2.5 w-[38%] md:w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Status
                      </Text>
                      <Text
                        className="text-base text-gray-900 text-right"
                        size="txtPoppinsRegular16Gray900"
                      >
                        Delivered
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
          <div className="flex flex-col gap-[23px] items-center justify-start mt-[45px] w-[27%] md:w-full">
            <Text
              className="text-black-900 text-center text-xl"
              size="txtPoppinsSemiBold20Black900"
            >
              We are grateful for your pastorage.
            </Text>
            <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[196px] py-[11px] rounded-[23px] text-[15.75px] text-center text-white-A700_01">
              Menu Page
            </Button>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[30px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default CheckoutReadyPage;
