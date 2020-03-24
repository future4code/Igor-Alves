import { Request, Response } from "express";
import { FriendDB } from "../../data/friendDB"
import { UndoFriendshipUC } from "../../business/usecases/user/undoFriendship";


export const undoFriendshipEndpoint = async (req: Request, res: Response) => {
  try {
    const undoFriendshipUC = new UndoFriendshipUC (new FriendDB());

    const result = await undoFriendshipUC.execute({
      token: req.headers.auth as string,
      friendId: req.body.friendId
    });
    
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};