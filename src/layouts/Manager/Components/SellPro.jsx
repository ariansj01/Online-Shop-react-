import React, { useContext } from 'react'
import { ContextApiItem } from '../../../Context/Context'

const SellPro = () => {
    // BasketProduct
  const {setSellPro , SellPro} = useContext(ContextApiItem)
    console.log(SellPro)
  return (
    <div>
        {
            SellPro.map(item => (
                <p>{item.Title}</p>
            ))
        }
    </div>
  )
}

export default SellPro