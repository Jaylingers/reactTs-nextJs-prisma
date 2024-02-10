
import {getAllUserData} from "@/app/hooks/user";

interface ListProps {
}

const List: React.FC<ListProps> = (props) => {

    const {users} = getAllUserData();

  return (
      <>
          {
              users?.map((user) => {
                    return (
                        <div key={user.user_id}>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                })
          }
      </>
  )
}
export default List;

