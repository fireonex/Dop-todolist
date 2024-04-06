import {adidasArr, AdidasItem} from "./Adidas";
import {Link, useLocation, useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";
import styles from "./../Site.module.css";



type CrossModels= {
    [key: string]: (AdidasItem[] | PumaItem[]);
}

const crossModels: CrossModels={
    adidas:adidasArr,
    puma: pumaArr
}

export const Model = () => {

    const { model, id } = useParams();
    const locale = useLocation()

    const currentModel = model
        ? crossModels[model].find((el) => el.id === Number(id))
        : null;

      return (
        <div style={{textAlign:'center'}}>


            {locale.pathname === '/adidas/3' &&
                <div style={{ backgroundColor: 'black', padding: '10px', marginTop: '20px' }}>
                    <div>Можем вам еще посоветовать перейти в раздел ABIBAS</div>
                    <Link to="/abidas" className={styles.LinkLikeButton}>перейти в раздел ABIBAS</Link>
                </div>
            }






            {currentModel
                ?<>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </>
                :   <h2>Модель отсутствует</h2>
            }
        </div>
);
};