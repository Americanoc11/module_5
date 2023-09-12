import React, { useState } from "react"


export default function CustomerList() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
        { id: 4, name: 'Product C' },
        { id: 5, name: 'Product C' },
        { id: 6, name: 'Product C' },
        { id: 7, name: 'Product C' },
        { id: 8, name: 'Product C' },
        { id: 9, name: 'Product C' },
    ]);

    const handleRemoveProduct = (productId) => {
        console.log(productId);
        setProducts(products.filter((product) => product.id !== productId));
    };
    return (

        <React.Fragment>
            <div>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {products && products.map((item, index) => {
                                return (
                                        < tr className="" key={index}>
                                            <td scope="row">{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <button onClick={() => handleRemoveProduct(item.id)}>Remove</button>
                                            </td>
                                        </tr>
                                )

                            })
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </React.Fragment >
    )
}