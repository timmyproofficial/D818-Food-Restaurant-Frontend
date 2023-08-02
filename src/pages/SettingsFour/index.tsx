import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const SettingsFourPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[15px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row md:gap-10 items-end justify-between max-w-[1091px] mt-[38px] mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[1.68px]"
              size="txtPoppinsSemiBold24Gray900"
            >
              Transactions
            </Text>
            <Text
              className="common-pointer mb-1 mt-[7px] text-base text-gray-900 tracking-[1.12px]"
              size="txtPoppinsRegular16Gray900"
              onClick={() => navigate("/settingsone")}
            >
              Back
            </Text>
          </div>
          <div className="flex flex-col gap-7 items-center justify-start mt-[105px] pb-0.5 md:px-5 w-1/4 md:w-full">
            <Img
              className="h-[110px] w-[110px]"
              src="images/img_icon.svg"
              alt="icon"
            />
            <Text
              className="sm:text-[34.57px] md:text-[36.57px] text-[38.57px] text-blue_gray-300 text-center"
              size="txtPoppinsRegular3857"
            >
              No Records Found.
            </Text>
          </div>
          <div className="h-[489px] md:h-[747px] mt-[258px] md:px-5 relative w-full">
            <Line className="bg-gray-100 h-[5px] mt-[105px] mx-auto w-[21%]" />
            <Footer className="absolute flex inset-[0] items-center justify-center m-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsFourPage;
