import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getUsers } from "@/app/hooks/user";
import { users } from ".prisma/client";
import {useEffect} from "react";

interface ListProps {}

export interface UserData extends users {}

const List: React.FC<ListProps> = async (props) => {
    const queryOutput = await getUsers();

    return (
       <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {queryOutput.users?.map((user) => (
                                <TableRow key={user.user_id}>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </main>
    );
};

export default List;
