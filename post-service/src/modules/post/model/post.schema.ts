import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;


export enum PostType {
    "VIDEO",
    "IMAGE",
}

@Schema()
export class Post {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    postType: PostType;
    
    @Prop()
    like: number;

    @Prop()
    _comments: Array<Object>;

    @Prop({ required: true })
    _user_id: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);