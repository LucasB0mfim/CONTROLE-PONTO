import uploadFileService from "../services/UploadService.js";
const service = uploadFileService;

class UploadController {
    constructor() {
        this.uploadFile = this.uploadFile.bind(this);
    }

    async uploadFile(req, res) {
        try {
            const file = req.file;

            if (!file) {
                throw new Error("Nenhum arquivo foi enviado.");
            }

            const result = await service.processFile(file);

            return res.status(200).json({
                success: true,
                message: 'Arquivo processado com sucesso.',
                data: result
            });
        } catch (error) {
            let status = 500;

            if (error.message.includes("Tamanho do arquivo excedido.")) {
                status = 413;
            } else if (error.message.includes("Formato de arquivo não suportado.")) {
                status = 415;
            } else if (error.message.includes("A solicitação foi malformada ou contém parâmetros inválidos.")) {
                status = 400;
            } else if (error.message.includes("O servidor está temporariamente indisponível.")) {
                status = 503;
            }

            return res.status(status).json({
                success: false,
                message: error.message
            });
        }
    }
}

export default new UploadController();