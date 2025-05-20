export interface ExamType{
    NoteValue:number,Subject:"Math"|"Portuguese",MadeIn?:string
}

export class Exam{
    data:ExamType

    constructor(params:ExamType){
        this.data = params
    }    
    CreateDateForTheExam(Day:number,Month:number,Year:number){
            this.data.MadeIn = `${Day}/${Month<9?`0${Month}`:`${Month}`}/${Year}`
            return ()=>`${Day}/${Month<9?`0${Month}`:`${Month}`}/${Year}`
    }
        
}