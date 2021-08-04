import { NextApiRequest, NextApiResponse } from "next";
import { artist as artistData } from "./artist";



export default (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method == "POST" && req.body.artist) {
        let { artist } = req.body
        artist = artist.toLowerCase()
        const data = artistData.filter(item => item.artist.toLocaleLowerCase().includes(artist))

        return res.status(200).json(data)
    }
    return res.status(400).json({ message: "Erro na consulta" })



}