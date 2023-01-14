import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
    @Prop({ required: true })
    text: string;

    @Prop()
    like: number;

    @Prop({ required: true })
    _post_id: string;

    @Prop({ required: true })
    _user_id: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);