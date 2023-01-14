import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;


export enum PostType {
    "VIDEO",
    "IMAGE",
}

@Schema()
export class Post {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    postType: PostType;
    
    @Prop()
    like: number;

    @Prop()
    _comments: Array<Object>;

    @Prop()
    _user_id: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);