import { createUser } from "../services/user.service";
import { FastifyRequest, FastifyReply } from "fastify";

interface CreateUserRequest {
    Body: {
      email: string;
      name: string;
    };
  }

export const createUserHandler = async (req: FastifyRequest<CreateUserRequest>, res: FastifyReply) => {
    const {email, name} = req.body;

    console.log(req.body);

    try {
        const user = await createUser(email, name);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error);
    }
}