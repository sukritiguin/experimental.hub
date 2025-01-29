import { FastifyReply, FastifyRequest } from 'fastify';
import { getUserByEmail } from '../services/user.service';

interface GetUserByEmailParams {
    email: string;
}

export const getUserByEmailHandler = async (req: FastifyRequest, res: FastifyReply) => {
    const { email } = req.params as GetUserByEmailParams;
    try {
        const user = await getUserByEmail(email);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error);
    }
}