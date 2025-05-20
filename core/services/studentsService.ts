import Repository from "../ports/Studentrepository";
import { Student, StudentType } from "../entities/student";
import { Exam, ExamType } from "../entities/Exam";

export default class StudentsService {
    #repo: Repository
    constructor(repo: Repository) {
        this.#repo = repo
    }
    NewStudent(params: StudentType) {
        const NewStudent = new Student(params)
        this.#repo.save(NewStudent.data)
    }
    RemoveStudent(params: { Id: number }) {
        if (params.Id || params.Id < 0) throw new Error("Para remover um aluno é necessario adicionar o id dele nos parametros")
        this.#repo.remove(params.Id)
    }
    ListStudents() {
        return this.#repo.findAll()
    }
    AddExamForStudent(paramsForCreateExam: ExamType, Id: number) {
        if (Id || Id < 0) throw new Error("Para adicionar um exame você precisa colocar o id do seu aluno nos parametros")
        const exam = new Exam(paramsForCreateExam)
        this.#repo.AddExamById(Id, exam.data)
    }
    FindStudent(Id: number) {
        if (Id || Id < 0) throw new Error("Para achar um aluno é preciso colocar o id dele nos parametros")
        return this.#repo.findOneById(Id)
    }
}