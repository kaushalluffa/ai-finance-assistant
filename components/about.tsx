import { Brain, Lock, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Our Mission
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              To democratize financial intelligence. We believe everyone
              deserves a hedge-fund quality analyst in their pocket, guiding
              them toward wealth one week at a time.
            </p>
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4">Why PocketMentor?</h3>
              <p className="text-primary-foreground/80">
                Because finance is lonely. We built a companion that cares about
                your net worth as much as you do—without the high fees of a
                human advisor.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                The Technology: Under the Hood
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                PocketMentor isn&apos;t just a calculator. It is a Predictive
                Cash Flow Engine.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Brain className="h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold block">Pattern Recognition</span>
                    <span className="text-primary-foreground/70 text-sm">
                      We analyze 12 months of your spending to predict bills you
                      forgot about.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <TrendingUp className="h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold block">
                      Risk-Adjusted Advice
                    </span>
                    <span className="text-primary-foreground/70 text-sm">
                      Our AI checks the market pulse and your personal risk
                      profile before suggesting an investment.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Lock className="h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold block">Data Privacy First</span>
                    <span className="text-primary-foreground/70 text-sm">
                      We use read-only access. We can analyze your numbers, but
                      we can never touch your money.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "AES-256 Bit Encryption",
                "SOC2 Compliant",
                "Read-Only Access API",
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium"
                >
                  <Shield className="h-4 w-4" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
