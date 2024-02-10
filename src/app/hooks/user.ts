import {Prisma, PrismaClient, users} from '@prisma/client';
import { useEffect, useState } from "react";


const prisma = new PrismaClient();

export async function getUsers(): Promise<{
    users?: users[];
    error?: Prisma.PrismaClientKnownRequestError | unknown;
}> {
    try {
        console.log("jay2")
        const users = await prisma.users.findMany();
        console.log(users)
        return {users};
    } catch (error) {
        // console.log("jay1")
        return { error: error instanceof Error ? error.message : 'Unknown error occurred' };
    }
}

export interface UserData extends users {}

export const getAllUserData = () => {
    const [users, setUsers] = useState<UserData[]>([]); // Initial state set to null
    const getAllUserData = () => {
        const fetchData = async () => {
            const {users,error} = await getUsers();
            console.log("Fetched users:", users);
            console.log(error)
            setUsers(users as UserData[]);
        };
        fetchData().then();
    }

    useEffect(getAllUserData, [users]); // Empty dependency array ensures that this effect runs only once
    return { users };
};
