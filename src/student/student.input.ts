import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class CreateStudentInput {
    @Field()
    @IsString()
    firstName: string;

    @Field()
    @IsString()
    lastName: string;
}