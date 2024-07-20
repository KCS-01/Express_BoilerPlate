import cookieParser from "cookie-parser";
import express from "express";
import router from "./routes";
import cors from "cors";

const middlewares = [
	router,
	cookieParser(),
	cors({ origin: true, credentials: true }),
	express.json(), // 옵션 설정
	express.urlencoded() // 옵션 설정
];

export default middlewares;
