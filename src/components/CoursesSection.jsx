import React from 'react';
import { Music, Zap, Heart, Star } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Hip Hop Fundamentals",
      description: "Master the basics of hip hop dance with our comprehensive beginner program. Learn foundation moves, rhythm, and style.",
      features: ["Beginner Friendly", "8 Week Program", "Professional Instructors"],
      gradient: "from-primary to-accent"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Breaking & B-Boying",
      description: "Dive into the world of breaking with power moves, toprock, downrock, and freezes. Build strength and style.",
      features: ["Intermediate Level", "Battle Ready", "Strength Training"],
      gradient: "from-accent to-secondary"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Contemporary Fusion",
      description: "Blend contemporary dance with hip hop elements. Express emotions through movement and artistic storytelling.",
      features: ["Creative Expression", "All Levels", "Performance Focus"],
      gradient: "from-secondary to-primary"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Advanced Choreography",
      description: "Take your skills to the next level with complex routines, advanced techniques, and performance preparation.",
      features: ["Advanced Level", "Choreography", "Performance Team"],
      gradient: "from-primary via-accent to-secondary"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-bounce-in">
            Our Dance Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-left">
            Discover your passion with our diverse range of dance programs designed for all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border disco-glow hover:scale-105 transition-all duration-500 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-6 space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${course.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.gradient}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full mt-6 py-3 px-4 rounded-lg bg-gradient-to-r ${course.gradient} text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 disco-glow`}>
                  Learn More
                </button>
              </div>

              {/* Floating Animation Element */}
              <div className={`absolute -top-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-r ${course.gradient} opacity-20 group-hover:animate-pulse`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;