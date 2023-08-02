import React from "react";

import { Button, Input, Text } from "components";

const NewPasswordDesktopPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto p-[62px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start p-[41px] md:px-5 rounded-[10px] w-[52%] md:w-full">
          <div className="flex flex-col gap-[26px] items-center justify-start pt-[5px] w-[89%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtPoppinsExtraBold40"
            >
              Logo Here
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-red-700"
                size="txtPoppinsBold32"
              >
                Reset your password
              </Text>
              <Text
                className="mt-[3px] text-base text-center text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                Insert your new password
              </Text>
              <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                <div className="flex flex-col font-poppins items-center justify-start w-full">
                  <Input
                    name="email"
                    placeholder="Example@gmail.com"
                    className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-900 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-900 text-left tracking-[1.36px] w-full"
                    wrapClassName="bg-gray-50 border border-gray-100 border-solid pb-3.5 pl-[21px] pr-[35px] pt-[17px] rounded-[13px] w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col font-poppins gap-[3.79px] h-[118px] md:h-auto items-start justify-start mt-[15px] w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      New Password
                    </Text>
                  </div>
                  <Input
                    name="enterpassword"
                    placeholder="Enter Password"
                    className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                    wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                    type="password"
                  ></Input>
                </div>
                <div className="flex flex-col font-poppins gap-[3.79px] h-[118px] md:h-auto items-start justify-start mt-[25px] w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      Confirm New Password
                    </Text>
                  </div>
                  <Input
                    name="confirmnewpassword"
                    placeholder="Confirm Password"
                    className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                    wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                    type="password"
                  ></Input>
                </div>
                <Button className="bg-red-700 cursor-pointer font-bold font-inter leading-[normal] mt-[30px] py-[13px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-white-A700_01 w-[521px]">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPasswordDesktopPage;
