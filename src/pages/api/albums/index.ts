import { NextApiRequest, NextApiResponse } from 'next'
import { albums } from './album1'


const show = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST" && req.body.artist) {
        let { artist, page } = req.body
        if (page < 1) {
            page = 1
        }


        if (artist && page) {
            artist = artist.toLowerCase()
            let album = albums.filter(item => item.artist.toLocaleLowerCase().includes(artist))
            album = album.slice(0, page * 10)
            return res.status(200).json(album)
        }
        else if (artist) {

            artist = artist.toLowerCase()
            const album = albums.filter(item => item.artist.toLocaleLowerCase().includes(artist))

            return res.status(200).json(album)
        }
    }
    return res.status(400).json({ message: "Erro na consulta" })

}

export default show