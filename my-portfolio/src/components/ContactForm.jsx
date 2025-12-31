import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"

function ContactFormCard() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try{
        await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: new Date(),
        })

        alert("Your message has been submitted 💙")
        setName("")
        setEmail("")
        setMessage("")
    } catch (error){
        alert(error.message)
    }

    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold text-3xl">
          <h1>☁︎ Send Me a Message ☁︎</h1>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-xl">
        <form onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>

        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
      </CardContent>
    </Card>
  );
}

export default ContactFormCard;