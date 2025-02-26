import { GrocerGridCard } from "../utils/GroceryData"
import Grocerycard from "./GroceryCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="font-bold text-2xl ml-2">Shop Groceries on Instamart</h1>
            <div className="container mx-auto  flex flex-nowrap overflow-x-auto mt-10 gap-4">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
    )
}