import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { UploadFileUC } from "../../business/usecase/uploadFile";
import { S3 } from "../../business/services/s3";

export const uploadFileEndpoint = async (req: Request, res: Response) => {
  try {
    console.log("req.files: ", req.files);
    if (!req.files) {
      res.status(400);
      return;
    }

    const upload = req.files.arquivo as UploadedFile;

    const uc = new UploadFileUC(new S3(""));
    const response = await uc.execute({
      file: upload
    });

    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
    return;
  }
};
