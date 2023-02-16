import { Outlet } from "react-router-dom";



const AuthLayout = () => {
  return (
    <>
    <main className="container-auto columns-3 font-semibold text-2xl"     >

         
<Outlet/> {/* este es el componente hijo */}
  

</main>
    </>
  )
}

export default AuthLayout;