export class ApiResponse<T> {
    status: string;
    message: string;
    data: T;
}
