import App from "./App";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
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
        ],
    },
];

export default routes;
