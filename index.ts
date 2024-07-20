import express, { Express } from "express";
import config from "config";
import middlewares from "middlewares";
import App from "./app";

const bootstrap = (port: number | string = 3005, server: () => Express) => {
	// 서버 인스턴스 생성
	const app = new App(port, server);

	// 미들웨어 세팅
	app.setMiddleWares(middlewares);
};

bootstrap(config.LISTEN_PORT, express);
