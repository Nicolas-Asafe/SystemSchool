import StudentsService from "./core/services/studentsService";
import MemoryRepository from "./adapters/repositorys/memory/memoryRepository";
import { Exam } from "./core/entities/Exam";

function Main() {
    try {
    

        const repo = new MemoryRepository()
        const serv = new StudentsService(repo)
        const exameDeMatematicaDoNicolas = new Exam({
            NoteValue: 10,
            Subject:"Math",
        })
        exameDeMatematicaDoNicolas.CreateDateForTheExam(10,2,20)

        serv.NewStudent({
            Age: 12,
            Class: 7,
            Name: "Nicolas",
            Notes: ["Aluno conversou na hora da explicação"],
            Exams:[],
            Shift: "Morning",
        })
        
        serv.AddExamForStudent(exameDeMatematicaDoNicolas.data,0)
        console.log(serv.FindStudent(0))
    } catch (err:any) {
        console.error(err)
    }
}

Main()