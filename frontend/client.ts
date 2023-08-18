// client.ts
import {createClient} from '@sanity/client'

export default createClient({
  projectId: 'c0cl6i5r', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-06-19', // use a UTC date string
})