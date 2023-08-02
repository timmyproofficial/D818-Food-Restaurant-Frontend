import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const SettingsOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[15px] w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-[37px] items-center justify-start mt-[29px] md:px-5 w-[53%] md:w-full">
          <Text
            className="sm:text-[29.1px] md:text-[31.1px] text-[33.1px] text-center text-gray-900"
            size="txtPoppinsSemiBold331"
          >
            Profile
          </Text>
          <div className="flex flex-col gap-[5px] items-center justify-start w-[55%] md:w-full">
            <Img
              className="h-[196px] md:h-auto rounded-[50%] w-[49%]"
              src="images/img_ellipse4.png"
              alt="ellipseFour"
            />
            <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[93px] w-full">
              <Text
                className="sm:text-[29.1px] md:text-[31.1px] text-[33.1px] text-center text-gray-900"
                size="txtPoppinsSemiBold331"
              >
                Robert Fox
              </Text>
              <Text
                className="sm:text-[17.07px] md:text-[19.07px] text-[21.07px] text-center text-gray-900 tracking-[0.38px]"
                size="txtPoppinsLight2107"
              >
                Ckctm12@gmail.com
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col gap-5 items-center w-full"
            orientation="vertical"
          >
            <div
              className="common-pointer bg-gray-100 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] rounded-[19px] w-full"
              onClick={() => navigate("/settingstwo")}
            >
              <Img
                className="h-[35px] ml-5 sm:ml-[0]"
                src="images/img_person.svg"
                alt="person"
              />
              <Text
                className="sm:ml-[0] ml-[45px] sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                My Profile
              </Text>
              <Img
                className="h-[30px] sm:ml-[0] ml-[459px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <div
              className="common-pointer bg-gray-100 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[18px] rounded-[19px] w-full"
              onClick={() => navigate("/settingsfour")}
            >
              <Img
                className="h-[35px] md:ml-[0] ml-[19px] w-[35px]"
                src="images/img_sort.svg"
                alt="sort"
              />
              <Text
                className="mb-0.5 md:ml-[0] ml-[43px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Transactions
              </Text>
              <Img
                className="h-[30px] md:ml-[0] ml-[418px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <div
              className="common-pointer bg-gray-100 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[19px] rounded-[19px] w-full"
              onClick={() => navigate("/settingsthree")}
            >
              <Img
                className="h-[35px] md:ml-[0] ml-[18px] w-9"
                src="images/img_instagram.svg"
                alt="instagram"
              />
              <Text
                className="md:ml-[0] ml-[41px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Wallet
              </Text>
              <Img
                className="h-[30px] md:ml-[0] ml-[497px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </List>
          <div className="flex flex-row gap-[22px] items-start justify-center pt-0.5 w-[18%] md:w-full">
            <Img
              className="h-[25px] w-[25px]"
              src="images/img_download_red_700.svg"
              alt="download"
            />
            <a
              href="javascript:"
              className="sm:text-[17.52px] md:text-[19.52px] text-[21.52px] text-red-700"
            >
              <Text size="txtPoppinsSemiBold2152">Log Out</Text>
            </a>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[49px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default SettingsOnePage;
