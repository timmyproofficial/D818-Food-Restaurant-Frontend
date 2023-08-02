import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
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
          className="common-pointer bg-transparent cursor-pointer font-bold font-poppins leading-[normal] mb-[19px] min-w-[88px] ml-10 md:ml-[0] md:mt-0 mt-[30px] text-[15px] text-center text-red-700 tracking-[0.60px]"
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
        <div className="flex flex-row gap-2.5 items-center justify-center mb-[19px] ml-10 md:ml-[0] md:mt-0 mt-[30px] w-[8%] md:w-full">
          <Text
            className="text-[15px] text-gray-900 tracking-[0.60px]"
            size="txtPoppinsMedium15"
          >
            Account{" "}
          </Text>
          <Img
            className="h-[17px] w-[17px]"
            src="images/img_arrowdown_gray_900.svg"
            alt="arrowdown"
          />
        </div>
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

Header.defaultProps = {};

export default Header;
