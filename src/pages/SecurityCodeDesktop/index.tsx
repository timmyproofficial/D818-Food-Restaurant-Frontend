import React from "react";

import { Button, Img, Text } from "components";

const SecurityCodeDesktopPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col items-center justify-start mx-auto p-[140px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-end mb-[37px] p-[50px] md:px-5 rounded-[10px] w-[59%] md:w-full">
          <div className="flex flex-col items-center justify-end w-[91%] md:w-full">
            <Text
              className="mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtPoppinsExtraBold40"
            >
              Logo Here
            </Text>
            <div className="flex flex-col items-center justify-start mt-7 pt-0.5">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-red-700"
                size="txtInterBold32"
              >
                Security code to reset password
              </Text>
              <Text
                className="text-base text-center text-gray-900 w-[84%] sm:w-full"
                size="txtPoppinsRegular16Gray900"
              >
                Insert the security code sent to your email in order to proceed
                with the password reset.
              </Text>
            </div>
            <Img
              className="h-16 mt-8"
              src="images/img_frame427319814.svg"
              alt="frame427319814"
            />
            <Button className="bg-red-700 cursor-pointer font-bold font-inter leading-[normal] mt-7 py-[13px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-white-A700_01 w-[521px]">
              Submit
            </Button>
            <Text
              className="mt-[13px] text-red-700 text-sm"
              size="txtPoppinsSemiBold14"
            >
              Request a new code
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityCodeDesktopPage;
