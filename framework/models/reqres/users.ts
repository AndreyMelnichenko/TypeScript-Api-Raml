export interface Users {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Array<User>
}

export interface User {
    id: number,
    email: String,
    first_name: String,
    last_name: String,
    avatar: String
}