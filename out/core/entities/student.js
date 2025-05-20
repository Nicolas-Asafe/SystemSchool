"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(params = { Name: '', Age: 0, Class: 0, Shift: "Morning", Notes: [] }) {
        this.data = params;
    }
    printInfo() {
        var _a;
        console.log(`${this.data.Name}, ${this.data.Age} age, class ${this.data.Class}, shift ${this.data.Shift}`);
        console.log(`${(_a = this.data.Notes) === null || _a === void 0 ? void 0 : _a.join(', ')}`);
    }
}
exports.Student = Student;
