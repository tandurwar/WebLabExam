import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Home from "./Component/Home";

import Delete from "./Component/Delete";

const customeRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/home",
        element:<Home/>,
      },
      {
        path:"/read",
        element:<Read/>,
      },
      {
        path:"/create",
        element:<Create/>,
      },
     
      {
        path:"/delete",
        element:<Delete/>,
      }


    ]
  },

]);
export default customeRouter;