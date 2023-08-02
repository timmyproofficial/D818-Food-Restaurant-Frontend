import React from "react";

import { Button, List, Text } from "components";

const StudentPlanDesktopPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto p-[95px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start max-w-[1096px] mx-auto p-[25px] md:px-5 rounded-[10px] w-full">
          <div className="flex flex-col items-center justify-start mb-[11px] mt-0.5 w-[98%] md:w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[391px] w-[62%] md:w-full">
                <Text
                  className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
                  size="txtPoppinsExtraBold40"
                >
                  Logo Here
                </Text>
                <Text
                  className="text-base text-red-700"
                  size="txtPoppinsRegular16"
                >
                  Skip
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[337px] mt-[19px]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-red-700"
                  size="txtPoppinsBold32"
                >
                  Student Plan
                </Text>
                <Text
                  className="text-base text-center text-gray-900"
                  size="txtPoppinsRegular16Gray900"
                >
                  Choose the plan your wish to enroll for.
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mr-[31px] mt-[38px] w-[97%]"
                orientation="horizontal"
              >
                <div className="bg-gray-50 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    Daily Meal
                  </Text>
                  <Text
                    className="leading-[40.00px] mt-[15px] text-base text-gray-900 w-[92%] sm:w-full"
                    size="txtPoppinsMedium16"
                  >
                    Register and get enrolled into loyalty scheme after 20 meals
                    one special meal for free
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-bold h-[46px] leading-[normal] mb-0.5 mt-[50px] py-[7px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-gray-50 w-[130px]">
                    Enroll
                  </Button>
                </div>
                <div className="bg-gray-50 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    Weekly Meals
                  </Text>
                  <Text
                    className="mt-[15px] text-base text-gray-900"
                    size="txtPoppinsMedium16"
                  >
                    <>
                      Weekly meals Monday to Sunday
                      <br />
                      <br />
                      Weekly Can Be one or two meals daily
                      <br />
                      <br />
                      All weekly meal attract 3.5% discount
                    </>
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-bold h-[46px] leading-[normal] mb-0.5 mt-[18px] py-[7px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-gray-50 w-[130px]">
                    Enroll
                  </Button>
                </div>
                <div className="bg-gray-50 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    Monthly Meals
                  </Text>
                  <Text
                    className="mt-[15px] text-base text-gray-900"
                    size="txtPoppinsMedium16"
                  >
                    <>
                      Monthly meals Monday to Sundayfor a Month
                      <br />
                      <br />
                      Monthly Can Be one or two meals daliy
                      <br />
                      <br />
                      All Monthly meal attract 5.5% discount
                    </>
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-bold h-[46px] leading-[normal] mb-0.5 mt-[18px] py-[7px] rounded-[10px] shadow-bs2 sm:text-[16.99px] md:text-[18.99px] text-[20.99px] text-center text-gray-50 w-[130px]">
                    Enroll
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPlanDesktopPage;
