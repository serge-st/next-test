import { NextPage } from 'next';

type UserPageProps = {
    params: {
      id: string;
    };
  };
  
const UserPage: NextPage<UserPageProps> = ({ params: { id } }) => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1>Hello user!</h1>
      <div>Let&apos;s try to get one user for you</div>
      <h2 className="text-4xl">{id}</h2>
    </div>
  );
};

export default UserPage;