import React, {useState} from "react";

function Categories({items}) {
    const [activeItem, setActiveItem] = React.useState(null)


     const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return(
        <div className="categories">
            <ul>
                <li  className={activeItem ===  null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                { items && items.map((category, index) =>
                    <li
                        className={activeItem ===  index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${category}_${index}`}> {category}</li>)
                }
            </ul>
        </div>
    )
}
export default Categories