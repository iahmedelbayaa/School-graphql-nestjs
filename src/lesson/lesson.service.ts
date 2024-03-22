import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(LessonEntity)
        private lessonRepository: Repository<LessonEntity>,
    ) { }

    async createLesson(createLessonInputs : CreateLessonInput): Promise<LessonEntity> {
        const { name, startDate, endDate } = createLessonInputs;
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate
        
        });
        return this.lessonRepository.save(lesson);
    }

    async getLesson(id: string): Promise<LessonEntity> {
        return this.lessonRepository.findOne({ where: { id: id } });
    }

    async getLessons(): Promise<LessonEntity[]> {
        return this.lessonRepository.find();
    }


}
