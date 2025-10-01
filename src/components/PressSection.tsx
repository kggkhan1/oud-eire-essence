const PressSection = () => {
  const press = [
    {
      name: "The Irish Times",
      quote: "Anything I've ordered has been amazing and has a long lasting scent."
    },
    {
      name: "RTÉ Lifestyle",
      quote: "We seriously couldn't tell the difference between this and the real deal."
    },
    {
      name: "Her.ie",
      quote: "Ideal for that festive fragrance or last-minute gift idea."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {press.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="font-playfair text-2xl font-bold text-foreground/80">
                {item.name}
              </div>
              <p className="text-sm text-muted-foreground font-inter italic">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
