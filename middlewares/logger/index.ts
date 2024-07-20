import morgan, { TokenIndexer, StreamOptions, Options } from "morgan";
import { Request, Response } from "express";
import * as rfs from "rotating-file-stream";
import * as path from "path";

const pad = (num: number) => (num > 9 ? "" : "0") + num;

const generator = () => {
	const now = new Date();
	const date = now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate());
	return date + ".log";
};

const accessLogStream = (location?: string, filename?: string) => {
	!location ? (location = "../../") : (location = "../../" + location);
	!filename ? (filename = "access.log") : "";
	return rfs.createStream(filename, {
		// interval: "30s",
		// interval: "12h",
		interval: "1d",
		size: "10M",
		compress: "gzip",
		path: path.join(path.resolve(__dirname, location))
	});
};

morgan.token("Custom-Token-Id", (req: Request, res: Response) => "로그 토큰 테스트");

const logger = morgan(":date[web] :method :url :Custom-Token-Id", {
	buffer: false,
	stream: accessLogStream("log", generator())
});

export default logger;

// import morgan, { TokenIndexer, StreamOptions, Options, Morgan } from "morgan";
// import { Request, Response } from "express";
// import * as rfs from "rotating-file-stream";
// import { RotatingFileStream } from "rotating-file-stream";
// import * as path from "path";

// class Logger {
// 	morgan: Morgan<Request, Response>;
// 	logger: any;

// 	constructor(morgan: Morgan<Request, Response>) {
// 		this.morgan = morgan;
// 		this.logger = this.morgan()
// 	}

// 	private createCustomToken(tokenName: string, conditionFn: () => {}): Morgan<Request, Response> {
// 		return this.morgan.token(tokenName, (req: Request) => req.body);
// 	}

// 	private createLoggerOption(format: string, isBuffer:boolean, options:Options<Request, Response>){
// 		return
// 	}

// 	private setFormat(tokens: TokenIndexer, req: Request, res: Response) {
// 		return [tokens.method];
// 	}

// 	private getFileName(): string {
// 		const pad = (num: number) => (num > 9 ? "" : "0") + num;
// 		const now = new Date();
// 		const date = now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate());

// 		return date + ".log";
// 	}

// 	private createStream(location?: string, filename?: string) {
// 		!location ? (location = "../../") : (location = "../../" + location);
// 		!filename ? (filename = "access.log") : "";

// 		return rfs.createStream(filename, {
// 			// interval: "30s",
// 			// interval: "12h",
// 			interval: "1d",
// 			size: "10M",
// 			compress: "gzip",
// 			path: path.join(path.resolve(__dirname, location))
// 		});
// 	}
// }
