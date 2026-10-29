import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

// Emails the message to Elle through Web3Forms (https://web3forms.com)
async function sendEmail({ name, email, message, botcheck }) {
  if (!WEB3FORMS_KEY) throw new Error("Email delivery isn't configured (missing VITE_WEB3FORMS_KEY).");

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `Portfolio message from ${name}`,
      from_name: "Elle Miller Portfolio",
      name,
      email,
      replyto: email,
      message,
      botcheck,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || "Email delivery failed.");
}

// Keeps a copy in Firestore so it also shows up on the admin dashboard
async function saveToFirestore({ name, email, message }) {
  await addDoc(collection(db, "contacts"), { name, email, message, createdAt: serverTimestamp() });
}

// Sends the message by email and archives it; succeeds if either one works
export async function sendMessage(fields) {
  const [emailResult, archiveResult] = await Promise.allSettled([sendEmail(fields), saveToFirestore(fields)]);

  if (emailResult.status === "rejected") console.error("Contact email failed:", emailResult.reason);
  if (archiveResult.status === "rejected") console.error("Contact archive failed:", archiveResult.reason);

  if (emailResult.status === "rejected" && archiveResult.status === "rejected") {
    throw new Error("Sorry, your message couldn't be sent right now. Please try again or reach out on LinkedIn.");
  }
}
