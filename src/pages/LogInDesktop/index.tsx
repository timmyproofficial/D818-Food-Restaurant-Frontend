import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";

const LogInDesktopPage: React.FC = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto p-[120px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-end mt-[19px] p-[29px] md:px-5 rounded-[10px] w-[57%] md:w-full">
          <div className="flex flex-col items-center justify-end w-[86%] md:w-full">
            <Text
              className="mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtPoppinsExtraBold40"
            >
              Logo Here
            </Text>
            <div className="flex flex-col justify-start mt-[27px]">
              <Text
                className="md:ml-[0] ml-[68px] md:text-3xl sm:text-[28px] text-[32px] text-red-700"
                size="txtPoppinsBold32"
              >
                Log In
              </Text>
              <Text
                className="text-base text-center text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                Log back into your account.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[7px] w-full">
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
              <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start mt-2.5 w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                  <Text
                    className="text-[17.62px] text-gray-900 w-auto"
                    size="txtPoppinsBold1762"
                  >
                    Password
                  </Text>
                </div>
                <Input
                  name="passwordmessage"
                  placeholder="Enter Password"
                  className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                  wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                  type="password"
                ></Input>
              </div>
              <Button className="bg-red-700 cursor-pointer font-bold leading-[normal] py-[13px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-white-A700_01 w-[521px]">
                Log In
              </Button>
              <div
                className="common-pointer flex flex-row gap-[15px] items-start justify-center mt-5 w-[34%] md:w-full"
                onClick={() => googleSignIn()}
              >
                <Img
                  className="h-6 w-[23px]"
                  src="images/img_logosgoogleicon.svg"
                  alt="logosgoogleicon"
                />
                <Text
                  className="mt-0.5 text-[15.09px] text-black-900 text-center underline"
                  size="txtPoppinsMedium1509"
                >
                  Log in with Google
                </Text>
              </div>
              <Text
                className="common-pointer mt-[5px] text-red-700 text-sm"
                size="txtPoppinsSemiBold14"
                onClick={() => navigate("/forgetpassworddesktop")}
              >
                Forget Your Password?
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInDesktopPage;
