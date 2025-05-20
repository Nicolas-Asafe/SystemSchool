"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = {
    Students: [],
    Rooms: []
};
let nextId = 0;
class MemoryRepository {
    save(data) {
        if (!data.Id)
            data.Id = nextId;
        const studentIndex = db.Students.findIndex(s => s.Id === data.Id);
        if (studentIndex >= 0)
            throw new Error(`Este id já está sendo usado ${data.Id} ${studentIndex}`);
        db.Students.push(data);
        nextId++;
    }
    remove(id) {
        const studentIndex = db.Students.findIndex(s => s.Id === id);
        if (studentIndex <= -1)
            throw new Error("Estudante não existe");
        db.Students.splice(studentIndex, 1);
    }
    findAll() {
        return db.Students;
    }
}
exports.default = MemoryRepository;
