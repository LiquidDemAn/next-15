import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return (
    <div className='flex justify-center items-center py-8'>
      <SignUp />
    </div>
  );
}

export default SignUpPage;
