import { Movie } from "./Movie";

export interface PaginationResult{

    totalResult: number
    totalPage: number,
    page:number,
    limit:number,
    totalRows: number,
    rows: any | Movie,
    message?: string

}