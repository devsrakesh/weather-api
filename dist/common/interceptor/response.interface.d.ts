export interface Response<T> {
    status?: number;
    message?: string;
    data: T;
    count?: number;
}
