import uploadFileService from "";
const service = uploadFileService;

class UploadController {

    constructor() {
        this.uploadFile = this.uploadFile.bind(this);
    }

    async uploadFile(req, res) {
        try {
            const file = req.body;
            await service.uploadFile(file);

            return res.status(200).json({
                success: true,
                message: 'Upload realizado com sucesso.'
            });
        } catch(error) {
            const status = null;
            
            return res.status(status).json({
                success: false,
                message: error.message
            });
        };
    };
};

export default new UploadController();