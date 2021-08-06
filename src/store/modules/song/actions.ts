import { action } from "typesafe-actions"
import { songProps } from "./types"

export function songSearchApi({ artist }: { artist: string }) {
    return action('@song/REQUEST_API', { artist })
}

// Save the data
export function songSearchSave(data: songProps[]) {
    console.log("action song", data)
    return action('@song/SAVE', { data })
}

