import { Button } from "./ui/button";

const LandingPageCTA = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="mx-auto mb-6 max-w-[700px] text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
          Start building wealth this Sunday.
        </h2>
        <p className="mx-auto mb-10 max-w-[600px] text-muted-foreground md:text-xl">
          Join the financial revolution. Your first weekly summary is waiting.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 rounded-full px-8 text-base">
            Get My Weekly Summary
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LandingPageCTA