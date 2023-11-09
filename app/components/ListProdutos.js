'use client'

import CardProduto from "./CardProduto"
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListProdutos() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4200/produtos")
            .then(function(response) {
                setListaProdutos(response.data);
            })
    }, [listaProdutos])

    return (
        listaProdutos.map((prod) => 
            <CardProduto key={prod.id} produto={prod}></CardProduto>
        )
    )
}