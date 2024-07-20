import cookieParser from "cookie-parser";
import express from "express";
import router from "./routes";
import logger from "./logger";
import cors from "cors";

const middlewares = [
	logger,
	cookieParser(),
	express.json(), // 옵션 설정
	express.urlencoded(), // 옵션 설정
	cors({ origin: true, credentials: true }),
	router
];

export default middlewares;
