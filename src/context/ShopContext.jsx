import { createContext, useContext, useState } from "react";

const ShopContext= createContext()
export const ShopProvider =({children})=>{
    const [filters,setFilters]=useState({
        category:"",minPrice:0,maxPrice:10000,size:"",sort:"newest"
    })
    const updateFilter=(key,value)=>{
        setFilters(prev=>({...prev,[key]:value}))
    }
    const resetFilters=()=>{
        setFilters({
      category: "",
      minPrice: 0,
      maxPrice: 10000,
      size: "",
      sort: "newest"
    })
    }
    return(
        <ShopContext.Provider value={{filters,updateFilter,resetFilters}}>
            {children}
        </ShopContext.Provider>
    )
}
export const useShop =()=>useContext(ShopContext)