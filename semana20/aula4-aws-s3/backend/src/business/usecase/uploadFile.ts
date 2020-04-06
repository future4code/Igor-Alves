import { FileGateway } from "../gateways/file";
import { UploadedFile } from "express-fileupload";

export class UploadFileUC {
  constructor(private fileGateway: FileGateway) {}

  public async execute(input: UploadFileUCInput): Promise<string> {
    const file = await this.fileGateway.uploadFile(
      input.file.name,
      input.file.data
    );
    return `
      <p>
        Sucesso! Link: <a href="${file.getLink()}">aqui</a>
      </p>
      <img src="${file.getLink()}" width="50%">
    `;
  }
}

interface UploadFileUCInput {
  file: UploadedFile;
}
