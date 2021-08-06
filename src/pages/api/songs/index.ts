import { NextApiRequest, NextApiResponse } from 'next'
import { albums } from './album1'
import { soundtracks } from './song1'


const show = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const artist = req.body.artist
        if (artist) {
            const artistSong = albums.filter(item => item.artist.toLowerCase() == artist.toLowerCase())
            if (!artistSong[0]) {
                return res.status(200).json([])
            }

            let musics = soundtracks.filter(item => {
                const [retorno] = artistSong.filter(sound => sound.id === item.album_id)
                return retorno
            })
            if (musics.length > 5) {
                musics = musics.slice(0, 5)
                return res.status(200).json(musics)
            } else {

                return res.status(200).json(musics)
            }
        }
        return res.status(400).json({ message: "Erro na consulta" })
    }
    return res.status(400).json({ message: "Erro na consulta" })
}

export default show