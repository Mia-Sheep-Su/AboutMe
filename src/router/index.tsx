import { createBrowserRouter } from 'react-router-dom';
import App from "../APP";
import Home from "../pages/Home";
import Resume from '../pages/Resume';
import About from '../pages/About';
import MyHamsterTest from '../pages/MyHamsterTest';
import InformationPage from '../pages/information';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },                     // /
            { path: 'about', element: <About /> },               // /about
            { path: 'myhamstertest', element: <MyHamsterTest /> }, // /myhamstertest
            //{ path: 'hamsterpicture', element: <HamsterPicture /> }, // /hamsterpicture
            { path: 'information', element: <InformationPage /> },
            { path: 'resume', element: <Resume /> },             // /resume or /other
        ],
    },
]);