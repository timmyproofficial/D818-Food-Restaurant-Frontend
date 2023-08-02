import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";

const inputfirstnameOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PersonalDetailsDesktopOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[282px] items-start mx-auto p-[31px] sm:px-5 w-full">
        <Text
          className="common-pointer md:ml-[0] ml-[29px] md:mt-0 mt-[9px] text-base text-red-700 tracking-[0.70px]"
          size="txtPoppinsRegular16"
          onClick={() => navigate("/createanaccountdesktop")}
        >
          Back
        </Text>
        <div className="bg-gray-100 flex flex-col items-center justify-start mr-[352px] p-[29px] md:px-5 rounded-[10px] w-[49%] md:w-full">
          <div className="flex flex-col gap-[21px] items-center justify-start pt-[5px] w-[87%] md:w-full">
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
                Personal Details
              </Text>
              <Text
                className="mt-2 text-base text-center text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                We just need you to fill in some details.
              </Text>
              <div className="flex flex-col items-center justify-start w-[531px] md:w-full">
                <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      Full Name
                    </Text>
                  </div>
                  <Input
                    name="fullname_One"
                    placeholder="Enter Full Name"
                    className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:px-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                    wrapClassName="bg-gray-50 border border-gray-100 border-solid pl-[21px] pr-[35px] py-[15px] rounded-[13px] w-full"
                    type="text"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-[530px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      Phone Number
                    </Text>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col items-start justify-start pl-[21.69px] pr-[34px] sm:px-5 py-[14.91px] rounded-[13px] w-[530px] sm:w-full">
                    <Input
                      name="phonenumber_One"
                      placeholder="Enter Phone Number"
                      className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:pr-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                      wrapClassName="pr-[35px] w-[97%]"
                      type="number"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-[530px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      Home Address
                    </Text>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col items-start justify-start pl-[21.69px] pr-[34px] sm:px-5 py-[14.91px] rounded-[13px] w-[530px] sm:w-full">
                    <Input
                      name="homeaddress_One"
                      placeholder="Enter Address"
                      className="leading-[normal] md:text-[19.69px] p-0 placeholder:text-gray-100 sm:pr-5 sm:text-[17.69px] text-[21.69px] text-gray-100 text-left tracking-[1.36px] w-full"
                      wrapClassName="pr-[35px] w-full"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[3.79px] h-[118px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[1.19px] w-auto">
                    <Text
                      className="text-[17.62px] text-gray-900 w-auto"
                      size="txtPoppinsBold1762"
                    >
                      Plan
                    </Text>
                  </div>
                  <SelectBox
                    className="bg-gray-50 border border-gray-100 border-solid font-medium leading-[normal] pl-[22px] pr-[26px] sm:px-5 py-[15px] rounded-[13px] text-black-900 text-left text-xl w-full"
                    placeholderClassName="text-black-900"
                    indicator={
                      <Img
                        className="h-[17px] w-4"
                        src="images/img_arrowdown_black_900_17x16.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="inputfirstname"
                    options={inputfirstnameOptionsList}
                    isSearchable={false}
                    placeholder="Student"
                  />
                </div>
                <Button className="bg-red-700 cursor-pointer font-bold leading-[normal] py-[13px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-white-A700_01 w-[521px]">
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

export default PersonalDetailsDesktopOnePage;
