import { NextResponse } from "next/server";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, setDoc, doc } from "firebase/firestore";
import { app } from "@/app/firebase";

const db = getFirestore(app);
const auth = getAuth(app);

export async function Register(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password, gender, isAdmin, isVerified } = body;

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const store = await setDoc(doc(db, `User/${userCredential.user.uid}`), {
      name,
      email,
      gender,
      isAdmin,
      isVerified,
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log("[USER_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
