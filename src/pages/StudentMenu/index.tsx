import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const StudentMenuPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[25px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1325px] mt-[30px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtPoppinsSemiBold32"
              >
                Student Menu ( Weekly Menu)
              </Text>
              <Text
                className="common-pointer text-base text-center text-red-700"
                size="txtPoppinsRegular16"
                onClick={() => navigate("/studentplandesktop")}
              >
                Change Plan
              </Text>
            </div>
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div
                className="common-pointer bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full"
                onClick={() => navigate("/detailsone")}
              >
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_214x283.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-[11px] text-gray-900 text-xl"
                  size="txtPoppinsBold20"
                >
                  Honey Hickory Burger
                </Text>
                <Text
                  className="leading-[20.00px] mt-[9px] text-black-900 text-center text-sm w-full"
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
                <div className="flex flex-row gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_2.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-[9px] text-gray-900 text-xl"
                  size="txtPoppinsBold20"
                >
                  Chili Chicken
                </Text>
                <Text
                  className="leading-[20.00px] mt-[11px] text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  Chicken drumsticks, tomato sauce, chili sauce and chopped
                  green onions served with steamed rice or spaghetti
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £27.28
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_3.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-3 text-gray-900 text-xl"
                  size="txtPoppinsBold20"
                >
                  Lamb Chops
                </Text>
                <Text
                  className="leading-[20.00px] mt-2 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  Grilled lamb chops with rosemary and garlic, served with a
                  side of roasted root vegetables and a mixed green salad
                  dressed in a balsamic vinaigrette.
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £57.28
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-100 flex flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_4.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3 text-gray-900 text-xl"
                    size="txtRubikBold20"
                  >
                    Pork ribs
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-3.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    Smoky BBQ pork ribs coated in a tangy sauce, served with a
                    side of coleslaw and cornbread.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £37.21
                  </Text>
                  <div className="flex flex-row font-poppins gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                    <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                      Add To Cart
                    </Button>
                    <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                      Remove From List
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_5.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-3 text-gray-900 text-xl"
                  size="txtRubikBold20"
                >
                  French Fries
                </Text>
                <Text
                  className="leading-[20.00px] mt-3.5 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  English-style fish and chips, featuring battered cod fillets
                  and a side of thick-cut French fries, served with tartar sauce
                  and malt vinegar.
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £27.28
                </Text>
                <div className="flex flex-row font-poppins gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_6.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-[11px] text-gray-900 text-xl"
                  size="txtPoppinsBold20"
                >
                  Fish Fingers
                </Text>
                <Text
                  className="leading-[20.00px] mt-[9px] text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  Classic fish fingers with tartar sauce, served with a side of
                  oven-baked potato wedges and a mixed green salad.
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £57.28
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_3.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-3 text-gray-900 text-xl"
                  size="txtPoppinsBold20"
                >
                  Lamb Chops
                </Text>
                <Text
                  className="leading-[20.00px] mt-2 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  Grilled lamb chops with rosemary and garlic, served with a
                  side of roasted root vegetables and a mixed green salad
                  dressed in a balsamic vinaigrette.
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £57.28
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_7.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-[11px] text-gray-900 text-xl"
                  size="txtPoppinsBold20"
                >
                  Beef burger
                </Text>
                <Text
                  className="leading-[20.00px] mt-[9px] text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  A juicy beef patty topped with melted cheddar cheese, lettuce,
                  tomato, pickles, and special sauce, served with crispy French
                  fries
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £27.28
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_5.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-3 text-gray-900 text-xl"
                  size="txtRubikBold20"
                >
                  French Fries
                </Text>
                <Text
                  className="leading-[20.00px] mt-3.5 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  English-style fish and chips, featuring battered cod fillets
                  and a side of thick-cut French fries, served with tartar sauce
                  and malt vinegar.
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £27.28
                </Text>
                <div className="flex flex-row font-poppins gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_6.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-[11px] text-gray-900 text-xl"
                  size="txtPoppinsBold20"
                >
                  Fish Fingers
                </Text>
                <Text
                  className="leading-[20.00px] mt-[9px] text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  Classic fish fingers with tartar sauce, served with a side of
                  oven-baked potato wedges and a mixed green salad.
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £57.28
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                <Img
                  className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_divlazyimage_8.png"
                  alt="divlazyimage"
                />
                <Text
                  className="mt-3 text-gray-900 text-xl"
                  size="txtPoppinsBold20"
                >
                  BBQ Burger
                </Text>
                <Text
                  className="leading-[20.00px] mt-2 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  A beef patty topped with BBQ sauce, bacon, and other toppings
                  such as onion rings, served on a bun.
                </Text>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  £57.28
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Add To Cart
                  </Button>
                  <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                    Remove From List
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-100 flex flex-col items-center justify-start p-3.5 rounded-[10px] w-full">
                  <Img
                    className="h-[214px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_divlazyimage_4.png"
                    alt="divlazyimage"
                  />
                  <Text
                    className="mt-3 text-gray-900 text-xl"
                    size="txtRubikBold20"
                  >
                    Pork ribs
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-3.5 text-black-900 text-center text-sm w-full"
                    size="txtPoppinsRegular14Black900"
                  >
                    Smoky BBQ pork ribs coated in a tangy sauce, served with a
                    side of coleslaw and cornbread.
                  </Text>
                  <Text
                    className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    £37.21
                  </Text>
                  <div className="flex flex-row font-poppins gap-[13px] items-center justify-start mt-[7px] w-[85%] md:w-full">
                    <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                      Add To Cart
                    </Button>
                    <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[10px] text-center text-white-A700_01">
                      Remove From List
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[49px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default StudentMenuPage;
