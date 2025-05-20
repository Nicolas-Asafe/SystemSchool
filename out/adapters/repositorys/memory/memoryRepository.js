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
    AddExamById(id, Exam) {
        var _a;
        const student = db.Students.find(s => s.Id === id);
        if (!student)
            throw new Error("Estudante não existe");
        (_a = student.Exams) === null || _a === void 0 ? void 0 : _a.push(Exam);
    }
    findOneById(id) {
        const student = db.Students.find(s => s.Id === id);
        if (!student)
            throw new Error("Estudante não existe");
        return student;
    }
}
exports.default = MemoryRepository;
