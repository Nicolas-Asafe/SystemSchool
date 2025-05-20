import { ExamType } from "../../../core/entities/Exam";
import { StudentType } from "../../../core/entities/student";
import Repository from "../../../core/ports/Studentrepository";

const db = {
    Students: [] as StudentType[],
    Rooms: [] as any[]
}

let nextId:number = 0

class MemoryRepository implements Repository {
    save(data: any): void {
        if(!data.Id) data.Id = nextId
        const studentIndex = db.Students.findIndex(s => s.Id === data.Id)
        if(studentIndex>=0) throw new Error(`Este id já está sendo usado ${data.Id} ${studentIndex}`)
        db.Students.push(data)
        nextId++
    }
    remove(id: number): void {
        const studentIndex = db.Students.findIndex(s => s.Id === id)

        if (studentIndex <= -1) throw new Error("Estudante não existe")
        db.Students.splice(studentIndex, 1)
    }
    findAll(): any[] {
        return db.Students
    }
    AddExamById(id: number,Exam:ExamType): void {
        const student = db.Students.find(s => s.Id === id) 
        if (!student) throw new Error("Estudante não existe")
        student.Exams?.push(Exam)   
    }
    findOneById(id: number): StudentType {
        const student = db.Students.find(s => s.Id === id) 
        if (!student) throw new Error("Estudante não existe")
        
        return student
    }
}
export default MemoryRepository