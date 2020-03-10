import { PostDB } from "../../../data/postDataBase";
import { PostType, PostWithUser } from "../../entities/post";
import { NotFoundError } from "../../error/NotFoundError";
import { InvalidParameterError } from "../../error/InvalidParameterError";


export class GetPostByIdUC {
  constructor(private db: PostDB) {}

  public async execute(input: GetPostByIdUCInput): Promise<GetPostByIdUCOutput> {

    if (input.id === "") {
      throw new InvalidParameterError("Id must not be an empty string");
    }

    const user = await this.db.getPost(input.id);

    if (!user) {
      throw new NotFoundError("Post not found");
    }

    return {
      id: user.getId(),
      title: user.getTitle(),
      content:  user.getContent(),
      image:  user.getImage(),
      type: user.getType(),
      userId:  user.getUserId(),
      userName:  user.getUser().getName()
    }
  }
}

export interface GetPostByIdUCInput {
  id: string;
}

export interface GetPostByIdUCOutput {
  id: string;
  title: string;
  content: string;
  image?: string;
  type: PostType;
  userId: string;
  userName: string;
}
