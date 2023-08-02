import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const ContactUsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[25px] w-full">
        <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-700_b2 text-center sm:text-xl"
            size="txtPoppinsExtraBold24"
          >
            <>
              Logo
              <br />
              Here
            </>
          </Text>
          <Button
            className="common-pointer bg-transparent cursor-pointer font-medium leading-[normal] mb-[19px] min-w-[47px] md:ml-[0] ml-[619px] md:mt-0 mt-[30px] text-[15px] text-center text-gray-900 tracking-[0.60px]"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            className="common-pointer bg-transparent cursor-pointer font-medium leading-[normal] mb-[19px] min-w-[88px] ml-10 md:ml-[0] md:mt-0 mt-[30px] text-[15px] text-center text-gray-900 tracking-[0.60px]"
            onClick={() => navigate("/forgetpassworddesktop")}
          >
            Order Now
          </Button>
          <div className="flex flex-col items-center justify-start mb-[19px] ml-10 md:ml-[0] md:mt-0 mt-[30px]">
            <a
              href="javascript:"
              className="text-[15px] text-red-700 tracking-[0.60px]"
            >
              <Text size="txtPoppinsBold15">Contact Us</Text>
            </a>
          </div>
          <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-center mb-[19px] md:ml-[0] ml-[38px] md:mt-0 mt-[30px] w-[8%] md:w-full">
            <Text
              className="text-[15px] text-gray-900 tracking-[0.60px]"
              size="txtPoppinsMedium15"
            >
              Account{" "}
            </Text>
            <Img
              className="h-[17px] w-[17px]"
              src="images/img_arrowdown_gray_900.svg"
              alt="arrowdown"
            />
          </div>
          <div className="flex flex-col items-center justify-start mb-[19px] md:ml-[0] ml-[39px] mr-3.5 md:mt-0 mt-[30px]">
            <Text
              className="text-[15px] text-gray-900 tracking-[0.60px]"
              size="txtPoppinsMedium15"
            >
              Download The App
            </Text>
          </div>
        </header>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1277px] mt-[30px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start md:mt-0 mt-3.5">
            <Text
              className="leading-[52.00px] sm:text-[32px] md:text-[38px] text-[42px] text-red-700 w-full"
              size="txtPoppinsBold42"
            >
              <>
                If you have any questions, comments or feedback, please
                don&#39;t hesitate to reach out to us.
              </>
            </Text>
            <Text
              className="mt-7 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPoppinsLight30"
            >
              (219) 555-0114
            </Text>
            <Text
              className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPoppinsLight30"
            >
              tranthuy.nute@gmail.com
            </Text>
            <a
              href="www.website.com"
              className="text-3xl sm:text-[26px] md:text-[28px] text-amber-A400"
              target="_blank"
              rel="noreferrer"
            >
              <Text size="txtPoppinsLight30AmberA400">www.website.com</Text>
            </a>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
                <div className="bg-gray-100 flex md:flex-1 flex-col items-center justify-end p-[19px] rounded-[10px] w-[48%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtPoppinsRegular15"
                    >
                      FirstName*
                    </Text>
                    <Img className="h-3" src="images/img_user.svg" alt="user" />
                  </div>
                </div>
                <div className="bg-gray-100 flex md:flex-1 flex-col items-center justify-end p-[18px] rounded-[10px] w-[48%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-[90%] md:w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtPoppinsRegular15"
                    >
                      LastName*
                    </Text>
                    <Img
                      className="h-3"
                      src="images/img_user.svg"
                      alt="user_One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-10 w-full">
                <Input
                  name="frame204"
                  placeholder="Email"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-500 sm:px-5 text-[15px] text-blue_gray-500 text-left w-full"
                  wrapClassName="bg-gray-100 flex sm:flex-1 px-[29px] py-[19px] rounded-[10px] sm:w-full"
                  type="email"
                  suffix={
                    <div className="mt-[7px] mb-1.5 ml-[35px] bg-blue_gray-400">
                      <Img
                        className="my-auto"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  name="frame205"
                  placeholder="Phone No."
                  className="leading-[normal] p-0 placeholder:text-blue_gray-500 sm:px-5 text-[15px] text-blue_gray-500 text-left w-full"
                  wrapClassName="bg-gray-100 flex sm:flex-1 px-[31px] py-[19px] rounded-[10px] sm:w-full"
                  type="number"
                  suffix={
                    <div className="h-[9px] mt-1.5 mb-[7px] ml-[35px] w-[9px] bg-blue_gray-400">
                      <Img
                        className="h-[9px] my-auto"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    </div>
                  }
                ></Input>
              </div>
              <div className="bg-gray-100 h-[265px] mt-10 rounded-[10px] w-full"></div>
              <Button className="bg-red-700 capitalize cursor-pointer font-semibold min-w-[247px] mt-[52px] py-[19px] rounded-[31px] text-base text-center text-white-A700_01 tracking-[0.60px]">
                send message now
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[450px] md:h-[497px] max-w-[1170px] mt-[47px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[450px] m-auto object-cover rounded-[10px] w-full"
            src="images/img_rectangle4364.png"
            alt="rectangle4364"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[295px] h-max inset-y-[0] items-center justify-start my-auto right-[1%] w-[4%]">
            <Button className="bg-white-A700_01 flex h-10 items-center justify-center p-[11px] rounded-sm shadow-bs3 w-10">
              <Img className="h-[18px]" src="images/img_crop.svg" alt="crop" />
            </Button>
            <Img
              className="h-[81px] rounded-tl-sm rounded-tr-sm"
              src="images/img_download.svg"
              alt="download"
            />
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[73px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactUsPage;
