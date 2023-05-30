import { Genre } from "./Genre";

export interface Movie {

    id?: number,
    srcFolder: string,
    videoSource: string,
    imageSource: string,
    title: string,
    sinopsys: string,
    formatFile: string,
    mimeType: string,
    fileSize: number,
    playtimeString: string,
    dateRelease: string,
    listGenre?: Genre[]
    numPC: number,
    numDisc: number

}
