import { BaseController } from "./baseController";
import { APIRequest } from "../APIrequest";
import { ISearchCriterias } from "../models/search";
import { IComments } from "../models/comment";

export class SearchController extends BaseController {
    async search(searchCriterias: ISearchCriterias): Promise<IComments> {
        console.log("I ll do request to comments");
        return (await new APIRequest(`/search`)
            .queryParameters(searchCriterias)
            .send()).body as IComments
    }
}