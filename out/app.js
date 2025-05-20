"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentsService_1 = __importDefault(require("./core/services/studentsService"));
const memoryRepository_1 = __importDefault(require("./adapters/repositorys/memory/memoryRepository"));
function Main() {
    try {
        const repo = new memoryRepository_1.default();
        const serv = new studentsService_1.default(repo);
        serv.NewStudent({
            Age: 12,
            Class: 7,
            Name: "Nicolas",
            Notes: ["Aluno conversou na hora da explicação"],
            Shift: "Morning",
        });
        serv.NewStudent({
            Age: 13,
            Class: 8,
            Name: "Maria",
            Notes: [],
            Shift: "Morning",
        });
        serv.RemoveStudent({ Id: 0 });
        console.log(serv.ListStudents());
    }
    catch (err) {
        console.error(err.message);
    }
}
Main();
