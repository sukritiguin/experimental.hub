import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();


export const createUser = async (email: string, name: string) => {
    let user;
    try {
        user = await prisma.user.create({
            data: {
                email,
                name
            }
        })
    } catch (error) {
        console.log("=============================================")
        console.log(error)
        console.log("============================================")

    }
    return user;
}

export const getAllUsers = async () => {
    let user;
    try {
        user = await prisma.user.findMany({})
            
    } catch (error) {
        console.log("=============================================")
        console.log(error)
        console.log("=============================================")
    }
    return user;
}
export const getUserByEmail = async (email: string) => {
    let user;
    try {
        user = await prisma.user.findUnique({
            where: {
                email
            }
        })
    } catch (error) {
        console.log("=============================================")
        console.log(error)
        console.log("=============================================")
    }
    return user;
}