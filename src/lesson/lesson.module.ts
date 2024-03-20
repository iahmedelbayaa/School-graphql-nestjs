import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [LessonResolver],
})
export class LessonModule {}
