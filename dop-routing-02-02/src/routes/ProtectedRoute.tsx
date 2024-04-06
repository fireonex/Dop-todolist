
import { Navigate } from "react-router-dom";
import {ReactElement} from "react";

type PropsType = {
    children: ReactElement;
};

export const ProtectedRoute: ({children}: PropsType) => JSX.Element = ({ children }: PropsType): JSX.Element => {
    const logged = true;

    return logged
        ? children : <Navigate to="/error" />;
};
