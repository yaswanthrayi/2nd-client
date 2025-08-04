import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "50+",
      text: "Hip hop is a style of popular music featuring rap with an electronic backing"
    },
    {
      number: "240+",
      text: "Hip hop is a style of popular music featuring rap with an electronic backing"
    },
    {
      number: "140+",
      text: "Hip hop is a style of popular music featuring rap with an electronic backing"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-background via-muted to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-lg bg-card border border-border disco-glow hover:scale-105 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text pulse-neon">
                {stat.number}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;