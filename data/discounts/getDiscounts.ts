// api/getDiscounts.ts
import {useQuery} from '@tanstack/vue-query'
import $axios from '~/http'

export const getDiscounts = () => {
  return useQuery({
    queryKey: ['banners'],
    queryFn: async () => {
      const {data} = await $axios.get('/discounts')
      return data
    },
  })
}