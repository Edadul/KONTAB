import { getAuth, signOut } from "firebase/auth"
import { appFirebase } from "../firebase/credenciales"
import { useState, useEffect } from "react"
import { LoadingPage } from "../components/Loading"

const auth = getAuth(appFirebase)

export function Home ({correoUsuario}, {informacion}) {

    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
        setLoading(false);

    }, 2000)
  },[])

  if(loading){
    return(<LoadingPage />)
  }
  else{
    return(
            <div className="hidden lg:flex flex-col min-h-screen w-full bg-[#16191c] justify-center items-center text-blue-700 text-[50px]">
            <h2>Bienvenido {correoUsuario}</h2>
            <h2></h2>
            <div className="">
                <button onClick={()=>signOut(auth)} className="h-[80px] w-[700px] bg-gray-50 text-black">Cerrar Sesión</button>
            </div>
        </div>
        )
    }
}