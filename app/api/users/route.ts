import { NextResponse } from "next/server";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc } from "firebase/firestore";
import { app } from "@/app/firebase";

const db = getFirestore(app);
const auth = getAuth(app);

export async function Register(req: Request) {
  try {
    const body = await req.json();

    const { email, password, isAdmin, isVerified,  } = body;

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const docRef = await setDoc((firestore, "User"), )
  } catch (error) {
    console.log("[USER_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
