import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";


export default function RestaurantMenu(){
   
    let {id} = useParams();

    const [RestData, setRestData] = useState([]);
    const[Selected,setSelected]=useState(null);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           setRestData(filterData);
        }
   
        fetchData();
       },[])
    return(
      <div>
      <div className="w-[80%] mb-20 mt-20 mx-auto">
        <Link to={`/city/delhi/${id}/search`}>
        <p className="w-full text-center bg-gray-200 py-4 px-8 rounded-4xl">Search for dishes</p>
        </Link>
      </div>
      <div className="w-[80%] gap-5 mb-20 mt-20 mx-auto">
      <button className={`rounded-2xl px-8 py-2 mr-4 text-2xl ${Selected === 'Veg' ? "bg-green-800" : "bg-gray-500"}`} 
     onClick={() => setSelected(Selected === 'Veg' ? null : 'Veg')}>Veg</button>
    <button className={`rounded-2xl px-4 py-2 text-2xl ${Selected === 'Non-Veg' ? "bg-red-800" : "bg-gray-500"}`} 
    onClick={() => setSelected(Selected === 'Non-Veg' ? null : 'Non-Veg')}>Non-Veg</button>
      </div>
        <div className="w-[80%] mx-auto mt-20">
          {
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={Selected}></MenuCard>)
          }
        </div>
        </div>
    )

}