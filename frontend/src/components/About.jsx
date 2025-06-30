import { Target, Eye, Heart, Lightbulb, Users, Trophy } from 'lucide-react';
import React from 'react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Constantly evolving our methods to provide cutting-edge career solutions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building a supportive network of students, mentors, and industry professionals"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality guidance and support"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Empathy",
      description: "Understanding each student's unique journey and challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span> Beyond Career
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Born from the vision of IIT Kharagpur students, we're dedicated to transforming career guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
          {/* Story Section */}
          <div className="space-y-6 slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed fade-in fade-in-delay-1">
              Founded by passionate students at IIT Kharagpur, Beyond Career emerged from a simple
              observation: too many talented students struggle to navigate their career paths due to
              lack of proper guidance and mentorship.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed fade-in fade-in-delay-2">
              What started as a small initiative to help fellow students has grown into a comprehensive
              platform that bridges the gap between academic excellence and career success. We combine
              the technical rigor of IIT education with practical industry insights.
            </p>
            <div className="flex items-center space-x-4 pt-4 bounce-in">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center pulse-glow">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Built by Students, for Students</p>
                <p className="text-gray-400">IIT Kharagpur Foundation</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative slide-in-right">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden card-hover">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Students collaborating"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-2xl rotate-in pulse-glow">
              <Trophy className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="bg-dark-700 p-8 rounded-2xl border border-primary-500/20 card-hover glow-border scale-in">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-primary-500 mr-3 pulse-glow" />
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize career guidance by providing every student with access to personalized
              mentorship, industry insights, and opportunities that align with their aspirations and potential.
            </p>
          </div>

          <div className="bg-dark-700 p-8 rounded-2xl border border-purple-500/20 card-hover glow-border scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-purple-500 mr-3 pulse-glow" />
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become the leading platform where students discover their true potential and build
              meaningful careers that contribute to society while achieving personal fulfillment.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="fade-in fade-in-delay-3">
          <h3 className="text-3xl font-bold text-center text-white mb-12 gradient-text">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 card-hover text-center stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {React.cloneElement(value.icon, { className: "h-8 w-8 text-primary-500" })}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;