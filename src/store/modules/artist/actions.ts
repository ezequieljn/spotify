import { action } from "typesafe-actions"
import { artistAllProps, artistMainProps } from "./types"

export function artistSearch({ artist }: { artist: string }) {
    return action('@artist/REQUEST_API', { artist })
}

// Save the data
export function artistSearchSave(data: { artistAll: artistAllProps[], artistMain: artistMainProps[] }) {
    return action('@artist/SAVE', { data })
}

