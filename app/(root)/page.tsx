import { auth } from "@/auth";

const Home = async ()=> {
    const session = await auth();
    console.log(session);

  return (
   <div>
       <h1 className="h1-bold font-space-grotesk">Welcome to the Devflow App!</h1>
   </div>
  );
}

export default Home;