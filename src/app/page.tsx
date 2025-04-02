
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  console.log("Home Page....");
  return (
    <>
      <div>
        <SignedOut>
          <SignInButton mode="modal" >
            <Button>Sign in</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </>
  );
}
