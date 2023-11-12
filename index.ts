import { initializeApp } from "firebase-admin/app";
import { firestore } from "firebase-functions/v1";
import { WelcomeEmail } from "./emails";

exports.sendWelcomeEmail= firestore.document("users/{userId}").onCreate((snap, context) => {
    const data =snap.data()
    WelcomeEmail(data?.email, data?.name)
})