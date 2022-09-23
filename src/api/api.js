import { postRequest } from "."
import { HeaderSearch, HomeUpload } from "./url";

export function headerSearch(data) {
    return postRequest(HeaderSearch, data);
}

export function homeUpload(data) {
    return postRequest(HomeUpload, data);
}