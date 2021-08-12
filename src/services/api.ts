import axios from 'axios'
import { getProducts } from '@/mocks/getProducts'

/**
 * @var {Axios}
 */
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})

/**
 * Load payments data.
 *
 * @param {Object} params
 * @returns {Promise}
 */
const getProductsData = getProducts

export default {
  instance,
  getProductsData,
}
