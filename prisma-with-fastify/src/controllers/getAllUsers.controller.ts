import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { getAllUsers } from "../services/user.service";


export const getAllUserHandler = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const users = await getAllUsers();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error);
    }
}