import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const DetailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[15px] w-full">
        <div className="flex flex-col gap-[30px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1323px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[121px] mt-3.5 pr-[26px] py-3"
              onClick={() => navigate("/cart")}
              leftIcon={
                <div className="mr-[15px] bg-black-900 my-[7px]">
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrow_left"
                  />
                </div>
              }
            >
              <div className="font-bold sm:pr-5 text-black-900 text-left text-xl">
                Details
              </div>
            </Button>
            <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between md:ml-[0] ml-[27px] mt-2.5 w-[96%] md:w-full">
              <Img
                className="h-[525px] md:h-auto object-cover rounded-[10px]"
                src="images/img_divlazyimage_525x694.png"
                alt="divlazyimage"
              />
              <div className="flex flex-col gap-[9px] items-center justify-start">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtSnapITCRegular24Gray900"
                    >
                      Honey Hickory Burger
                    </Text>
                    <Text
                      className="leading-[20.00px] text-black-900 text-sm w-full"
                      size="txtPoppinsRegular14Black900"
                    >
                      Charbroiled with crispy fried onions, cheddar cheese,
                      crisp smoked bacon, jalapeños and honey hickory BBQ sauce.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[25px] items-center justify-start mt-1 w-[63%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="h-[17px] relative w-[89px]">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-2/5">
                          <div className="flex flex-row gap-px items-center justify-evenly w-full">
                            <div className="flex flex-col h-[17px] items-center justify-start w-[17px]">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_34.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-[17px]">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_35.svg"
                                alt="starOne_One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[17px]">
                          <Img
                            className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                            src="images/img_star1_36.svg"
                            alt="starOne_Two"
                          />
                        </div>
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[17px]">
                          <Img
                            className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                            src="images/img_star1_37.svg"
                            alt="starOne_Three"
                          />
                        </div>
                        <div className="flex flex-col h-full items-center justify-start ml-auto my-auto w-[17px]">
                          <Img
                            className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                            src="images/img_star1_38.svg"
                            alt="starOne_Four"
                          />
                        </div>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto">
                          <List
                            className="sm:flex-col flex-row grid grid-cols-5 justify-center w-auto"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-[1px] w-[17px]"
                                src="images/img_star1_39.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-[1px] w-[17px]"
                                src="images/img_star1_40.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-[1px] w-[17px]"
                                src="images/img_star1_41.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-[1px] w-[17px]"
                                src="images/img_star1_42.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-[1px] w-[17px]"
                                src="images/img_star1_43.svg"
                                alt="starOne"
                              />
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14Black900"
                    >
                      987 Reviews
                    </Text>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14Black900"
                    >
                      Add Your Review
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[29px] items-center justify-start mt-[22px] w-[37%] md:w-full">
                    <Text
                      className="sm:text-[25.52px] md:text-[27.52px] text-[29.52px] text-red-700"
                      size="txtPoppinsSemiBold2952"
                    >
                      £37.28
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[37%]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                      <Text
                        className="sm:text-[21.8px] md:text-[23.8px] text-[25.8px] text-center text-gray-900"
                        size="txtPoppinsMedium258"
                      >
                        1
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                    </div>
                  </div>
                  <div
                    className="common-pointer flex sm:flex-col flex-row gap-[25px] items-center justify-start mt-[23px] w-[77%] md:w-full"
                    onClick={() => navigate("/checkoutorder")}
                  >
                    <Button className="bg-gray-100 cursor-pointer font-semibold leading-[normal] min-w-[196px] py-[11px] rounded-[23px] text-[15.75px] text-center text-gray-900">
                      Add To Cart
                    </Button>
                    <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[196px] py-[11px] rounded-[23px] text-[15.75px] text-center text-white-A700_01">
                      Buy it Now
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-8 w-[74%] md:w-full">
                    <div className="flex flex-row gap-[15px] items-start justify-start w-[47%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_materialsymbolsadd.svg"
                        alt="materialsymbols"
                      />
                      <Text
                        className="mt-[3px] text-blue_gray-700_b2 text-sm"
                        size="txtPoppinsRegular14Bluegray700b2"
                      >
                        Add To Weekly Meals
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-red-700 text-xl"
                      size="txtPoppinsSemiBold20Red700"
                    >
                      Reviews
                    </Text>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14Black900"
                    >
                      Add Your Review
                    </Text>
                  </div>
                  <div className="h-[266px] md:h-[277px] mt-2.5 relative w-full">
                    <div className="flex flex-row gap-[15px] h-full items-start justify-center ml-auto mr-5 mt-[107px] pr-[3px] w-[14%]">
                      <Text
                        className="mb-0.5 text-[11.67px] text-red-700"
                        size="txtPoppinsRegular1167"
                      >
                        Like{" "}
                      </Text>
                      <Text
                        className="mt-0.5 text-[11.67px] text-red-700"
                        size="txtPoppinsRegular1167"
                      >
                        Reply
                      </Text>
                    </div>
                    <div className="absolute bg-gray-100 flex flex-col gap-2.5 h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[10px] w-full">
                      <div className="flex flex-col gap-[7px] items-center justify-start mt-1 w-full">
                        <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                          <Text
                            className="text-base text-gray-900"
                            size="txtPoppinsMedium16"
                          >
                            Marvin McKinney
                          </Text>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <List
                              className="sm:flex-col flex-row grid grid-cols-5 justify-center w-auto"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col h-[17px] items-center justify-start w-full">
                                <Img
                                  className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                  src="images/img_star1_44.svg"
                                  alt="starOne"
                                />
                              </div>
                              <div className="flex flex-col h-[17px] items-center justify-start w-full">
                                <Img
                                  className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                  src="images/img_star1_45.svg"
                                  alt="starOne"
                                />
                              </div>
                              <div className="flex flex-col h-[17px] items-center justify-start w-full">
                                <Img
                                  className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                  src="images/img_star1_46.svg"
                                  alt="starOne"
                                />
                              </div>
                              <div className="flex flex-col h-[17px] items-center justify-start w-full">
                                <Img
                                  className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                  src="images/img_star1_47.svg"
                                  alt="starOne"
                                />
                              </div>
                              <div className="flex flex-col h-[17px] items-center justify-start w-full">
                                <Img
                                  className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                  src="images/img_star1_48.svg"
                                  alt="starOne"
                                />
                              </div>
                            </List>
                          </div>
                        </div>
                        <Text
                          className="leading-[24.00px] text-[14.91px] text-blue_gray-700_b2 w-full"
                          size="txtPoppinsRegular1491"
                        >
                          Nulla Lorem mollit cupidatat irure. Laborum magna
                          nulla duis ullamco cillum dolor. Voluptate
                          exercitation incididunt aliquip deserunt reprehenderit
                          elit laborum.{" "}
                        </Text>
                      </div>
                      <div className="bg-gray-50 h-[83px] rounded-[10px] w-[99%]"></div>
                      <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[134px] py-[7px] rounded-[16px] text-[10.73px] text-center text-white-A700_01">
                        Submit Review
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-100 md:h-[115px] h-[136px] mt-[15px] p-2 relative rounded-[10px] w-full">
                    <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-center justify-center m-auto w-[94%]">
                      <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                        <Text
                          className="text-base text-gray-900"
                          size="txtPoppinsMedium16"
                        >
                          Brooklyn Simmons
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <List
                            className="sm:flex-col flex-row grid grid-cols-5 justify-center w-auto"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_49.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_50.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_51.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_52.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_53.svg"
                                alt="starOne"
                              />
                            </div>
                          </List>
                        </div>
                      </div>
                      <Text
                        className="leading-[24.00px] text-[14.91px] text-blue_gray-700_b2 w-full"
                        size="txtPoppinsRegular1491"
                      >
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                        duis ullamco cillum dolor. Voluptate exercitation
                        incididunt aliquip deserunt reprehenderit elit laborum.{" "}
                      </Text>
                    </div>
                    <div className="absolute bottom-[6%] flex flex-row gap-[15px] items-start justify-center pr-[3px] right-[4%] w-[14%]">
                      <Text
                        className="mb-0.5 text-[11.67px] text-red-700"
                        size="txtPoppinsRegular1167"
                      >
                        Like{" "}
                      </Text>
                      <Text
                        className="mt-0.5 text-[11.67px] text-red-700"
                        size="txtPoppinsRegular1167"
                      >
                        Reply
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100 md:h-[115px] h-[136px] mt-[15px] p-2 relative rounded-[10px] w-full">
                    <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-center justify-center m-auto w-[94%]">
                      <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                        <Text
                          className="text-base text-gray-900"
                          size="txtPoppinsMedium16"
                        >
                          Jenny Wilson
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <List
                            className="sm:flex-col flex-row grid grid-cols-5 justify-center w-auto"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_54.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_55.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_56.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_57.svg"
                                alt="starOne"
                              />
                            </div>
                            <div className="flex flex-col h-[17px] items-center justify-start w-full">
                              <Img
                                className="h-[17px] rounded-bl-[1px] rounded-br-[1px] w-[17px]"
                                src="images/img_star1_58.svg"
                                alt="starOne"
                              />
                            </div>
                          </List>
                        </div>
                      </div>
                      <Text
                        className="leading-[24.00px] text-[14.91px] text-blue_gray-700_b2 w-full"
                        size="txtPoppinsRegular1491"
                      >
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                        duis ullamco cillum dolor. Voluptate exercitation
                        incididunt aliquip deserunt reprehenderit elit laborum.{" "}
                      </Text>
                    </div>
                    <div className="absolute bottom-[6%] flex flex-row gap-[15px] items-start justify-center pr-[3px] right-[4%] w-[14%]">
                      <Text
                        className="mb-0.5 text-[11.67px] text-red-700"
                        size="txtPoppinsRegular1167"
                      >
                        Like{" "}
                      </Text>
                      <Text
                        className="mt-0.5 text-[11.67px] text-red-700"
                        size="txtPoppinsRegular1167"
                      >
                        Reply
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[9px] text-red-700 text-xl"
                    size="txtPoppinsSemiBold20Red700"
                  >
                    Add Your Review
                  </Text>
                  <div className="bg-gray-100 flex flex-col items-center justify-start mt-2.5 p-[19px] rounded-[10px] w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start my-0.5 w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <List
                          className="sm:flex-col flex-row grid grid-cols-5 justify-center w-auto"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[17px] rounded-[1px] w-[17px]"
                              src="images/img_star1_59.svg"
                              alt="starOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[17px] rounded-[1px] w-[17px]"
                              src="images/img_star1_60.svg"
                              alt="starOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[17px] rounded-[1px] w-[17px]"
                              src="images/img_star1_61.svg"
                              alt="starOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[17px] rounded-[1px] w-[17px]"
                              src="images/img_star1_62.svg"
                              alt="starOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[17px] rounded-[1px] w-[17px]"
                              src="images/img_star1_63.svg"
                              alt="starOne"
                            />
                          </div>
                        </List>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-[49%] sm:w-full">
                          <Text
                            className="ml-1 md:ml-[0] text-[14.91px] text-gray-900"
                            size="txtPoppinsSemiBold1491"
                          >
                            Name
                          </Text>
                          <Input
                            name="rectangle4368"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="bg-gray-50 flex h-[34px] rounded-[10px] w-full"
                          ></Input>
                        </div>
                        <div className="flex sm:flex-1 flex-col justify-start w-[49%] sm:w-full">
                          <Text
                            className="ml-1.5 md:ml-[0] text-[14.91px] text-gray-900"
                            size="txtPoppinsSemiBold1491"
                          >
                            Email
                          </Text>
                          <Input
                            name="rectangle4370"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="bg-gray-50 flex h-[34px] mt-0.5 rounded-[10px] w-full"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="ml-1 md:ml-[0] text-[14.91px] text-gray-900"
                          size="txtPoppinsSemiBold1491"
                        >
                          Review
                        </Text>
                        <TextArea
                          className="bg-gray-50 mt-0.5 rounded-[10px] w-full"
                          name="rectangle4371_One"
                          placeholder=""
                          name="rectangle4371_One"
                          placeholder=""
                        ></TextArea>
                      </div>
                      <Button className="bg-red-700 cursor-pointer font-semibold leading-[normal] min-w-[134px] md:ml-[0] ml-[182px] py-[7px] rounded-[16px] text-[10.73px] text-center text-white-A700_01">
                        Submit Review
                      </Button>
                    </div>
                  </div>
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

export default DetailsPage;
