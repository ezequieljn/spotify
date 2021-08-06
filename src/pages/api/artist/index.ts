import { NextApiRequest, NextApiResponse } from "next";
import { artist as artistData } from "./artist1";



export default (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method == "POST" && req.body.artist) {
        let { artist } = req.body
        artist = artist.toLowerCase()
        const artistAll = artistData.filter(item => item.artist.toLocaleLowerCase().includes(artist))
        let artistMain = artistData.filter(item => item.artist.toLocaleLowerCase() === artist)

        return res.status(200).json({ artistAll, artistMain })
    }
    return res.status(400).json({ message: "Erro na consulta" })
}