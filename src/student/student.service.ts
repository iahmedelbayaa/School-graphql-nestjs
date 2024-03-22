import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
    constructor(
        private studentRepository: Repository<StudentEntity>
    ) { }

    async getStudents(): Promise<StudentEntity[]> {
        return this.studentRepository.find();
    }

    async getStudentById(id: string): Promise<StudentEntity> {
        return this.studentRepository.findOne({ where: { id } });
    }

    async createStudent(studentInputs : CreateStudentInput): Promise<StudentEntity> {
        const { firstName, lastName } = studentInputs;
        const student = this.studentRepository.create({ firstName, lastName });
        return this.studentRepository.save(student);
    }

    
}
