import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PostType } from './common';

export type PostDocument = HydratedDocument<Post>;

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