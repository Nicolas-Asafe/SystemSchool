import { StudentType } from "../../../core/entities/student"
import { ExamType } from "../../../core/entities/Exam"
import Repository from "../../../core/ports/Studentrepository"
import { MongoClient, Document, WithId } from "mongodb"

export default class MongoRepository implements Repository {
    #client: MongoClient
    #dbName = "school"
    #collectionName = "students"

    constructor(url: string) {
        this.#client = new MongoClient(url)
    }

    async connect() {
        await this.#client.connect()
    }

    async disconnect() {
        await this.#client.close()
    }

    private get collection() {
        return this.#client.db(this.#dbName).collection(this.#collectionName)
    }

    async save(student: StudentType): Promise<void> {
        await this.collection.insertOne(student)
    }

    async remove(id: number): Promise<void> {
        await this.collection.deleteOne({ Id: id })
    }

    async findAll(): Promise<StudentType[]> {
        const docs = await this.collection.find().toArray()
        return docs.map((doc) => this.castToStudentType(doc))
    }

    async findOneById(id: number): Promise<StudentType | undefined> {
        const student = await this.collection.findOne({ Id: id })
        if (!student) return undefined
        return this.castToStudentType(student)
    }

    async AddExamById(id: number, exam: ExamType): Promise<void> {
        await this.collection.updateOne(
            { Id: id },
            { $push: { Exams: exam as any } } // força no braço mesmo, TS às vezes enche o saco aqui
        )
    }

    private castToStudentType(doc: WithId<Document>): StudentType {
        return {
            Name: doc.Name,
            Age: doc.Age,
            Class: doc.Class,
            Shift: doc.Shift,
            Notes: doc.Notes || [],
            Exams: doc.Exams || [],
        }
    }
}
