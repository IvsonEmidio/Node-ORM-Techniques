import { Application } from "express";
import ReportController from "../controllers/ReportsController";

export default function reportsRoutes(app: Application) {
    const controller = new ReportController();
    app.get(
        'report/:id',
        controller.get.bind(controller)
    )
}