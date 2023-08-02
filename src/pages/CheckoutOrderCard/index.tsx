import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const CheckoutOrderCardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[25px] w-full">
        <div className="flex flex-col gap-[35px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1332px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[9px] w-full" />
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[9px] w-[66%] md:w-full">
              <Img
                className="common-pointer h-[54px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
                onClick={() => navigate(-1)}
              />
              <div className="flex flex-row items-center justify-between sm:mt-0 mt-[3px] w-[49%] sm:w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start pb-0.5 w-[10%]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_file.svg"
                    alt="file"
                  />
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
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-center text-gray-900 text-sm"
                    size="txtPoppinsSemiBold14Gray900"
                  >
                    Confirmation
                  </Text>
                </div>
                <div className="flex flex-col gap-[19px] items-center justify-start w-[11%]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="text-center text-gray-900 text-sm"
                    size="txtPoppinsSemiBold14Gray900"
                  >
                    Ready
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-between md:ml-[0] ml-[5px] mt-[18px] w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-3/4 md:w-full">
                <div className="bg-gray-100 flex flex-col items-start justify-center p-[35px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-col font-poppins items-start justify-start mt-2 w-full">
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
                  <div className="flex md:flex-col flex-row font-inter gap-[30px] items-center justify-start mt-[15px] w-full">
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
                  <div className="flex md:flex-col flex-row font-inter gap-[30px] items-center justify-start mt-3.5 w-full">
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
                    className="mb-0.5 md:ml-[0] ml-[5px] mt-[21px] text-[16.56px] text-gray-900"
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
                </div>
                <div className="bg-gray-100 flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Contact Info
                  </Text>
                  <div className="flex flex-col font-inter gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[21px] w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-[3.22px] items-start justify-start w-[442px] sm:w-full">
                        <div className="flex flex-col font-inter items-start justify-start pr-[1.01px] w-auto">
                          <Text
                            className="text-[14.97px] text-gray-900 w-auto"
                            size="txtInterBold1497"
                          >
                            <span className="text-gray-900 font-poppins text-left font-bold">
                              First Name{" "}
                            </span>
                            <span className="text-red-A700 font-poppins text-left font-bold">
                              {" "}
                              *
                            </span>
                          </Text>
                        </div>
                        <Input
                          name="inputfirstname"
                          placeholder="Enter First Name"
                          className="font-poppins leading-[normal] p-0 placeholder:text-blue_gray-100 sm:pr-5 text-[18.42px] text-blue_gray-100 text-left tracking-[1.15px] w-full"
                          wrapClassName="bg-white-A700_01 border border-blue_gray-100 border-solid pl-[18px] pr-[35px] py-3 rounded-[11px] w-full"
                          type="text"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-[3.22px] items-start justify-start w-[442px] sm:w-full">
                        <div className="flex flex-col font-inter items-start justify-start pr-[1.01px] w-auto">
                          <Text
                            className="text-[14.97px] text-gray-900 w-auto"
                            size="txtInterBold1497"
                          >
                            <span className="text-gray-900 font-poppins text-left font-bold">
                              Last Name{" "}
                            </span>
                            <span className="text-red-A700 font-poppins text-left font-bold">
                              {" "}
                              *
                            </span>
                          </Text>
                        </div>
                        <Input
                          name="inputfirstname_One"
                          placeholder="Enter Last Name"
                          className="font-poppins leading-[normal] p-0 placeholder:text-blue_gray-100 sm:pr-5 text-[18.42px] text-blue_gray-100 text-left tracking-[1.15px] w-full"
                          wrapClassName="bg-white-A700_01 border border-blue_gray-100 border-solid pl-[18px] pr-[35px] py-[13px] rounded-[11px] w-full"
                          type="text"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-[3.22px] items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col font-inter items-start justify-start pr-[2.61px] w-auto">
                          <Text
                            className="text-[14.97px] text-gray-900 w-auto"
                            size="txtInterBold1497"
                          >
                            <span className="text-gray-900 font-poppins text-left font-bold">
                              Email Address{" "}
                            </span>
                            <span className="text-red-A700 font-poppins text-left font-bold">
                              {" "}
                              *{" "}
                            </span>
                          </Text>
                        </div>
                        <Input
                          name="inputemailone_One"
                          placeholder="Enter your email address"
                          className="font-poppins leading-[normal] p-0 placeholder:text-blue_gray-100 sm:pr-5 text-[18.42px] text-blue_gray-100 text-left tracking-[1.15px] w-full"
                          wrapClassName="bg-white-A700_01 border border-blue_gray-100 border-solid pb-3 pl-[18px] pr-[35px] pt-[15px] rounded-[11px] w-full"
                          type="email"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-[3.22px] items-start justify-start w-[443px] sm:w-full">
                        <div className="flex flex-col items-start justify-start pr-[1.1px] w-auto">
                          <Text
                            className="text-[14.97px] text-gray-900 w-auto"
                            size="txtInterBold1497"
                          >
                            <span className="text-gray-900 font-poppins text-left font-bold">
                              Phone Number{" "}
                            </span>
                            <span className="text-red-A700 font-poppins text-left font-bold">
                              {" "}
                              *
                            </span>
                          </Text>
                        </div>
                        <div className="bg-white-A700_01 border border-blue_gray-100 border-solid flex flex-col font-poppins items-start justify-start px-[18.42px] py-[12.66px] rounded-[11px] w-[443px] sm:w-full">
                          <Input
                            name="divplaceholder_Two"
                            placeholder="Enter your phone number"
                            className="leading-[normal] p-0 placeholder:text-blue_gray-100 sm:pr-5 text-[18.42px] text-blue_gray-100 text-left tracking-[1.15px] w-full"
                            wrapClassName="pr-[35px] pt-0.5 w-[94%]"
                            type="number"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[3.22px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start pr-[2.61px] w-auto">
                        <Text
                          className="text-[14.97px] text-gray-900 w-auto"
                          size="txtInterBold1497"
                        >
                          <span className="text-gray-900 font-poppins text-left font-bold">
                            Address{" "}
                          </span>
                          <span className="text-red-A700 font-poppins text-left font-bold">
                            {" "}
                            *{" "}
                          </span>
                        </Text>
                      </div>
                      <div className="bg-white-A700_01 border border-blue_gray-100 border-solid flex flex-col font-poppins items-start justify-start px-[18.42px] py-[12.66px] rounded-[11px] w-[444px] sm:w-full">
                        <Input
                          name="divplaceholder_Three"
                          placeholder="Enter your address"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-100 sm:pr-5 text-[18.42px] text-blue_gray-100 text-left tracking-[1.15px] w-full"
                          wrapClassName="pr-[35px] pt-0.5 w-[84%]"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="mb-1.5 md:ml-[0] ml-[9px] mt-[15px] text-[16.56px] text-gray-900"
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
                </div>
              </div>
              <div className="bg-gray-100 flex md:flex-1 flex-col justify-center mb-[383px] p-3.5 rounded-[10px] w-[24%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] mr-[172px] mt-2.5 text-black-900 text-xl"
                  size="txtPoppinsBold20Black900"
                >
                  Your order
                </Text>
                <Line className="bg-gray-50 h-px mt-[19px] w-[91%]" />
                <List
                  className="flex flex-col gap-[13px] items-center ml-0.5 md:ml-[0] mt-3.5 w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-start justify-between w-full">
                    <Text
                      className="mt-0.5 text-base text-center text-gray-900"
                      size="txtPoppinsMedium16"
                    >
                      Fish Fingers
                    </Text>
                    <div className="flex flex-row items-center justify-center">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                      <Text
                        className="ml-[9px] text-base text-center text-gray-900"
                        size="txtPoppinsMedium16"
                      >
                        1
                      </Text>
                      <Img
                        className="h-2.5 ml-2.5 w-2.5"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                    </div>
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtPoppinsMedium16"
                    >
                      £57.28
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtPoppinsMedium16"
                    >
                      French Fries
                    </Text>
                    <div className="flex flex-row items-center justify-center">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                      <Text
                        className="ml-[7px] text-base text-center text-gray-900"
                        size="txtPoppinsMedium16"
                      >
                        2
                      </Text>
                      <Img
                        className="h-2.5 ml-2 w-2.5"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                    </div>
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtPoppinsMedium16"
                    >
                      £54.56
                    </Text>
                  </div>
                </List>
                <Line className="bg-gray-50 h-px ml-3 md:ml-[0] mr-[15px] mt-3.5 w-[91%]" />
                <div className="flex flex-col gap-3.5 items-center justify-start mt-3.5 w-[99%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtPoppinsBold16"
                    >
                      Tip
                    </Text>
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtPoppinsMedium16"
                    >
                      £5.59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                    <Button className="bg-gray-100 border border-solid border-white-A700_01 cursor-pointer leading-[normal] min-w-[52px] py-[9px] rounded-[5px] text-base text-center text-gray-900">
                      0%
                    </Button>
                    <Button className="bg-red-700 border border-solid border-white-A700_01 cursor-pointer leading-[normal] min-w-[52px] py-[9px] rounded-[5px] text-base text-center text-gray-100">
                      5%
                    </Button>
                    <Button className="bg-gray-100 border border-solid border-white-A700_01 cursor-pointer leading-[normal] min-w-[52px] py-[9px] rounded-[5px] text-base text-center text-gray-900">
                      10%
                    </Button>
                    <Button className="bg-gray-100 border border-solid border-white-A700_01 cursor-pointer leading-[normal] min-w-[73px] py-[9px] rounded-[5px] text-base text-center text-gray-900">
                      Others
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray-50 h-px mt-[15px] w-[91%]" />
                <div className="flex flex-col gap-[15px] items-center justify-start mt-3.5 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtPoppinsBold16"
                    >
                      Sub-total
                    </Text>
                    <Text
                      className="text-base text-gray-900 text-right"
                      size="txtPoppinsSemiBold16"
                    >
                      £117.43
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtPoppinsBold16"
                    >
                      Taxes
                    </Text>
                    <Text
                      className="text-base text-gray-900 text-right"
                      size="txtPoppinsSemiBold16"
                    >
                      £0
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtPoppinsBold16"
                    >
                      Total
                    </Text>
                    <Text
                      className="text-base text-gray-900 text-right"
                      size="txtPoppinsSemiBold16"
                    >
                      £117.43
                    </Text>
                  </div>
                </div>
                <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[180px] mt-[19px] py-2.5 rounded-[21px] text-[14.41px] text-center text-white-A700_01">
                  Order
                </Button>
                <Text
                  className="mb-3 mt-[15px] text-black-900_4c text-center text-sm w-[78%] sm:w-full"
                  size="txtPoppinsRegular14"
                >
                  Delivery time will take at least 45mins.
                </Text>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckoutOrderCardPage;
