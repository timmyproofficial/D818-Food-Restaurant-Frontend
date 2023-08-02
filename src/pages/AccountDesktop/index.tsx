import React from "react";

import { Button, Img, Text } from "components";

const AccountDesktopPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto p-[150px] md:px-10 sm:px-5 w-full">
        <div className="h-[516px] relative w-[63%] md:w-full">
          <div className="absolute bg-gray-100 h-[516px] inset-y-[0] left-[0] my-auto rounded-[10px] w-[95%]"></div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto pt-[5px] right-[0] w-[90%]">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtPoppinsExtraBold40"
            >
              Logo Here
            </Text>
            <Text
              className="mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-center text-red-700"
              size="txtPoppinsBold32"
            >
              Welcome to Company
            </Text>
            <Text
              className="text-base text-center text-gray-900"
              size="txtPoppinsRegular16Gray900"
            >
              <>
                Type your e-mail or phone number to log in or create
                <br />
                an account.
              </>
            </Text>
            <div className="flex flex-col items-start justify-start mt-[7px] w-full">
              <div className="flex flex-col font-inter gap-[3.79px] h-[118px] md:h-auto items-start justify-start max-w-screen-sm w-full">
                <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                  <Text
                    className="text-[17.62px] text-gray-900 w-auto"
                    size="txtInterBold1762"
                  >
                    Email / Phone Number
                  </Text>
                </div>
                <div className="font-poppins h-16 sm:px-5 px-[21.69px] py-[14.91px] relative w-[640px] md:w-full">
                  <div className="absolute bg-white-A700_01 border border-gray-100 border-solid h-16 inset-y-[0] left-[0] my-auto rounded-[13px] w-[82%]"></div>
                  <div className="absolute flex flex-col h-max inset-[0] items-start justify-start m-auto md:pr-10 sm:pr-5 pr-[287.36px] pt-[1.36px] w-auto">
                    <Text
                      className="sm:text-[17.69px] md:text-[19.69px] text-[21.69px] text-gray-100 tracking-[1.36px] w-auto"
                      size="txtPoppinsRegular2169Gray100"
                    >
                      Enter Email Or Phone Number
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-red-700 cursor-pointer font-bold font-poppins leading-[normal] mt-[9px] py-[13px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-white-A700_01 w-[521px]">
                Continue
              </Button>
              <div className="flex flex-row font-poppins gap-2.5 items-start justify-start md:ml-[0] ml-[172px] mt-[23px] w-[31%] md:w-full">
                <Img
                  className="h-6 w-[23px]"
                  src="images/img_logosgoogleicon.svg"
                  alt="logosgoogleicon"
                />
                <Text
                  className="mt-0.5 text-[15.09px] text-black-900 text-center underline"
                  size="txtPoppinsMedium1509"
                >
                  Continue with Google
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDesktopPage;
