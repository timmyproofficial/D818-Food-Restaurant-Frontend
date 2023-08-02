import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";

const CreateanaccountDesktopPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 font-poppins h-[817px] mx-auto p-[52px] md:px-10 sm:px-5 relative w-full">
        <div className="bg-gray-100 flex flex-col h-full items-center justify-start m-auto p-[41px] md:px-5 rounded-[10px] w-[47%]">
          <div className="flex flex-col gap-[23px] items-center justify-start pt-[5px] w-[89%] md:w-full">
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
                Create An Account
              </Text>
              <Text
                className="mt-[5px] text-base text-center text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                <>
                  Let&#39;s get started by creating your account.
                  <br />
                  To keep your account safe, we need a strong password
                </>
              </Text>
              <div className="flex flex-col gap-[15px] items-center justify-start mt-[15px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[21.69px] py-[14.91px] rounded-[13px] w-[521px] sm:w-full">
                    <div className="flex flex-row gap-[188px] items-start justify-start w-[478px] sm:w-full">
                      <Text
                        className="sm:text-[17.69px] md:text-[19.69px] text-[21.69px] text-gray-900 tracking-[1.36px] w-auto"
                        size="txtPoppinsRegular2169"
                      >
                        Example@gmail.com
                      </Text>
                      <Text
                        className="common-pointer text-amber-A400 text-base tracking-[1.36px] w-[33px]"
                        size="txtPoppinsRegular16AmberA400"
                        onClick={() => navigate("/accountdesktop")}
                      >
                        Edit
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      Password
                    </Text>
                  </div>
                  <Input
                    name="inputfirstname"
                    placeholder="Enter Password"
                    className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                    wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                    type="password"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      Confirm Password
                    </Text>
                  </div>
                  <Input
                    name="inputfirstname_One"
                    placeholder="Confirm Password"
                    className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                    wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                    type="password"
                  ></Input>
                </div>
                <div className="bg-red-700 flex flex-col items-start justify-start md:pl-10 pl-[40.59px] pr-[39.56px] sm:px-5 py-3.5 rounded-[10px] shadow-bs2 w-[434px] sm:w-full">
                  <Text
                    className="sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-gray-50 w-auto"
                    size="txtPoppinsBold2099"
                  >
                    Continue
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-100 flex flex-col gap-3 h-max inset-[0] items-center justify-center m-auto p-[15px] md:px-5 rounded-[10px] w-[47%]">
          <div className="flex flex-col gap-[23px] items-center justify-start mt-[35px] pt-[5px] w-[82%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtPoppinsExtraBold40"
            >
              Logo Here
            </Text>
            <div className="md:h-[458px] h-[521px] relative w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[62px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-red-700"
                  size="txtPoppinsBold32"
                >
                  Create An Account
                </Text>
                <Text
                  className="mt-[5px] text-base text-center text-gray-900"
                  size="txtPoppinsRegular16Gray900"
                >
                  <>
                    Let&#39;s get started by creating your account.
                    <br />
                    To keep your account safe, we need a strong password
                  </>
                </Text>
                <div className="flex flex-col gap-[15px] items-center justify-start mt-[15px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[21.69px] py-[14.91px] rounded-[13px] w-[521px] sm:w-full">
                      <div className="flex flex-row gap-[188px] items-start justify-start w-[478px] sm:w-full">
                        <Text
                          className="sm:text-[17.69px] md:text-[19.69px] text-[21.69px] text-gray-900 tracking-[1.36px] w-auto"
                          size="txtPoppinsRegular2169"
                        >
                          Example@gmail.com
                        </Text>
                        <Text
                          className="text-amber-A400 text-base tracking-[1.36px] w-[33px]"
                          size="txtPoppinsRegular16AmberA400"
                        >
                          Edit
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                      <Text
                        className="text-[17.62px] text-gray-900 w-auto"
                        size="txtPoppinsBold1762"
                      >
                        Password
                      </Text>
                    </div>
                    <Input
                      name="inputfirstname_Two"
                      placeholder="Enter Password"
                      className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                      wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                      type="password"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                      <Text
                        className="text-[17.62px] text-gray-900 w-auto"
                        size="txtPoppinsBold1762"
                      >
                        Confirm Password
                      </Text>
                    </div>
                    <Input
                      name="inputfirstname_Three"
                      placeholder="Confirm Password"
                      className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                      wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                      type="password"
                    ></Input>
                  </div>
                </div>
              </div>
              <Button className="absolute bg-red-700 bottom-[0] cursor-pointer font-bold inset-x-[0] leading-[normal] mx-auto py-[13px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-white-A700_01 w-[521px]">
                Continue
              </Button>
            </div>
          </div>
          <Text
            className="common-pointer text-base text-red-700 tracking-[1.36px]"
            size="txtPoppinsRegular16"
            onClick={() => navigate("/accountdesktop")}
          >
            Not Your Account?
          </Text>
        </div>
      </div>
    </>
  );
};

export default CreateanaccountDesktopPage;
