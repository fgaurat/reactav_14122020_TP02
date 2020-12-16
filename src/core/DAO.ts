import { Todo } from "./Todo";

export interface DAO{

    findAll() : Promise<Todo[] | null>
}