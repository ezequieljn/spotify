import { action } from "typesafe-actions"

export function loadingApiTrue() {
    return action('@loading/TRUE')
}
// Save the data
export function loadingApiFalse() {
    return action('@loading/FALSE')
}

