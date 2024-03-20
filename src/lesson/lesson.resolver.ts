import { Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {

    @Query(returns => LessonType)
    lesson(){
        return {
            id: 'a6f6b1a0-2f5f-4b7b-8e0a-0b8e5d5e5e2d',
            name: 'Physics Class',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString()
        }
    }

}