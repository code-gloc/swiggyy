import { useState } from "react"
import RestInfo from "./RestInfo"


export default function MenuCard({menuItems,foodSelected}){

    const [isOpen, setIsOpen] = useState(true);
   
    
    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items}></MenuCard>)
                }
            </div>
            </div>
        )
    }

   
    if(!isOpen){
        return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>   
        ) 
    }
    if(foodSelected==='Veg')
    {
        return(
            <>
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
            </>
        )
    }
    if(foodSelected==='Non-Veg')
    {
        return(
            <>
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info} foodSelected={foodSelected}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
            
            </>
        )
    }

    return (
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
    )
}