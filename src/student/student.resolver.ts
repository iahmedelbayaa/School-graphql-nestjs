import { Args, Mutation, Resolver,Query } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./student.input";
@Resolver()
export class StudentResolver {
    constructor(
        private studentService: StudentService
    ) { }

    @Query(returns => [StudentType])
    students() {
        return this.studentService.getStudents();
    }

    @Query(returns => StudentType)
    student(@Args('id') id: string) {
        return this.studentService.getStudentById(id);
    }

    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentInputs') createStudentInputs: CreateStudentInput
    ) {
        return this.studentService.createStudent(createStudentInputs);
    }

}