
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export default function Home() {
  return (
    <>
      <div>
        <h1>Home page content</h1>
      </div>
    </>
  );
}
