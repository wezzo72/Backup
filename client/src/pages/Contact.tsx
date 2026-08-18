import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink, Phone, Handshake } from "lucide-react";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

export default function Contact() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Contact — Reach the Barran Dodger Legal & Ethical Trust Fund"
        description="Contact Dr Richard McLean (Barran Dodger) for media inquiries, whistleblower support, evidence submission, or legal correspondence. Email: drbarrandodger@proton.me | Phone: +61 431 300 940."
        keywords="contact Barran Dodger, whistleblower contact Australia, media inquiry Richard McLean, evidence submission, legal correspondence"
        path="/contact"
      />
      <Navigation />
      
      <main className="flex-grow pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
            >
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-serif font-bold text-primary mb-4">Contact Us</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Support, collaborations, enquiries and opportunities are welcomed — from media, legal professionals, researchers, advocates, and the public. Reach out directly by phone or email.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-zinc-900 rounded-lg border border-border shadow-sm">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Call or Text Direct</h3>
                      <p className="text-sm text-muted-foreground mb-3">Dr Richard McLean personally welcomes calls for support, collaboration, media, legal, research and general enquiries.</p>
                      <a href="tel:+61431300940" className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:underline">
                        <Phone className="h-4 w-4" /> +61 431 300 940
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-zinc-900 rounded-lg border border-border shadow-sm">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email (Encrypted)</h3>
                      <p className="text-sm text-muted-foreground mb-2">For written correspondence, evidence submission, or confidential communications via ProtonMail.</p>
                      <a href="mailto:drbarrandodger@proton.me" className="text-primary font-medium hover:underline text-sm">drbarrandodger@proton.me</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg border shadow-sm" style={{ background: "rgba(233,160,10,0.06)", borderColor: "rgba(233,160,10,0.25)" }}>
                    <Handshake className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: "#e9a00a" }} />
                    <div>
                      <h3 className="font-bold mb-2" style={{ color: "#e9a00a" }}>Collaborations & Opportunities</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The Trust Fund is open to partnerships with journalists, documentary makers, legal advocates, academics, human rights organisations, and international bodies. If you are in a position to amplify, verify, publish, or act on this evidence — please make contact. All approaches are treated with discretion.
                      </p>
                      <div className="mt-3 flex flex-col sm:flex-row gap-2">
                        <a href="tel:+61431300940" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors" style={{ background: "rgba(233,160,10,0.15)", color: "#e9a00a", border: "1px solid rgba(233,160,10,0.3)" }}>
                          <Phone className="h-3.5 w-3.5" /> +61 431 300 940
                        </a>
                        <a href="mailto:drbarrandodger@proton.me" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors" style={{ background: "rgba(132,204,22,0.1)", color: "#84cc16", border: "1px solid rgba(132,204,22,0.2)" }}>
                          <Mail className="h-3.5 w-3.5" /> drbarrandodger@proton.me
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-zinc-900 rounded-lg border border-border shadow-sm">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Registered Address</h3>
                      <p className="text-sm text-muted-foreground">
                        Barran Dodger Legal &amp; Ethical Trust Fund<br />
                        ABN 78 833 496 164<br />
                        VIC 3173, Australia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Media Inquiries
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    For press requests, please call <a href="tel:+61431300940" className="text-primary hover:underline font-semibold">+61 431 300 940</a> or use the form below and select "Media Inquiry" as the subject. We aim to respond to verified media within 48 hours.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 p-8 rounded-xl border border-border shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Reason for contact" {...field} value={field.value || ''} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                      disabled={isPending}
                    >
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border max-w-5xl mx-auto"
            data-testid="section-share-contact"
          >
            <SocialShare 
              title="Contact the Barran Dodger Legal & Ethical Trust Fund"
              description="Reach out for whistleblower support, legal inquiries, media requests, or to contribute to the fight for truth and accountability. Secure communications via ProtonMail."
              url="https://www.barrandodger.com/contact"
            />
          </motion.section>
        </div>
      </main>

      <ArchiveCrossLinks />
      <Footer />
          <FloatingCTA />
</div>
  );
}
