import { DAO } from "./DAO";
import { Todo } from "./Todo";



export class TodoDAO implements DAO {


    constructor(private url: string) { }
    
    findAll(): Promise<Todo[] | null> {
        return fetch(this.url).then( response => response.json())
    }



}