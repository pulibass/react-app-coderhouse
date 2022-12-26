import ButtonSeeMore from '../ButtonSeeMore/ButtonSeeMore';
import './itemList.scss';

export default function itemList() {
    return (

        <div className="containerCard">

            <div className="card">
                <div className="containerImgText">

                    <div className="titleCard">
                        <h2>Buzo</h2>
                    </div>
                    <div className="imgCard">
                        <img src={"./img/1.png"} alt="Buzo" />
                    </div>
                </div>
                <div className="containerDetailsCard">
                    <div className="price">
                        <h3>$5000</h3>
                    </div>
                    <div className="description">
                        <h4>Buzo Negro Cripto</h4>
                    </div>
                    <div className="buttonSeeMoreCard">
                        <ButtonSeeMore />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="containerImgText">

                    <div className="titleCard">
                        <h2>Remera Criptos</h2>
                    </div>
                    <div className="imgCard">
                        <img src={"./img/10.png"} alt="Buzo" />
                    </div>
                </div>
                <div className="containerDetailsCard">
                    <div className="price">
                        <h3>$3000</h3>
                    </div>
                    <div className="description">
                        <h4>Remera Blanca Estampada</h4>
                    </div>
                    <div className="buttonSeeMoreCard">
                        <ButtonSeeMore />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="containerImgText">

                    <div className="titleCard">
                        <h2>Remera Santa Cripto</h2>
                    </div>
                    <div className="imgCard">
                        <img src={"./img/9.png"} alt="Buzo" />
                    </div>
                </div>
                <div className="containerDetailsCard">
                    <div className="price">
                        <h3>$3500</h3>
                    </div>
                    <div className="description">
                        <h4>Remera Blanca Estampada</h4>
                    </div>
                    <div className="buttonSeeMoreCard">
                        <ButtonSeeMore />
                    </div>
                </div>
            </div>

        </div>
    )
}