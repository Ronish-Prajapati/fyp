import CustomNavbar from "./CustomNavbar";

const Base=({title="Blog",children})=>{
    return(
        <div className="container-fluid m-0 p-0">
            <CustomNavbar/>
           
            {children}
            
        </div>
    )
}
export default Base;