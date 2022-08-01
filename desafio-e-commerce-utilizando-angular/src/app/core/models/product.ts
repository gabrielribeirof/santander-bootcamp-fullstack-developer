export interface Product {
  id: string
  name: string
  price: string
  type: 'men' | 'women' | 'kids'
  availableQuantity: number
  imageURL: string
}
