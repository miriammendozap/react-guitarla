export type Libreria = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Libreria & {
    quantity: number
}

// export type CartItem = Pick<Libreria, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Libreria, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

