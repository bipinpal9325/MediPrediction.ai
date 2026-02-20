import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Dashboard from "./components/pages/Dashboard";
import DiabetesPrediction from "./components/pages/DiabetesPrediction";
import HeartDiseasePrediction from "./components/pages/HeartDiseasePrediction";
import CovidPrediction from "./components/pages/CovidPrediction";
import CancerPrediction from "./components/pages/CancerPrediction";
import Results from "./components/pages/Results";
import DatasetInfo from "./components/pages/DatasetInfo";
import Research from "./components/pages/Research";
import Pricing from "./components/pages/Pricing";
import Contact from "./components/pages/Contact";
import Auth from "./components/pages/Auth";
import NotFound from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "dashboard", Component: Dashboard },
      { path: "predict/diabetes", Component: DiabetesPrediction },
      { path: "predict/heart-disease", Component: HeartDiseasePrediction },
      { path: "predict/covid", Component: CovidPrediction },
      { path: "predict/cancer", Component: CancerPrediction },
      { path: "results", Component: Results },
      { path: "dataset-info", Component: DatasetInfo },
      { path: "research", Component: Research },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "auth", Component: Auth },
      { path: "*", Component: NotFound },
    ],
  },
]);
