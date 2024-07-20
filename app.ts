import { Express, RequestHandler } from "express";
import { IApp } from "interface/app.interface";

class App implements IApp {
	public instance;
	private port: number | string;

	constructor(port: string | number, express: () => Express) {
		this.instance = express();
		this.port = port;
		this.listen(this.port);
	}

	public setMiddleWares(middlewares: RequestHandler[]): void {
		middlewares.forEach((v) => {
			this.instance.use(v);
		});
	}

	private listen(port: number | string): void {
		this.instance.listen(port, () => {
			console.log(`SERVER_PORT:${port} start`);
		});
	}
}

export default App;
