"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StudentsService_repo;
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../entities/student");
const Exam_1 = require("../entities/Exam");
class StudentsService {
    constructor(repo) {
        _StudentsService_repo.set(this, void 0);
        __classPrivateFieldSet(this, _StudentsService_repo, repo, "f");
    }
    NewStudent(params) {
        const NewStudent = new student_1.Student(params);
        __classPrivateFieldGet(this, _StudentsService_repo, "f").save(NewStudent.data);
    }
    RemoveStudent(params) {
        if (params.Id || params.Id < 0)
            throw new Error("Para remover um aluno é necessario adicionar o id dele nos parametros");
        __classPrivateFieldGet(this, _StudentsService_repo, "f").remove(params.Id);
    }
    ListStudents() {
        return __classPrivateFieldGet(this, _StudentsService_repo, "f").findAll();
    }
    AddExamForStudent(paramsForCreateExam, Id) {
        if (Id || Id < 0)
            throw new Error("Para adicionar um exame você precisa colocar o id do seu aluno nos parametros");
        const exam = new Exam_1.Exam(paramsForCreateExam);
        __classPrivateFieldGet(this, _StudentsService_repo, "f").AddExamById(Id, exam.data);
    }
    FindStudent(Id) {
        if (Id || Id < 0)
            throw new Error("Para achar um aluno é preciso colocar o id dele nos parametros");
        return __classPrivateFieldGet(this, _StudentsService_repo, "f").findOneById(Id);
    }
}
_StudentsService_repo = new WeakMap();
exports.default = StudentsService;
