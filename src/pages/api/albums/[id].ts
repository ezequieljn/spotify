import { NextApiRequest, NextApiResponse } from 'next'
import { soundtracks } from './soundtracks'

const show = (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const item = soundtracks.filter((soundtrack, _) => soundtrack.album_id === id)
    return res.status(200).json(item)
}

export default show