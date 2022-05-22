import React, {useState} from 'react';
import styles from './Cards.module.css';
import SingleCard from "../../Components/singleCard";
import SpinnerComponent from "../../Components/spinner";
import Modal from "../../Components/modal";
import GoodsTypeName from "../../Components/smallComponents/goodsTypeName";
import GoodsName from "../../Components/smallComponents/goodsName";
import PriceBlock from "../../Components/smallComponents/priceBlock";
import Form from "../../Components/form";
import BuyCheapestButton from "../../Components/smallComponents/buyCheapeastButton";

export function Cards({food, loading, cheapestFood}) {
    const [putInBasket, setPutInBasket] = useState(false);
    const [selectedFoodItem, setSelectedFoodItem] = useState(null)

    const category = food[selectedFoodItem] === undefined ? 'Loading...' : food[selectedFoodItem].category
    const name = food[selectedFoodItem] === undefined ? 'Loading...' : food[selectedFoodItem].name
    const price = food[selectedFoodItem] === undefined ? 'Loading...' : food[selectedFoodItem].price
    const actionOnClick = ()=> {
        setPutInBasket(true)
        setSelectedFoodItem(cheapestFood)
    }

    return (
        <div className={styles.cardsPage}>
            <div className={styles.cardsBlock}>
                {loading && <SpinnerComponent/>}
                {food.map((food, index) =>
                    <SingleCard key={index + food.name}
                                foodId={index}
                                goodsTypeName={food.category}
                                goodsName={food.name}
                                price={food.price}
                                setPutInBasket={setPutInBasket}
                                setSelectedFoodItem={setSelectedFoodItem}
                                selectedFoodItem={selectedFoodItem}
                    />
                )}
            </div>
            {!putInBasket &&
                <div className={styles.bottom}>
                    <BuyCheapestButton actionOnClick={actionOnClick}>
                        <span className={styles.buyCheapestName} >Buy Cheapest</span>
                    </BuyCheapestButton>
                </div>
            }

                <Modal active={putInBasket} setActive={setPutInBasket}>
                    <div className={styles.goodsTitleBlock}>
                        <GoodsTypeName goodsTypeName={category}/>
                        <GoodsName goodsName={name}/>
                        <div className={styles.centeredPrice}>
                            <PriceBlock price={price}/>
                        </div>
                        <Form
                            setActive={setPutInBasket}
                            category={category}
                            foodName={name}
                            price={price}
                        />
                    </div>
                </Modal>
        </div>
    );
}
