import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Component to display contact details
function ContactDetailsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold text-3xl">
          <h1>☁︎ Contact Details ☁︎</h1>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-center text-xl text-center">
          <p> ˗ˏˋ ⚲ ˎˊ˗ Allendale, MI <br /> <br />
          ˗ˏˋ ✉︎ ˎˊ˗ ellemiller108@gmail.com<br /> <br />
          ˗ˏˋ ☏ ˎˊ˗ (248) 704-1141
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactDetailsCard;
