import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Crosses} from "../components/pages/Crosses";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id'
}

export const router = createBrowserRouter([
    // {
    //     path:'/',
    //     element: <Crosses/>,
    //     errorElement: <Error404/>,
    //     children: [
    //         {
    //             path: PATH.ADIDAS,
    //             element: <Adidas/>,
    //         },
    //     ]
    // }

    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "/",
                element: <Navigate to={PATH.ADIDAS}/>
            },
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
            {
                path: PATH.PUMA,
                element: <Puma/>
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>
            },
            {
                path: PATH.PRICES,
                element: <Prices/>
            },
            {
                path: PATH.MODEL,
                element: <Model/>
            },
            {
                path: '/protected',

                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/error",
                element: <Error404/>
            },

        ]
    }
])

//<Route path={'/model/:id'} element={<Model/>