import React from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../features/apiCalls";

const BASE_API_URL = "http://localhost:8081";

const Product = ({
  productId,
  productThumbnail,
  productTitle,
  productPrice,
  productDescription,
  availableQuantity,
}) => {
  return (
      <div className="border-2 rounded overflow-hidden flex flex-col">
        <table>
          <tr > 
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
          </tr>
          <tr>
            <td>
              {productTitle}
            </td>
            <td>
              {productDescription}
            </td>
            <td nowrap>
                $ {productPrice}
            </td>
            <td>
                {availableQuantity > 0
                  ? `In Stock: ${availableQuantity}`
                  : "Out of Stock"}              
            </td>
            <td>              
                <Link to={`/updateProduct/${productId}`}>
                  <button style={{textAlign:'center',fontSize:10,backgroundColor: 'powderblue'}} >Update</button>
                </Link>
                
                <button
                  onClick={async () => {
                    await deleteProduct(productId, productThumbnail)
                    console.log("Deleted")
                  }}
                  style={{textAlign:'center',fontSize:10,backgroundColor: 'powderblue', hover: 'green'}} >
                  Delete
                </button>            
            </td>
          </tr>
        </table>  
      </div>
  );
};

export default Product;
