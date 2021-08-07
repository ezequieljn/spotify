import { NextApiRequest, NextApiResponse } from "next";
import editJsonFile from "edit-json-file"


export default async (req: NextApiRequest, res: NextApiResponse) => {
    let file = editJsonFile(`${__dirname}/log.json`, {
        autosave: true
    })

    file.append({ ip: "Computer Science", search: "KULeuven" });

    if (req.method == "POST") {
        try {
        } catch (err) {
        }

        return res.status(200).json({ message: "ok." })
    }
    return res.status(400).json({ message: "Erro na consulta" })
}