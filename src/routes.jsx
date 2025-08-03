import App from "./App";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Whishlist from "./components/whishlist/Whishlist";
const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "whishlist",
                element: <Whishlist/>,
            }
        ],
    },
];

export default routes;
