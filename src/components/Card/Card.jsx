import React, { useState } from "react";
import cat from "../../images/Photo.png"
import classes from "./Card.module.css"

const Card = ({ title, name, taste, portions, gift, kilograms, description, amount }) => {
    const [isActive, setIsActive] = useState(false)

    const colorBorderWrapper = isActive ? classes.wrapperCardActive : classes.wrapperCard
    const colorContainerCard = isActive ? classes.containerCardActive : classes.containerCard
    const disable = amount === 0 ? classes.disable : ""
    const colorDescription = amount === 0 ? classes.colorDescription : ""
    const backgroundColor = isActive ? classes.activeBackground : ""
    const btnIsDisable = amount === 0 ? classes.btnDisable : ""

    const classesContainerCard = [colorContainerCard, disable]
    const classesBorderWrapper = [colorBorderWrapper, disable]
    const classesbackground = [classes.containerKg, backgroundColor]
    const classescolorDescription = [classes.description, colorDescription]
    const classesBtn = [classes.btn, btnIsDisable]

    const handleClick = () => {
        if (amount === 0) {
            return disable
        } else {
            setIsActive(!isActive)
        }
    }

    const addProductBtn = () => {
        setIsActive(true)
    }

    return <div>
    <div className={classesBorderWrapper.join(" ")}>
        <div className={classesContainerCard.join(" ")} onClick={handleClick}>
            <div className={classes.descriptionCard}>
                <div className={classes.title}>{title}</div>
                <div className={classes.name}>{name}</div>
                <div className={classes.taste}>{taste}</div>
                <div className={classes.portions}>{portions} порций</div>
                <div className={classes.gift}>{gift}</div>
            </div>
            <div className={classesbackground.join(" ")}>
                <div className={classes.textContainerKg}>
                    <div className={classes.textNember}>{kilograms}</div>
                    <div>кг</div>
                </div>
            </div>
            <div className={classes.containerCat}><img src={cat} alt="cat" /></div>
        </div>

    </div>
    <div className={classescolorDescription.join(" ")}>
            {description}
            <button className={classesBtn.join(" ")} onClick={addProductBtn}>купи.</button>
        </div>
    </div>
}

export default Card