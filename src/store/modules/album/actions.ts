import { action } from "typesafe-actions"
import { responseProps } from "./types"

export function albumSearchRequestApi() {
    return action('@album/REQUEST_API')
}

export function albumSearchSave({ data }: { data: responseProps[] }) {
    return action('@album/REQUEST_SUCCESS', { data })
}

