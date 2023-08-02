import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
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
          className="common-pointer bg-transparent cursor-pointer font-medium font-poppins leading-[normal] mb-[19px] min-w-[47px] md:ml-[0] ml-[619px] md:mt-0 mt-[30px] text-[15px] text-center text-gray-900 tracking-[0.60px]"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer font-medium font-poppins leading-[normal] mb-[19px] min-w-[88px] ml-10 md:ml-[0] md:mt-0 mt-[30px] text-[15px] text-center text-gray-900 tracking-[0.60px]"
          onClick={() => navigate("/forgetpassworddesktop")}
        >
          Order Now
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer font-medium font-poppins leading-[normal] mb-[19px] min-w-[89px] ml-10 md:ml-[0] md:mt-0 mt-[30px] text-[15px] text-center text-gray-900 tracking-[0.60px]"
          onClick={() => navigate("/contactus")}
        >
          Contact Us
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-[19px] min-w-[95px] ml-10 md:ml-[0] md:mt-0 mt-[30px]"
          onClick={() => navigate("/contactus")}
          rightIcon={
            <Img
              className="h-[17px] mt-0.5 mb-[3px] ml-2"
              src="images/img_arrowdown_red_700.svg"
              alt="arrow_down"
            />
          }
        >
          <div className="font-bold font-poppins leading-[normal] text-[15px] text-left text-red-700 tracking-[0.60px]">
            Account{" "}
          </div>
        </Button>
        <div className="flex flex-col items-center justify-start mb-[19px] md:ml-[0] ml-[39px] mr-3.5 md:mt-0 mt-[30px]">
          <Text
            className="text-[15px] text-gray-900 tracking-[0.60px]"
            size="txtPoppinsMedium15"
          >
            Download The App
          </Text>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
