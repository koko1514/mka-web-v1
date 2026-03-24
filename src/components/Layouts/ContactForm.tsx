import FormField from "@/components/Elements/FormField";
import { Button } from "@/components/Elements/Button";
import Link from "next/link";

const ContactForm = () => {
  return (
    <form className="w-full max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <FormField label="Name *" name="name" placeholder="John Doe" />
        <FormField
          label="Phone Number"
          name="phone"
          placeholder="+62 1234567890"
        />
        <FormField
          label="Email *"
          name="email"
          type="email"
          placeholder="john@gmail.com"
        />
        <FormField
          label="Company"
          name="company"
          placeholder="Your Company Name"
        />
      </div>
      <FormField label="Subject *" name="subject" placeholder="Your subject" />
      <FormField
        label="Question *"
        name="question"
        textarea={true}
        placeholder="Type your question here..."
      />
      <Button asChild>
        <Link href="#">Submit</Link>
      </Button>
    </form>
  );
};

export default ContactForm;
