import React from "react"
import data from '../data.json'



const GroceryDetails = () => {
    console.log(data) 
    return (
        <>
            <h1>Groceries</h1>
            <div className="container">

                {/* map through the data and display the cards */}
                {data.map((item)=>(
                    <>
                    <div>
                        <p>{item.discount}</p>
                    <img src={item.imgURL} alt={item.title} />
                    <h4>{item.title}</h4>
                    <div>
                        <h4>{item.sellingPrice}</h4>
                        <p>M.R.P. {item.mrp}</p>
                    </div>
                    </div>
                    </>
                ))}


            </div>
        </>
    )
}
export default GroceryDetails