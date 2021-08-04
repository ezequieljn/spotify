import { NextApiRequest, NextApiResponse } from 'next'
import { albums } from './albums'


const show = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST" && req.body.artist) {
        let { artist } = req.body
        artist = artist.toLowerCase()
        const album = albums.filter(item => item.artist.toLocaleLowerCase() === artist)

        return res.status(200).json(album)
    }
    return res.status(400).json({ message: "Erro na consulta" })

}

export default show