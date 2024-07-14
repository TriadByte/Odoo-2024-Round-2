import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoginPage from './assets/Authentication/LoginPage.tsx'
import SignUp from './assets/Authentication/SignUp.tsx'
import EditProfile from './assets/Authentication/EditProfile.tsx'
import './assets/main.scss'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import GetLocation from './assets/GetLocation/GetLocation.tsx'
import { SocketProvider } from './assets/Socket/SocketContext.tsx'
import PayPalComponent from './assets/Paypal/PayPalComponent.tsx'
import ClientLogin from './assets/Client/ClientLogin.tsx'
import ClientSingUp from './assets/Client/ClientSingUp.tsx'
import MainWebsite from './assets/MainWebsite/MainWebsite.tsx'
import BooksSearchView from './assets/MainWebsite/BooksSearchView/BooksSearchView.tsx'
import TestComp from './assets/0/TestComp.tsx'
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './assets/AdminPanel/Dashboard.tsx'
import AddBook from './assets/AdminPanel/ManageBook/AddBook.tsx'
import BookStock from './assets/AdminPanel/ManageBook/BookStock.tsx'
import AddUser from './assets/AdminPanel/ManageUser/AddUser.tsx'
import BookReq from './assets/AdminPanel/ManageBook/BookReq.tsx'
import ManageUsers from './assets/AdminPanel/ManageUser/ManageUser.tsx'
import StockApprov from './assets/AdminPanel/StockApprov.tsx'


const routes = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>About</div>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/test",
    element: <TestComp />
  },
  {
    path: "/profile",
    element: <EditProfile />
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/location",
    element: <GetLocation />
  },
  {
    path: "/search",
    element: <BooksSearchView />
  },
  {
    path: "/paypal",
    element: <PayPalComponent />
  },

  // ================Client=========================
  {
    
    path: "/home",
    element: <MainWebsite />
  },
  {
    path: "/client/login",
    element: <ClientLogin />
  },
  {
    path: "/client/singup",
    element: <ClientSingUp />
  },

  // ====================Admin=========================
  {
    path: "/admin/addbook",
    element: <AddBook />
  },
  {
    path: "/admin/bookstock",
    element: <BookStock />
  },
  {
    path: "/admin/bookreq",
    element: <BookReq />
  },
  {
    path: "/admin/adduser",
    element: <AddUser />
  },
  {
    path: "/admin/manageuser",
    element: <ManageUsers />
  },
  {
    path: "/admin/stockappro",
    element: <StockApprov />
  },


]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SocketProvider>
      <RouterProvider router={routes} />
    </SocketProvider>
  </React.StrictMode>,
)
