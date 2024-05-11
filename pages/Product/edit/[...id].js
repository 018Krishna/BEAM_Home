import Product from "@/pages/component/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditProduct(){
    const router = useRouter()
    const {id} = router.query;
    const [productinfo , setproductinfo] = useState(null);
    useEffect(() => {
        if (!id) {
          return;
        }
        axios.get('/api/products?id=' + id).then(response => {setproductinfo(response.data)
        })
      }, [id])
        
    return<>
    <div className="sm:flex sm:items-center sm:justify-between py-3">
      <div className="text-center sm:text-left">
    

        <p className="mt-1.5 text-md text-gray-500 max-w-lg">Editing {productinfo?.title}</p>
      </div>

     

    </div>
    
    <hr class=" h-px border-0 bg-gray-300" />
    <div className="my-10">
     productinfo && {
      <Product   {...productinfo}/>
     }
    </div>
    
    
    </>
}