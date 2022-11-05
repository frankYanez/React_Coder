import { createContext } from "react"


export const products = [
    {id: '1', name: 'Remera' , price: 200, stock: 10, category: 'remeras', photo:'/images/shirt.jpg'},
    {id: '2', name: 'Remera' , price: 50, stock: 10, category: 'remeras', photo:''},
    {id: '3', name: 'Camisa' , price: 100, stock: 10, category: 'camisas', photo:'/images/camisa.jpeg'},
    {id: '4', name: 'Camisa' , price: 300, stock: 10, category: 'camisas', photo:''},
    {id: '5', name: 'Camisa' , price: 500, stock: 10, category: 'camisas', photo:''},
    {id: '6', name: 'Pantalon' , price: 1000, stock: 10, category: 'jeans', photo:'/images/jeans.jpeg'},
    {id: '7', name: 'Jean' , price: 1200, stock: 10, category: 'jeans', photo:''},
    {id: '8', name: 'Jean' , price: 2200, stock: 10, category: 'jeans', photo:''},
    {id: '9', name: 'Zapatillas' , price: 5200, stock: 10, category: 'zapatillas', photo:'/images/sneakers.jpeg'},
    {id: '10', name: 'Zapatillas' , price: 6000, stock: 10, category: 'zapatillas', photo:''},
    {id: '11', name: 'Gorra' , price: 200, stock: 10, category: 'zapatillas', photo:'/images/hat.jpg'}
]

export const gfetch = () => {
    return  new Promise((res,rej) =>{
    setTimeout(()=>{
        res(products)
        
        },3000)
    })
}

export const ContextProducts = createContext([])