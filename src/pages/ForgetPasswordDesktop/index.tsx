import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";

const ForgetPasswordDesktopPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto p-[139px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-end mb-[3px] p-[35px] md:px-5 rounded-[10px] w-[59%] md:w-full">
          <div className="flex flex-col gap-[27px] items-center justify-start mt-[3px] pt-[5px] w-[88%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtPoppinsExtraBold40"
            >
              Logo Here
            </Text>
            <div className="flex flex-col gap-9 items-center justify-start px-0.5 w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-red-700"
                  size="txtPoppinsBold32"
                >
                  Forgot Password
                </Text>
                <Text
                  className="text-base text-center text-gray-900 w-full"
                  size="txtPoppinsRegular16Gray900"
                >
                  You can request a password reset below. We will send a
                  security code to the email address, please make sure it is
                  correct.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col font-poppins gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      Email
                    </Text>
                  </div>
                  <Input
                    name="enteremail"
                    placeholder="Enter Email"
                    className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                    wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                    type="email"
                  ></Input>
                </div>
                <Button className="bg-red-700 cursor-pointer font-bold font-inter leading-[normal] mt-[9px] py-[13px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-white-A700_01 w-[521px]">
                  Request Password Reset
                </Button>
                <a className="mt-[19px] text-red-700 text-sm">
                  <Text
                    className="common-pointer"
                    size="txtPoppinsSemiBold14"
                    onClick={() => navigate("/logindesktop")}
                  >
                    Log In
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordDesktopPage;
