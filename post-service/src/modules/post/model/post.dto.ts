import { PostType } from "./common";

export class PostDto {
    title: string;
    description: string;
    postType: PostType;
    like: number;
    _comments: Array<Object>;
    _user_id: string;
}