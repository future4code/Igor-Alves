import { File } from "../entity/file";

export interface FileGateway {
  uploadFile(fileName: string, fileData: Buffer): Promise<File>;
}
