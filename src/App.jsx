import React from "react";
import ChangeEmailPass from "./components/pages/ChangeEmailPass.Page";
import GeneralSettingsPage from "./components/pages/GeneralSettings.Page";
import GeneralSettingsEmail from "./components/pages/GeneralSettingsEmail.Page";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
  },
  {
    path: "/generalSettings",
    element: <GeneralSettingsPage />,
  },
  {
    path: "/generalSettingsEmail",
    element: <GeneralSettingsEmail />,
  },
  {
    path: "/changeEmailPassword",
    element: <ChangeEmailPass />,
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
}

export default App;
