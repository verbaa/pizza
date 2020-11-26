import React from "react";

import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock";

function Home({items}) {

    return(


        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые'
                    ]}></Categories>


                <SortPopup items={[
                    'популярности',
                    'цене',
                    'алфавиту'
                ]}>

                </SortPopup>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(obj => <PizzaBlock key={obj.id} name={obj.name} imgUrl={obj.imageUrl}/> )}
            </div>
        </div>
    )
}

export default Home