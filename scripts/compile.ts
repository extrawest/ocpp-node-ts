import { compileFromFile } from "json-schema-to-typescript";
import fs from "fs";

fs.readdir(
	__dirname + "/../src/schemas/",
	function (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		err: any,
		files: string[]
	) {
		//handling error
		if (err) {
			return console.log("Unable to scan directory: " + err);
		}
		//listing all files using forEach
		files.forEach(function (file: string) {
			// compile from file
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			compileFromFile(__dirname + "/../src/schemas/" + file).then((ts: any) =>
				fs.writeFileSync(
					__dirname + "/../src/types/" + file.replace(
						".json",
						".ts"
					),
					ts
				));

		});
	}
);