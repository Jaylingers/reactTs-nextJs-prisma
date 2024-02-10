
import {getUsers} from "@/app/hooks/user";
import {users} from ".prisma/client";

interface ListProps {
}
export interface UserData extends users {}
const List: React.FC<ListProps> = async (props) => {

    const queryOutput = await getUsers();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {queryOutput.users?.map((user) => (
                    <tr key={user.user_id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </main>

    )
}
export default List;

