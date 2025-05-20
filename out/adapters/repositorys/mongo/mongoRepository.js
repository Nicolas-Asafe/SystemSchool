"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var _MongoRepository_client, _MongoRepository_dbName, _MongoRepository_collectionName;
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MongoRepository {
    constructor(url) {
        _MongoRepository_client.set(this, void 0);
        _MongoRepository_dbName.set(this, "school");
        _MongoRepository_collectionName.set(this, "students");
        __classPrivateFieldSet(this, _MongoRepository_client, new mongodb_1.MongoClient(url), "f");
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _MongoRepository_client, "f").connect();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _MongoRepository_client, "f").close();
        });
    }
    get collection() {
        return __classPrivateFieldGet(this, _MongoRepository_client, "f").db(__classPrivateFieldGet(this, _MongoRepository_dbName, "f")).collection(__classPrivateFieldGet(this, _MongoRepository_collectionName, "f"));
    }
    save(student) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.insertOne(student);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.deleteOne({ Id: id });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const docs = yield this.collection.find().toArray();
            return docs.map((doc) => this.castToStudentType(doc));
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield this.collection.findOne({ Id: id });
            if (!student)
                return undefined;
            return this.castToStudentType(student);
        });
    }
    AddExamById(id, exam) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.updateOne({ Id: id }, { $push: { Exams: exam } } // força no braço mesmo, TS às vezes enche o saco aqui
            );
        });
    }
    castToStudentType(doc) {
        return {
            Name: doc.Name,
            Age: doc.Age,
            Class: doc.Class,
            Shift: doc.Shift,
            Notes: doc.Notes || [],
            Exams: doc.Exams || [],
        };
    }
}
_MongoRepository_client = new WeakMap(), _MongoRepository_dbName = new WeakMap(), _MongoRepository_collectionName = new WeakMap();
exports.default = MongoRepository;
