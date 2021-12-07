import type { NextApiRequest, NextApiResponse } from 'next'

interface Reservation {
    email: string
    name: string
    count: string
    date: Date
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const body: Reservation = req.body
    console.log(body)
    res.status(200).end()
}
