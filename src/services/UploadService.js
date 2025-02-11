import readCSV from "../utils/readCSV.js";

class UploadService {
    async processFile(file) {
        const csvData = await readCSV(file.buffer);
        return csvData;
    }
}

export default new UploadService();