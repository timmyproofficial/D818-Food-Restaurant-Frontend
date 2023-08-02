import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const genderOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SettingsTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[15px] w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1092px] mt-10 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[1.68px]"
                  size="txtPoppinsSemiBold24Gray900"
                >
                  Account Settings
                </Text>
                <Text
                  className="common-pointer text-base text-gray-900 tracking-[1.12px]"
                  size="txtPoppinsRegular16Gray900"
                  onClick={() => navigate("/settingsone")}
                >
                  Back
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
                <Img
                  className="h-[196px] md:h-auto rounded-[50%]"
                  src="images/img_ellipse4.png"
                  alt="ellipseFour"
                />
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[41px]">
                  <Button className="bg-gray-100 cursor-pointer font-semibold leading-[normal] min-w-[200px] ml-0.5 md:ml-[0] py-[15px] rounded-[10px] text-base text-center text-gray-900">
                    Change Picture
                  </Button>
                  <Button className="border-2 border-gray-100 border-solid cursor-pointer font-semibold leading-[normal] min-w-[200px] ml-0.5 md:ml-[0] mt-3.5 py-[15px] rounded-[10px] text-base text-center text-gray-900">
                    Delete Picture
                  </Button>
                  <div className="flex flex-col items-center justify-start mt-[31px] w-full">
                    <div className="flex flex-col gap-[5px] justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between ml-4 md:ml-[0] w-[66%] md:w-full">
                        <Text
                          className="text-base text-gray-900"
                          size="txtPoppinsSemiBold16"
                        >
                          First Name
                        </Text>
                        <Text
                          className="text-base text-gray-900"
                          size="txtPoppinsSemiBold16"
                        >
                          Phone Number
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between w-full">
                          <Input
                            name="frame3721"
                            placeholder="Robert Fox"
                            className="leading-[normal] p-0 placeholder:text-gray-900 sm:px-5 text-base text-gray-900 text-left w-full"
                            wrapClassName="bg-gray-100 sm:flex-1 pl-8 pr-[35px] py-[22px] rounded-[10px] sm:w-full"
                          ></Input>
                          <Input
                            name="frame3721_One"
                            placeholder="(603) 555-0123"
                            className="leading-[normal] p-0 placeholder:text-gray-900 sm:px-5 text-base text-gray-900 text-left w-full"
                            wrapClassName="bg-gray-100 sm:flex-1 pl-8 pr-[35px] py-[22px] rounded-[10px] sm:w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-row items-center justify-between ml-4 md:ml-[0] mt-[23px] w-[59%] md:w-full">
                          <Text
                            className="text-base text-gray-900"
                            size="txtPoppinsSemiBold16"
                          >
                            Email
                          </Text>
                          <Text
                            className="text-base text-gray-900"
                            size="txtPoppinsSemiBold16"
                          >
                            Address
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between mt-1 w-full">
                          <Input
                            name="email_One"
                            placeholder="ckctm12@gmail.com"
                            className="leading-[normal] p-0 placeholder:text-gray-900 sm:px-5 text-base text-gray-900 text-left w-full"
                            wrapClassName="bg-gray-100 sm:flex-1 pb-5 pl-8 pr-[35px] pt-[25px] rounded-[10px] sm:w-full"
                            type="email"
                          ></Input>
                          <Button className="bg-gray-100 cursor-pointer leading-[normal] min-w-[424px] sm:min-w-full py-[23px] rounded-[10px] text-base text-center text-gray-900">
                            2972 Westheimer Rd. Santa Ana, Illinois 85486
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start mt-[22px] w-[49%] md:w-full">
                          <div className="flex flex-col justify-start w-[48%] sm:w-full">
                            <Text
                              className="md:ml-[0] ml-[15px] text-[12.74px] text-gray-900"
                              size="txtPoppinsSemiBold1274"
                            >
                              Gender
                            </Text>
                            <SelectBox
                              className="bg-gray-100 font-semibold leading-[normal] mt-1 sm:pl-5 pl-[25px] pr-[15px] py-4 rounded-[7px] text-[12.74px] text-gray-900 text-left w-full"
                              placeholderClassName="text-gray-900"
                              indicator={
                                <Img
                                  className="h-[18px] mr-[0] w-[18px]"
                                  src="images/img_arrowdown_gray_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="gender_One"
                              options={genderOneOptionsList}
                              isSearchable={false}
                              placeholder="Male"
                            />
                          </div>
                          <div className="flex flex-col justify-start w-[48%] sm:w-full">
                            <Text
                              className="md:ml-[0] ml-[15px] text-[12.74px] text-gray-900"
                              size="txtPoppinsSemiBold1274"
                            >
                              Date Of Birth
                            </Text>
                            <Input
                              name="frame3721_Two"
                              placeholder="dd/mm/yyyy"
                              className="leading-[normal] p-0 placeholder:text-blue_gray-700_b2 sm:px-5 text-[12.74px] text-blue_gray-700_b2 text-left w-full"
                              wrapClassName="bg-gray-100 mt-1 pl-[25px] pr-[35px] py-[17px] rounded-[7px] w-full"
                            ></Input>
                          </div>
                        </div>
                        <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[200px] mt-[21px] py-[18px] rounded-[30px] text-base text-center text-gray-50">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-100 h-[5px] w-[27%]" />
          <div className="flex flex-col gap-[18px] justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[1.68px]"
              size="txtPoppinsSemiBold24Gray900"
            >
              Password Settings
            </Text>
            <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[222px] w-4/5 md:w-full">
              <div className="flex flex-col justify-start ml-0.5 md:ml-[0] w-[49%] md:w-full">
                <Text
                  className="ml-4 md:ml-[0] text-base text-gray-900"
                  size="txtPoppinsSemiBold16"
                >
                  Old Password
                </Text>
                <Input
                  name="frame3721_Three"
                  placeholder="Old Password"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-700_b2 sm:px-5 text-base text-blue_gray-700_b2 text-left w-full"
                  wrapClassName="bg-gray-100 mt-1 pl-8 pr-[35px] py-[22px] rounded-[10px] w-full"
                  type="password"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-7 items-center justify-between ml-0.5 md:ml-[0] w-full">
                <div className="flex md:flex-1 flex-col justify-start w-[49%] md:w-full">
                  <Text
                    className="ml-4 md:ml-[0] text-base text-gray-900"
                    size="txtPoppinsSemiBold16"
                  >
                    New Password
                  </Text>
                  <Input
                    name="frame3721_Four"
                    placeholder="New Password"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-700_b2 sm:px-5 text-base text-blue_gray-700_b2 text-left w-full"
                    wrapClassName="bg-gray-100 mt-1 pl-8 pr-[35px] py-[22px] rounded-[10px] w-full"
                    type="password"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[5px] justify-start w-[49%] md:w-full">
                  <Text
                    className="ml-4 md:ml-[0] text-base text-gray-900"
                    size="txtPoppinsSemiBold16"
                  >
                    Confirm New Password
                  </Text>
                  <Input
                    name="frame3721_Five"
                    placeholder="Confirm New Passsword"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-700_b2 sm:px-5 text-base text-blue_gray-700_b2 text-left w-full"
                    wrapClassName="bg-gray-100 pl-8 pr-[35px] py-[22px] rounded-[10px] w-full"
                  ></Input>
                </div>
              </div>
              <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[200px] py-[18px] rounded-[30px] text-base text-center text-gray-50">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[50px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default SettingsTwoPage;
