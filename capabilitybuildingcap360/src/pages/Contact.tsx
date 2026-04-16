import { useLocation } from "react-router-dom"; // ← add this import
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  const { hash } = useLocation(); // ← add this line
  const defaultTab = hash === "#booking" ? "booking" : "contact"; // ← add this line

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in <span className="text-cap-orange">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-muted-foreground max-w-2xl">
            Ready to transform your organization? Reach out to us or schedule a meeting.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue={defaultTab} className="w-full"> {/* ← use defaultTab here */}
            <TabsList className="mb-8">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="booking">Schedule a Meeting</TabsTrigger>
            </TabsList>
            <TabsContent value="contact">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <ContactForm />
              </motion.div>
            </TabsContent>
            <TabsContent value="booking">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-foreground mb-6">Book a meeting or demo</h2>
                <BookingForm />
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;