import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import OrderOnlineColumn from "components/OrderOnlineColumn";
import OrderOnlineColumnchilichicken from "components/OrderOnlineColumnchilichicken";
import OrderOnlineColumnfishfingers from "components/OrderOnlineColumnfishfingers";
import OrderOnlineColumnhoneyhickoryburOne from "components/OrderOnlineColumnhoneyhickoryburOne";
import OrderOnlineColumnlambchops from "components/OrderOnlineColumnlambchops";
import OrderOnlineColumnlanguage from "components/OrderOnlineColumnlanguage";
import OrderOnlineColumnporkribs from "components/OrderOnlineColumnporkribs";

import { CloseSVG } from "../../assets/images";

const CartPage: React.FC = () => {
  const [frame427319439value, setFrame427319439value] =
    React.useState<string>("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins gap-6 items-center justify-end mx-auto pt-[15px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1324px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="h-[1344px] md:h-[1399px] sm:h-[2775px] relative w-full">
            <Input
              name="frame427319439"
              placeholder="Search "
              value={frame427319439value}
              onChange={(e) => setFrame427319439value(e)}
              className="leading-[normal] md:text-[23.5px] p-0 placeholder:text-blue_gray-700_5a sm:px-5 sm:text-[21.5px] text-[25.5px] text-blue_gray-700_5a text-left w-full"
              wrapClassName="absolute bg-gray-100 flex left-[0] pl-[21px] pr-[35px] py-[7px] rounded-[10px] top-[0] w-3/4"
              prefix={
                <div className="h-[30px] mt-[5px] mb-[3px] mr-[21px] w-[30px] bg-blue_gray-700_b2 right-[2%] absolute inset-y-[0]">
                  <Img
                    className="cursor-pointer h-[30px] absolute my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              }
              suffix={
                <CloseSVG
                  fillColor="#5156665a"
                  className="cursor-pointer h-[30px] absolute my-auto"
                  onClick={() => setFrame427319439value("")}
                  style={{
                    visibility:
                      frame427319439value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={30}
                  width={30}
                  viewBox="0 0 30 30"
                />
              }
            ></Input>
            <div className="absolute h-[1344px] md:h-[1399px] sm:h-[2775px] inset-[0] justify-center m-auto w-full">
              <div className="absolute bg-gray-100 flex flex-col gap-[13px] items-center justify-start p-3.5 right-[0] rounded-[10px] top-[0] w-[24%]">
                <Text
                  className="mt-0.5 text-black-900 text-center text-sm w-[98%] sm:w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  Delivery Time: 12:00 - 12:30, 15:00 - 15:30 & 18:30 - 19:00
                </Text>
                <div className="flex flex-col gap-[15px] items-center justify-end mb-1 w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start mt-[277px] w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-gray-900"
                        size="txtPoppinsBold16"
                      >
                        Tip
                      </Text>
                      <Text
                        className="text-base text-center text-gray-900"
                        size="txtPoppinsMedium16"
                      >
                        £5.59
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                      <Button className="bg-gray-100 border border-solid border-white-A700_01 cursor-pointer leading-[normal] min-w-[52px] py-[9px] rounded-[5px] text-base text-center text-gray-900">
                        0%
                      </Button>
                      <Button className="bg-red-700 border border-solid border-white-A700_01 cursor-pointer leading-[normal] min-w-[52px] py-[9px] rounded-[5px] text-base text-center text-gray-100">
                        5%
                      </Button>
                      <Button className="bg-gray-100 border border-solid border-white-A700_01 cursor-pointer leading-[normal] min-w-[52px] py-[9px] rounded-[5px] text-base text-center text-gray-900">
                        10%
                      </Button>
                      <Button className="bg-gray-100 border border-solid border-white-A700_01 cursor-pointer leading-[normal] min-w-[73px] py-[9px] rounded-[5px] text-base text-center text-gray-900">
                        Others
                      </Button>
                    </div>
                  </div>
                  <Line className="bg-gray-50 h-px w-[92%]" />
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-gray-900"
                        size="txtPoppinsBold16"
                      >
                        Sub-total
                      </Text>
                      <Text
                        className="text-base text-gray-900 text-right"
                        size="txtPoppinsSemiBold16"
                      >
                        £117.43
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-gray-900"
                        size="txtPoppinsBold16"
                      >
                        Taxes
                      </Text>
                      <Text
                        className="text-base text-gray-900 text-right"
                        size="txtPoppinsSemiBold16"
                      >
                        £0
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-gray-900"
                        size="txtPoppinsBold16"
                      >
                        Total
                      </Text>
                      <Text
                        className="text-base text-gray-900 text-right"
                        size="txtPoppinsSemiBold16"
                      >
                        £117.43
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[180px] py-2.5 rounded-[21px] text-[14.41px] text-center text-white-A700_01">
                    Go to checkout
                  </Button>
                  <Text
                    className="mb-1.5 text-black-900_4c text-center text-sm w-[79%] sm:w-full"
                    size="txtPoppinsRegular14"
                  >
                    Delivery time will take at least 45mins.
                  </Text>
                </div>
              </div>
              <div className="absolute h-[275px] inset-x-[0] mx-auto top-[5%] w-[99%] md:w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 3 },
                    1050: { items: 6 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="m-auto w-full"
                  items={[...Array(18)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <OrderOnlineColumn
                        className="flex flex-col items-center justify-start mx-2.5"
                        allweeklymeals={
                          <Text className="font-bold md:text-5xl text-[66.49px] text-center text-gray-50">
                            <span className="md:text-[20.29px] sm:text-[18.29px] text-gray-50 font-poppins text-[22.29px] font-normal">
                              <>
                                All weekly meals <br />
                                attract <br />
                              </>
                            </span>
                            <span className="md:text-[51.45px] sm:text-[45.45px] text-amber-A400 font-poppins text-[59.45px]">
                              <>
                                3.5%
                                <br />
                              </>
                            </span>
                            <span className="md:text-[20.29px] sm:text-[18.29px] text-gray-50 font-poppins text-[22.29px] font-normal">
                              discount
                            </span>
                          </Text>
                        }
                      />
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-2 bg-red-700 w-[13px] relative" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-100 w-[13px] relative"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute bottom-[0] flex h-2 left-[34%] w-[83px]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-red-700 w-[13px] relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-100 w-[13px] relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block md:ml-[0] mx-[10.99px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[10.99px] sm:ml-[0]"
                />
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-[15px] items-start justify-start left-[0] w-3/4">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  Recommended
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      <OrderOnlineColumnhoneyhickoryburOne className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full" />
                      <OrderOnlineColumnchilichicken className="bg-gray-100 flex flex-1 flex-col justify-start p-3.5 rounded-[10px] w-full" />
                      <OrderOnlineColumnlambchops className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full" />
                      <OrderOnlineColumnporkribs className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full" />
                      <OrderOnlineColumnlanguage className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full" />
                      <OrderOnlineColumnfishfingers className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[26px] justify-start w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[60px] md:px-5 w-[69%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtPoppinsBold32Black900"
              >
                Food Items
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[21px] w-full">
                <Button
                  className="border-[3px] border-red-700 border-solid cursor-pointer flex items-center justify-center min-w-[123px] px-3.5 py-[7px] rounded-[15px]"
                  leftIcon={
                    <Img
                      className="h-[34px] mr-1"
                      src="images/img_cilpizza.svg"
                      alt="cil:pizza"
                    />
                  }
                >
                  <div className="font-semibold leading-[normal] text-[18.97px] text-center text-red-700">
                    Pizza
                  </div>
                </Button>
                <Button
                  className="border-[3px] border-red-700 border-solid cursor-pointer flex items-center justify-center min-w-[148px] pl-[11px] pr-3.5 py-[7px] rounded-[15px]"
                  leftIcon={
                    <div className="mr-[3px] bg-red-700">
                      <Img src="images/img_lightbulb.svg" alt="light_bulb" />
                    </div>
                  }
                >
                  <div className="font-semibold leading-[normal] text-[18.97px] text-center text-red-700">
                    Ice cream
                  </div>
                </Button>
                <div className="bg-red-700 flex flex-col items-center justify-end p-1 rounded-[15px]">
                  <div className="flex flex-row items-start justify-start pr-[3px] py-[3px] w-[85%] md:w-full">
                    <Img
                      className="h-[31px] w-[31px]"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <Text
                      className="ml-0.5 mt-0.5 text-[18.97px] text-center text-gray-50"
                      size="txtPoppinsSemiBold1897"
                    >
                      Burger
                    </Text>
                  </div>
                </div>
                <Button
                  className="border-[3px] border-red-700 border-solid cursor-pointer flex items-center justify-center min-w-[210px] px-[18px] py-2 rounded-[15px]"
                  leftIcon={
                    <div className="h-[31px] mt-px mr-1.5 w-[31px] bg-red-700">
                      <Img
                        className="h-[31px]"
                        src="images/img_lightbulb_red_700.svg"
                        alt="light_bulb"
                      />
                    </div>
                  }
                >
                  <div className="font-semibold leading-[normal] text-[18.97px] text-center text-red-700">
                    Chicken Fries
                  </div>
                </Button>
                <Button
                  className="border-[3px] border-red-700 border-solid cursor-pointer flex items-center justify-center min-w-[210px] px-[18px] py-2 rounded-[15px]"
                  leftIcon={
                    <div className="h-[31px] mt-px mr-1.5 w-[31px] bg-red-700">
                      <Img
                        className="h-[31px]"
                        src="images/img_lightbulb_red_700.svg"
                        alt="light_bulb"
                      />
                    </div>
                  }
                >
                  <div className="font-semibold leading-[normal] text-[18.97px] text-center text-red-700">
                    Chicken Fries
                  </div>
                </Button>
                <Img
                  className="h-[49px]"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[38px] w-full">
                <div className="bg-gray-100 flex flex-1 flex-col items-end justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_214x283.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3.5 text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Honey Hickory Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    Charbroiled with crispy fried onions, cheddar cheese, crisp
                    smoked bacon, jalapeños and honey hickory BBQ sauce.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £37.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mr-[85px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_7.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="ml-20 md:ml-[0] mt-3.5 text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Beef burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A juicy beef patty topped with melted cheddar cheese,
                    lettuce, tomato, pickles, and special sauce, served with
                    crispy French fries
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[102px] mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £27.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 mx-auto py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_8.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="md:ml-[0] ml-[82px] mt-3.5 text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    BBQ Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A beef patty topped with BBQ sauce, bacon, and other
                    toppings such as onion rings, served on a bun.
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[102px] mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £57.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 mx-auto py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_9.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="md:ml-[0] ml-[82px] mt-3.5 text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Fish Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    Smoky BBQ pork ribs coated in a tangy sauce, served with a
                    side of coleslaw and cornbread.
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[102px] mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £37.21
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 mx-auto py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_10.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-[13px] text-center text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Lamb Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A patty made from ground lamb, served on a bun with toppings
                    and condiments.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £27.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_11.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3.5 text-center text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Bison Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A patty made from ground bison, served on a bun with
                    toppings and condiments.{" "}
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £57.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_12.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3.5 text-center text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Chicken Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A patty made from ground chicken, served on a bun with
                    toppings and condiments.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £37.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_13.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3.5 text-center text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Turkey Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A patty made from ground Turkey, served on a bun with
                    toppings and condiments.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £27.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_14.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3.5 text-center text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Cheeseburger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A hamburger topped with a slice of cheese, usually cheddar,
                    American, or Swiss.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £57.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_15.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3.5 text-center text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Veggie Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A patty made from plant-based ingredients such as
                    vegetables, legumes, or grains, served on a bun with
                    toppings and condiments.
                  </Text>
                  <Text
                    className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £37.21
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_16.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3.5 text-center text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Juicy Lucy
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A burger that includes melted cheese inside the patty, which
                    oozes out when the burger is cooked.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £27.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_6.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3.5 text-center text-gray-900 text-xl"
                    size="txtSnapITCRegular20"
                  >
                    Breakfast Burger
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    A burger that includes breakfast ingredients, such as a
                    fried egg, bacon, and cheese, served on a bun.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £57.28
                  </Text>
                  <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] mb-[5px] min-w-[113px] mt-0.5 py-[5px] rounded-[13px] text-[11px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CartPage;
