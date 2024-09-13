'use client'
import { Provider, useSelector } from "react-redux"
import { mainStore } from "../../../store/store"


export default function Cart() {
    return <Provider store={mainStore}>
        <ShowCart />

    </Provider>
}



function ShowCart() {

    let CartData = useSelector((store) => {
        return store.userSlice.carts
    })


    return <div>
        <table>
            <thead>
                <th></th>
                <th>Name</th>
                <th>Price</th>
            </thead>

            {
                CartData.map((data , i) => {
                    return <tr key={i}>
                        <td><img src={data.image} width={150} height={150} alt="" /></td>
                        <td>{data.title}</td>
                        <td>{data.price}</td>

                    </tr>
                })
            }

        </table>

    </div>

}


