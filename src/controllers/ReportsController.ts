import { Request, Response } from "express";
import ReportsService from "../services/ReportsService";

export default class ReportController {
    service: ReportsService;

    constructor() {
        this.service = new ReportsService();
    }

    public async get(req: Request, res: Response) {
        let id = parseInt(req.params.id);
        let response = this.service.getReport(id);

    }
}