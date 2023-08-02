import React from "react";

import { Button, Img, PagerIndicator, Text } from "components";

type OrderOnlineColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "allweeklymeals" | "frame427319388"
> &
  Partial<{ allweeklymeals: JSX.Element | string; frame427319388: string }>;

const OrderOnlineColumn: React.FC<OrderOnlineColumnProps> = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[19px] items-center justify-start w-full">
          <div className="h-[247px] relative w-full">
            <Img
              className="absolute h-[247px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
              src="images/img_rectangle5.png"
              alt="rectangleFive"
            />
            <div className="absolute flex flex-col gap-3.5 h-max inset-y-[0] items-center justify-start left-[9%] my-auto md:px-10 sm:px-5 px-[97px] w-[48%]">
              {props?.allweeklymeals}
              <Button className="bg-red-700 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[113px] py-1.5 rounded-[13px] text-[9.05px] text-center text-white-A700_01">
                {props?.frame427319388}
              </Button>
            </div>
          </div>
          <PagerIndicator
            className="flex h-2 justify-center w-[83px]"
            count={3}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-red-700 w-[13px]"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-100 w-[13px]"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block md:ml-[0] mx-[10.99px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[10.99px] sm:ml-[0]"
          />
        </div>
      </div>
    </>
  );
};

OrderOnlineColumn.defaultProps = {
  allweeklymeals: (
    <Text
      className="md:text-5xl text-[66.49px] text-center text-gray-50 w-full"
      size="txtPoppinsBold6649"
    >
      <span className="md:text-[20.29px] sm:text-[18.29px] text-gray-50 font-poppins text-[22.29px] font-normal">
        <>
          All weekly meals <br />
          attract <br />
        </>
      </span>
      <span className="md:text-[51.45px] sm:text-[45.45px] text-amber-A400 font-poppins text-[59.45px] font-bold">
        <>
          3.5%
          <br />
        </>
      </span>
      <span className="md:text-[20.29px] sm:text-[18.29px] text-gray-50 font-poppins text-[22.29px] font-normal">
        discount
      </span>
    </Text>
  ),
  frame427319388: "Explore Now",
};

export default OrderOnlineColumn;
