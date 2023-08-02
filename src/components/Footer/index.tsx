import React from "react";

import { Button, Img, Line, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[489px] items-center justify-center p-[42px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group52.svg')" }}
        >
          <div className="flex flex-col items-center justify-center mt-[41px] w-[88%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtPoppinsBold32Gray100"
            >
              Logo Here
            </Text>
            <Text
              className="mt-4 text-base text-center text-gray-50 tracking-[1.60px] w-[89%] sm:w-full"
              size="txtPoppinsMedium16Gray50"
            >
              <>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed nec volutpat elit. Nullam blandit tellus eu mi rutrum, sit
                amet eleifend nulla ullamcorper. Ut suscipit suscipit massa, id
                suscipit justo cursus at. Vestibulum vel purus turpis. Fusce
                vehicula nisi non lacus pretium bibendum. Nam convallis, sapien
                vel porta eleifend, ipsum nunc mattis justo, sit amet semper leo
                augue sit amet arcu. Quisque
              </>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-7 w-[99%] md:w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start pt-0.5 w-[18%] md:w-full">
                <Text
                  className="text-base text-center text-gray-50 tracking-[1.60px]"
                  size="txtPoppinsMedium16Gray50"
                >
                  Payment Methods
                </Text>
                <Img
                  className="h-[25px] md:h-auto object-cover"
                  src="images/img_frame427319914.png"
                  alt="frame427319914"
                />
              </div>
              <div className="flex flex-row gap-6 items-center justify-center w-[16%] md:w-full">
                <div className="bg-gray-50 flex flex-col h-12 md:h-auto items-center justify-center p-2.5 rounded-bl-[23px] rounded-br-[22px] rounded-tl-[23px] rounded-tr-[22px] shadow-bs w-[45px]">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </div>
                <Button className="bg-gray-50 flex items-center justify-center p-[15px] rounded-[23px] shadow-bs1 w-1/4">
                  <Img src="images/img_facebook.svg" alt="facebook" />
                </Button>
                <div className="h-12 relative w-1/4">
                  <div className="bg-gray-50 h-12 m-auto rounded-[24px] w-full"></div>
                  <Img
                    className="absolute h-[18px] inset-[0] justify-center m-auto"
                    src="images/img_music.svg"
                    alt="music"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-between w-[24%] md:w-full">
                <Img
                  className="h-10 md:h-auto object-cover"
                  src="images/img_link.png"
                  alt="link"
                />
                <Img
                  className="h-10 md:h-auto object-cover"
                  src="images/img_link_40x115.png"
                  alt="link_One"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[45px] items-center justify-start mt-11 w-full">
              <Line className="bg-gray-50 h-px w-full" />
              <Text
                className="text-base text-gray-100"
                size="txtPoppinsLight16"
              >
                © 2023 Company’s Name. ALL RIGHT RESERVED.
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
