import { Bell, Brain, Lock } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            How It Works
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Three steps to financial clarity
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Lock,
              title: "Connect Securely",
              description:
                "Link your primary income and expense accounts with bank-level encryption.",
            },
            {
              icon: Brain,
              title: "AI Analysis",
              description:
                'Our engine calculates your "True Disposable Income" by predicting upcoming bills and lifestyle needs.',
            },
            {
              icon: Bell,
              title: "The Verdict",
              description:
                'Every Sunday, receive a notification: "You have $350 free. We recommend investing $200 in your Growth Portfolio."',
            },
          ].map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center p-6"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-14 left-1/2 w-full h-2px bg-linear-to-r from-transparent via-border to-transparent -z-10 translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
