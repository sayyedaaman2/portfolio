'use client'
import { useTheme } from "next-themes"
import { useEffect,useState } from "react"
export default function ThemeButton(){
    const {theme,setTheme} = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted){
        return null;
    }

    return(
        <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800" aria-label="Toggle theme">{theme === "dark" ? "☀️" : "🌙" }</button>
    )
}