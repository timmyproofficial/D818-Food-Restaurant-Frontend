import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PersonalDetailsDesktop = React.lazy(
  () => import("pages/PersonalDetailsDesktop"),
);
const PersonalDetailsDesktopOne = React.lazy(
  () => import("pages/PersonalDetailsDesktopOne"),
);
const CreateanaccountDesktop = React.lazy(
  () => import("pages/CreateanaccountDesktop"),
);
const AccountDesktop = React.lazy(() => import("pages/AccountDesktop"));
const Details = React.lazy(() => import("pages/Details"));
const DetailsOne = React.lazy(() => import("pages/DetailsOne"));
const Cart = React.lazy(() => import("pages/Cart"));
const OrderOnline = React.lazy(() => import("pages/OrderOnline"));
const NewPasswordDesktop = React.lazy(() => import("pages/NewPasswordDesktop"));
const SecurityCodeDesktop = React.lazy(
  () => import("pages/SecurityCodeDesktop"),
);
const Settings = React.lazy(() => import("pages/Settings"));
const SettingsThree = React.lazy(() => import("pages/SettingsThree"));
const SettingsFour = React.lazy(() => import("pages/SettingsFour"));
const SettingsTwo = React.lazy(() => import("pages/SettingsTwo"));
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const StudentMenu = React.lazy(() => import("pages/StudentMenu"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const CheckoutReady = React.lazy(() => import("pages/CheckoutReady"));
const CheckoutConfirmationOne = React.lazy(
  () => import("pages/CheckoutConfirmationOne"),
);
const CheckoutConfirmation = React.lazy(
  () => import("pages/CheckoutConfirmation"),
);
const CheckoutPending = React.lazy(() => import("pages/CheckoutPending"));
const CheckoutOrderGooglePay = React.lazy(
  () => import("pages/CheckoutOrderGooglePay"),
);
const CheckoutOrderApplepay = React.lazy(
  () => import("pages/CheckoutOrderApplepay"),
);
const CheckoutOrderStripe = React.lazy(
  () => import("pages/CheckoutOrderStripe"),
);
const CheckoutOrderPaypal = React.lazy(
  () => import("pages/CheckoutOrderPaypal"),
);
const CheckoutOrderCard = React.lazy(() => import("pages/CheckoutOrderCard"));
const CheckoutOrder = React.lazy(() => import("pages/CheckoutOrder"));
const ForgetPasswordDesktop = React.lazy(
  () => import("pages/ForgetPasswordDesktop"),
);
const LogInDesktop = React.lazy(() => import("pages/LogInDesktop"));
const StudentPlanDesktop = React.lazy(() => import("pages/StudentPlanDesktop"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/studentplandesktop" element={<StudentPlanDesktop />} />
          <Route path="/logindesktop" element={<LogInDesktop />} />
          <Route
            path="/forgetpassworddesktop"
            element={<ForgetPasswordDesktop />}
          />
          <Route path="/checkoutorder" element={<CheckoutOrder />} />
          <Route path="/checkoutordercard" element={<CheckoutOrderCard />} />
          <Route
            path="/checkoutorderpaypal"
            element={<CheckoutOrderPaypal />}
          />
          <Route
            path="/checkoutorderstripe"
            element={<CheckoutOrderStripe />}
          />
          <Route
            path="/checkoutorderapplepay"
            element={<CheckoutOrderApplepay />}
          />
          <Route
            path="/checkoutordergooglepay"
            element={<CheckoutOrderGooglePay />}
          />
          <Route path="/checkoutpending" element={<CheckoutPending />} />
          <Route
            path="/checkoutconfirmation"
            element={<CheckoutConfirmation />}
          />
          <Route
            path="/checkoutconfirmationone"
            element={<CheckoutConfirmationOne />}
          />
          <Route path="/checkoutready" element={<CheckoutReady />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/studentmenu" element={<StudentMenu />} />
          <Route path="/settingsone" element={<SettingsOne />} />
          <Route path="/settingstwo" element={<SettingsTwo />} />
          <Route path="/settingsfour" element={<SettingsFour />} />
          <Route path="/settingsthree" element={<SettingsThree />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/securitycodedesktop"
            element={<SecurityCodeDesktop />}
          />
          <Route path="/newpassworddesktop" element={<NewPasswordDesktop />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detailsone" element={<DetailsOne />} />
          <Route path="/details" element={<Details />} />
          <Route path="/accountdesktop" element={<AccountDesktop />} />
          <Route
            path="/createanaccountdesktop"
            element={<CreateanaccountDesktop />}
          />
          <Route
            path="/personaldetailsdesktopone"
            element={<PersonalDetailsDesktopOne />}
          />
          <Route
            path="/personaldetailsdesktop"
            element={<PersonalDetailsDesktop />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
