import Repository from "../../../core/ports/repository";

const db = {
    Students: [] as any[],
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
}
export default MemoryRepository