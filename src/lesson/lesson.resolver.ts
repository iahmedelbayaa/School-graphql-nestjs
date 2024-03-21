import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService
    ) { }

    @Query(returns => LessonType)
    lesson() {
        return {
            id: 'a6f6b1a0-2f5f-4b7b-8e0a-0b8e5d5e5e2d',
            name: 'Physics Class',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString()
        }
    }

    @Mutation(returns => LessonType)
    createLesson(@Args('name') name: string, @Args('startDate') startDate: string, @Args('endDate') endDate: string) {
        return this.lessonService.createLesson(name, startDate, endDate);
    }

}