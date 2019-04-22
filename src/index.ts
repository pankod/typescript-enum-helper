import { IGods } from "./Interfaces/index";

export default class GodsApi {
    public create(name: string): IGods {
        return { name };
    }
}