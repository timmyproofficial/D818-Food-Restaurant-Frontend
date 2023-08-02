import React from "react";

const sizeClasses = {
  txtPoppinsBold716: "font-bold font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtInterBold1656: "font-bold font-inter",
  txtInterBold1497: "font-bold font-inter",
  txtPoppinsRegular1167: "font-normal font-poppins",
  txtPoppinsLight30: "font-light font-poppins",
  txtSnapITCRegular20: "font-normal font-snapitc",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsRegular3857: "font-normal font-poppins",
  txtPoppinsBold32Black900: "font-bold font-poppins",
  txtPoppinsRegular1638: "font-normal font-poppins",
  txtPoppinsSemiBold2494: "font-poppins font-semibold",
  txtPoppinsLight1775: "font-light font-poppins",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtPoppinsSemiBold331: "font-poppins font-semibold",
  txtPoppinsLight2107: "font-light font-poppins",
  txtPoppinsMedium1694: "font-medium font-poppins",
  txtPoppinsMedium1331: "font-medium font-poppins",
  txtPoppinsRegular14Black900: "font-normal font-poppins",
  txtSnapITCRegular2078: "font-normal font-snapitc",
  txtPoppinsBold42: "font-bold font-poppins",
  txtPoppinsSemiBold14Gray900: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtSnapITCRegular2071: "font-normal font-snapitc",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsMedium258: "font-medium font-poppins",
  txtSnapITCRegular32: "font-normal font-snapitc",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular2169: "font-normal font-poppins",
  txtPoppinsSemiBold1897: "font-poppins font-semibold",
  txtInterBold1762: "font-bold font-inter",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsExtraBold40: "font-extrabold font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtSnapITCRegular24: "font-normal font-snapitc",
  txtPoppinsRegular16Gray900: "font-normal font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold64: "font-poppins font-semibold",
  txtPoppinsSemiBold1491: "font-poppins font-semibold",
  txtPoppinsMedium16Gray50: "font-medium font-poppins",
  txtSnapITCRegular28: "font-normal font-snapitc",
  txtPoppinsBold2099: "font-bold font-poppins",
  txtSnapITCRegular24Gray900: "font-normal font-snapitc",
  txtPoppinsBold1762: "font-bold font-poppins",
  txtPoppinsBold32Gray100: "font-bold font-poppins",
  txtPoppinsBold15: "font-bold font-poppins",
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsBold20Black900: "font-bold font-poppins",
  txtRubikBold20: "font-bold font-rubik",
  txtPoppinsMedium20Gray900: "font-medium font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsSemiBold2952: "font-poppins font-semibold",
  txtPoppinsRegular2169Gray100: "font-normal font-poppins",
  txtPoppinsRegular1455: "font-normal font-poppins",
  txtPoppinsRegular145: "font-normal font-poppins",
  txtPoppinsBold6649: "font-bold font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsSemiBold2152: "font-poppins font-semibold",
  txtPoppinsRegular14Bluegray700b2: "font-normal font-poppins",
  txtPoppinsSemiBold20Black900: "font-poppins font-semibold",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsBold24Gray900: "font-bold font-poppins",
  txtPoppinsSemiBold1914: "font-poppins font-semibold",
  txtInterBold1422: "font-bold font-inter",
  txtPoppinsSemiBold1274: "font-poppins font-semibold",
  txtPoppinsRegular1491: "font-normal font-poppins",
  txtPoppinsSemiBold2485: "font-poppins font-semibold",
  txtPoppinsBold20: "font-bold font-poppins",
  txtInterBold32: "font-bold font-inter",
  txtPoppinsRegular1331: "font-normal font-poppins",
  txtPoppinsMedium15Gray50: "font-medium font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsMedium1509: "font-medium font-poppins",
  txtPoppinsSemiBold24Gray900: "font-poppins font-semibold",
  txtSnapITCRegular32Gray900: "font-normal font-snapitc",
  txtPoppinsExtraBold24: "font-extrabold font-poppins",
  txtPoppinsSemiBold20Red700: "font-poppins font-semibold",
  txtPoppinsRegular16AmberA400: "font-normal font-poppins",
  txtPoppinsLight30AmberA400: "font-light font-poppins",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
