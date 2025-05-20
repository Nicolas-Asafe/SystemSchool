"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentsService_1 = __importDefault(require("./core/services/studentsService"));
const memoryRepository_1 = __importDefault(require("./adapters/repositorys/memory/memoryRepository"));
const Exam_1 = require("./core/entities/Exam");
function Main() {
    try {
        const repo = new memoryRepository_1.default();
        const serv = new studentsService_1.default(repo);
        const exameDeMatematicaDoNicolas = new Exam_1.Exam({
            NoteValue: 10,
            Subject: "Math",
        });
        exameDeMatematicaDoNicolas.CreateDateForTheExam(10, 2, 20);
        serv.NewStudent({
            Age: 12,
            Class: 7,
            Name: "Nicolas",
            Notes: ["Aluno conversou na hora da explicação"],
            Exams: [],
            Shift: "Morning",
        });
        serv.AddExamForStudent(exameDeMatematicaDoNicolas.data, 0);
        console.log(serv.FindStudent(0));
    }
    catch (err) {
        console.error(err);
    }
}
Main();
