import Repository from "../ports/repository";
import {Student,StudentType} from "../entities/student";

export default class StudentsService{
    #repo: Repository
    constructor(repo:Repository){
        this.#repo = repo
    }
    NewStudent(params:StudentType){
        const NewStudent = new Student(params)
        this.#repo.save(NewStudent.data)
    }
    RemoveStudent(params:{Id:number}){
        if(params.Id || params.Id < -1) throw new Error("Para remover um aluno é necessario adicionar o id dele nos parametros")
        this.#repo.remove(params.Id)
    }
    ListStudents(){
        return this.#repo.findAll()
    }
}