import { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({id,name,price,description, image}) => {
  
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
        return (
    <div className='fooditem'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt={name} />
            {!cartItems[id] 
            ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt= "" />
            : <div className='food-item-counter' >
                <img onClick={()=> removeFromCart(id)}src={assets.remove_icon_red} alt=" "/>
                <p> {cartItems[id]}</p>
                <img onClick={()=> addToCart(id)}src= {assets.add_icon_green} alt=""/>
</div>
            }
            </div>
        
        <div className="fooditem-info">
            <div className="fooditem-rating">
                <p> {name}</p>
                <img src={assets.rating_starts} />

            </div>
            <p className="food-item-description">
                {description}
            </p>
            <p className="price">
                ${price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem