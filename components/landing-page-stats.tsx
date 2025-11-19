
const LandingPageStats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Trusted by smart investors
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="flex flex-col p-8 rounded-2xl border border-border bg-card">
            <div className="flex-1 mb-6">
              <p className="text-lg italic text-muted-foreground">
                I used to wonder if I could afford to invest. PocketMentor told
                me I could, and now my portfolio is up 15%.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                SJ
              </div>
              <div>
                <p className="font-bold">Sarah J.</p>
                <p className="text-sm text-muted-foreground">
                  Marketing Director
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-8 rounded-2xl border border-border bg-card">
            <div className="flex-1 mb-6">
              <p className="text-lg italic text-muted-foreground">
                Found $300/month I didn&apos;t know I had. It&apos;s like finding money
                in your pocket, but every single month.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary-foreground">
                MT
              </div>
              <div>
                <p className="font-bold">Mike T.</p>
                <p className="text-sm text-muted-foreground">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPageStats