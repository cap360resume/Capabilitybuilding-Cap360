import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import BookingForm from "@/components/BookingForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  const { hash } = useLocation();
  const defaultTab = hash === "#booking" ? "booking" : "contact";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in <span className="text-cap-orange">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ready to transform your organization? Reach out to us or schedule a meeting.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="booking">Schedule a Meeting</TabsTrigger>
            </TabsList>
            <TabsContent value="contact">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </TabsContent>
            <TabsContent value="booking">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Book a meeting or demo</h2>
                <BookingForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;