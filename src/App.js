//import Laptop from "./laptop";
import ClassComponentEg from "./component/classComponentEg";
//import ToggleComponent from "./component/ToggleComponent";
import TodoComponent from "./component/todocomponent";

/*const product={
    pname:"XYZ",
    plink:"https://www.amazon.in/deal/cca5e12b?smid=A14CZOWI0VEHLG&pf_rd_r=D74BC14B09MJGFHA9PGF&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pd_rd_r=f1ca9aa0-48db-4db1-b5ba-8b28242713fc&pd_rd_w=ecFg7&pd_rd_wg=lr4U7&ref_=pd_gw_unk",
    imglink:"https://m.media-amazon.com/images/I/61saGX0RILL._SX355_.jpg",
    price:10000
}*/


function App(){
    return(
        <div>
        <ClassComponentEg prop1 = "21.09.2000"></ClassComponentEg>
       {// <ToggleComponent></ToggleComponent>
}           <TodoComponent></TodoComponent> 
            <pendingComponent></pendingComponent>
        </div>
    )
}
export default App;
