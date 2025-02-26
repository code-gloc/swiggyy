import { dineoutRestaurants } from "../utils/DineData";
import Dinecard from "./DineCard";
export default function DineOption(){
    return(
        <div className="w-[80%] mx-auto mt-20">
        <p className="font-bold text-2xl">Discover Best Restaurants On Dineout</p>
        <div className="flex flex-nowrap overflow-x-auto mt-5 gap-3">
        {
          dineoutRestaurants.map((dineData)=>(<Dinecard key={dineData.info.id} dineData={dineData}></Dinecard>))
        }
        </div>
        </div>
    )
}