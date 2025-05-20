import { ExamType } from "./Exam";

export interface StudentType {
    Name: string;
    Age: number;
    Class: number;
    Shift: "Morning" | "Night";
    Notes?: string[];
    Exams?:ExamType[]
    Id?: number
}

export class Student {
    data: StudentType;

    constructor(params: StudentType = { Name:'', Age:0, Class:0, Shift:"Morning", Notes:[] }) {
        this.data = params
    }
    printInfo() {
        console.log(`${this.data.Name}, ${this.data.Age} age, class ${this.data.Class}, shift ${this.data.Shift}`);
        console.log(`${this.data.Notes?.join(', ')}`);
    }
}
