import { CheckCircle2, Zap } from "lucide-react";
import { Button } from "./ui/button";

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-14px rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-1rem left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-32px w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-64px w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-2rem overflow-hidden w-full h-full bg-background relative">
                {/* App Screen Content */}
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-8 mt-6">
                    <span className="font-bold text-lg">PocketMentor</span>
                    <div className="h-8 w-8 rounded-full bg-muted"></div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Weekly Pulse</h3>
                      <p className="text-sm text-muted-foreground">
                        Sunday, Nov 18
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-500">
                          Positive Cash Flow
                        </span>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Surplus
                          </p>
                          <p className="text-2xl font-bold text-foreground">
                            +$550.00
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-xl bg-muted/50">
                        <p className="text-xs text-muted-foreground mb-1">
                          Income
                        </p>
                        <p className="font-semibold text-green-500">+$2,400</p>
                      </div>
                      <div className="p-3 rounded-xl bg-muted/50">
                        <p className="text-xs text-muted-foreground mb-1">
                          Expenses (Est)
                        </p>
                        <p className="font-semibold text-red-500">-$1,850</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-primary text-primary-foreground shadow-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-4 w-4" />
                        <span className="text-sm font-bold">
                          The PocketMentor Move
                        </span>
                      </div>
                      <p className="text-sm opacity-90 mb-4 leading-relaxed">
                        Based on your goals, you have a $550 surplus. We suggest
                        moving $400 to your S&P 500 ETF and keeping $150 as a
                        buffer.
                      </p>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-full font-semibold text-primary"
                      >
                        Execute Move
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Feature Showcase
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Weekly Financial Pulse
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Get a clear picture of your finances every Sunday. No complex
              spreadsheets, just actionable insights delivered to your pocket.
            </p>
            <ul className="space-y-4">
              {[
                "Instant cash flow analysis",
                "Predictive expense modeling",
                "One-tap investment execution",
                "Personalized safety buffers",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
