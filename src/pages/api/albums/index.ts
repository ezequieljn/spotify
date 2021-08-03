import { NextApiResponse } from 'next'
import { albums } from './albums'


const show = (_, res: NextApiResponse) => {
    return res.status(200).json(albums)
}

export default show