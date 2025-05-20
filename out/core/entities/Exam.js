"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
class Exam {
    constructor(params) {
        this.data = params;
    }
    CreateDateForTheExam(Day, Month, Year) {
        this.data.MadeIn = `${Day}/${Month < 9 ? `0${Month}` : `${Month}`}/${Year}`;
        return () => `${Day}/${Month < 9 ? `0${Month}` : `${Month}`}/${Year}`;
    }
}
exports.Exam = Exam;
