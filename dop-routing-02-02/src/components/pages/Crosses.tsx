import {Outlet} from "react-router-dom";


type Props = {

};
export const Crosses = (props: Props) => {
    return (
        <div>
            <div>header</div>
            <Outlet/>
            <div>footer</div>
        </div>
    );
};