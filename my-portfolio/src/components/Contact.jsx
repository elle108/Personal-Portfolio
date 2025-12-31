import React from "react"
import ContactDetailsCard from "./ContactDetails.jsx"
import ContactFormCard from "./ContactForm"

// Contact page component to display contact details and form
function Contact() {

  return (
    <div className="min-h-screen px-6 py-16 flex justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <ContactDetailsCard />
        <ContactFormCard />
      </div>
    </div>
  )
}

export default Contact
