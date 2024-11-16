import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLaout/MainLayout";
import Home from "../Page/Home";
import About from "../Components/About";
import AllTreatments from "../Components/AllTreatments";
import MyAppoinment from "../Page/MyAppoinment";
import Profile from "../Page/Profile";
import Login from "../Layout/Login";
import Register from "../Layout/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();

          const feedBackRes = await fetch("/happyclients.json");
          const feedBackData = await feedBackRes.json();

          return { servicesData, feedBackData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/about/:id",
        element: <About></About>,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const silgelData = data.find((d) => d.id == params.id);
          // const singleData = data.find((d) => d.id == params.id);
          return silgelData;
        },
      },
      {
        path: "/myappoinment",
        element: <MyAppoinment></MyAppoinment>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);


export default router;