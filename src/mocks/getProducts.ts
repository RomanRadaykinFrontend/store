import { Product } from '@/types/common'

export const getProducts = ( params: any ) => new Promise( resolve => {
  setTimeout( () => {
    resolve({
      data: [
        { name: 'nike_blazer_suede', gender: 'male', price: 12999 },
        { name: 'nike_airmax_270', gender: 'male', price: 12999 },
        { name: 'nike_blazer_mid_suede', gender: 'male', price: 8499 },
        { name: 'puma_x_boku_future_rider', gender: 'unisex', price: 8999 },
        { name: 'under_armour_curry_8', gender: 'male', price: 15199 },
        { name: 'nike_kyrie_7', gender: 'male', price: 11299 },
        { name: 'jordan_air_jordan_11', gender: 'male', price: 10799 },
        { name: 'nike_lebron', gender: 'male', price: 16499 },
        { name: 'nike_lebron_low', gender: 'male', price: 13999 },
        { name: 'nike_kyrie_flytrap', gender: 'male', price: 11299 },
      ] as Array<Product>,
    })
  }, 1500 )
})
