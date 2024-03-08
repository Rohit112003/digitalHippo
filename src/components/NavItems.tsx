'use client'
import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"
import NavItem from "./NavItem"

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null|number>(null)
    const isAnyOpen = activeIndex!==null


  return (
    <div className="flex gap-4 h-full">
        {PRODUCT_CATEGORIES.map((category, i) => {
            const handleOpen =()=>{
                if(activeIndex===i){
                    setActiveIndex(null);
                }else{
                    setActiveIndex(i)
                }
            }
            const isopen =i===activeIndex;
    return (
        <NavItem category={category} handleOpen={handleOpen} isopen={isopen}
        isAnyOpen={isAnyOpen} key={category.value}
        />
    );
})}

    </div>
  )
}

export default NavItems