import { createForminitProxy } from 'forminit/next'

const proxy = createForminitProxy({
  apiKey: process.env.FORMINIT_API_KEY || '',
})

export const POST = proxy.POST
