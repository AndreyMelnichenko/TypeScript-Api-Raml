export interface IComments {
    id: number,
    comments: Array<Comment>
}


export interface Comment {
    message: string,
    postId: number,
}
