import type { NextApiRequest, NextApiResponse } from 'next'

interface Newsletter {
    subscribe: boolean
    email: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const body: Newsletter = req.body
    console.log(body)
    res.status(201).end()
}
