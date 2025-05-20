import StudentsService from "./core/services/studentsService";
import MemoryRepository from "./adapters/repositorys/memory/memoryRepository";

function Main() {
    try {
        const repo = new MemoryRepository()
        const serv = new StudentsService(repo)

        serv.NewStudent({
            Age: 12,
            Class: 7,
            Name: "Nicolas",
            Notes: ["Aluno conversou na hora da explicação"],
            Shift: "Morning",

        })
        
        serv.NewStudent({ 
            Age: 13,
            Class: 8,
            Name: "Maria",
            Notes: [],
            Shift: "Morning",
        })
        serv.RemoveStudent({Id:0})
        console.log(serv.ListStudents())


    } catch (err:any) {
        console.error(err.message)
    }
}

Main()