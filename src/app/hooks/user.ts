
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async () => {
    try {
        const users = await prisma.users.findMany();
        return {users};
    } catch (error) {
        return { error: error instanceof Error ? error.message : 'Unknown error occurred' };
    }
}


