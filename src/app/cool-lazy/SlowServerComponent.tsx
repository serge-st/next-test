import { timeout } from "./timeout";

const getUsers = async (): Promise<string[]> => {
    await timeout(5000);
    return [
        "John Doe",
        "Jane Doe",
        "Bob Smith",
        "Alice Johnson",
        "Mike Brown",
    ]
}

export const SlowServerComponent = async () => {
    const users = await getUsers();

    return (
        <div className="">
            <h2 className="text-xl">User List:</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
};
