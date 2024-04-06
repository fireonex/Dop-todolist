import {useContext} from "react";
import {ModelCrossContext} from "../../context/ModelProvider";

type Props = {

};

export const ProtectedPage = (props: Props) => {

    const {setModel} = useContext(ModelCrossContext)

    const hideHandle = () => {
        setModel('hide')
    }

    const buyHandle = () => {
        setModel(null)
    }

    return (
        <div>
            ProtectedPage
            <div>
                <button onClick={hideHandle}>СРОЧНО Спрятать контрафактный товар</button>
                <button onClick={buyHandle}>ВЫСТАВИТЬ на продажу контрафактный товар</button>
            </div>

        </div>
    );
};