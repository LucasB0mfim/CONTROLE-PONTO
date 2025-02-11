import csv from "csv-parser";
import { Readable } from "stream";

const readCSV = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const result = [];

        const readableStream = Readable.from(fileBuffer);

        readableStream
            .pipe(csv({ separator: ";" }))
            .on("data", (data) => {
                const columns = {
                    periodo: data["Período"],
                    chapa: data["Matrícula"],
                    nome: data["Nome"],
                    jornadaRealizada: data["Jornada realizada"],
                    falta: data["Falta"],
                    eventoAbono: data["Evento Abono"]
                };

                result.push(columns);
            })
            .on("end", () => resolve(result))
            .on("error", (error) => reject(error));
    });
};

export default readCSV;