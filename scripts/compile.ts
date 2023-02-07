const {compileFromFile} = require("json-schema-to-typescript");
const fs = require("fs");

fs.readdir(__dirname + "/../src/schemas/", function (err: any, files: string[]) {
    //handling error
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file: string) {
        // compile from file
        /*compileFromFile(__dirname + "/../src/schemas/" + file, []).then((ts: any) =>
            fs.writeFileSync(
                __dirname + "/../src/types/" + file.replace(".json", ".ts"),
                ts
            )
        );*/
        //console.log("import " + file.replace('.json', '') + " from " +  "'../schemas/" + file+"'");
        //console.log("import {" + file.replace('.json', '') + "} from " +  "'./types/" + file.replace('.json', '') + "'");
        console.log("export {UrnOCPPCp220203" + file.replace('.json', '') + " as "+ file.replace('.json', '') + "} from " +  "'./types/" + file.replace('.json', '') + "'");
        //console.log(file.replace('.json', ','));
    });
});