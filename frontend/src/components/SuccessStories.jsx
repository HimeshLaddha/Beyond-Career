import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Briefcase } from 'lucide-react';

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      location: "Bangalore",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      rating: 5,
      quote: "Beyond Career transformed my understanding of the tech industry. Their mentorship program connected me with a Google engineer who guided me through the entire interview process.",
      achievement: "Landed dream job at Google"
    },
    {
      name: "Rahul Patel",
      role: "Product Manager",
      company: "Microsoft",
      location: "Hyderabad",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      rating: 5,
      quote: "The career guidance I received was exceptional. From resume building to interview preparation, every aspect was covered with precision and care.",
      achievement: "Promoted to Senior PM within 1 year"
    },
    {
      name: "Anisha Reddy",
      role: "Data Scientist",
      company: "Amazon",
      location: "Mumbai",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      rating: 5,
      quote: "The skill development programs and industry insights helped me transition from electrical engineering to data science seamlessly.",
      achievement: "Career pivot success story"
    },
    {
      name: "Karan Singh",
      role: "Startup Founder",
      company: "TechVenture",
      location: "Delhi",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      rating: 5,
      quote: "Beyond Career's entrepreneurship guidance and network connections were instrumental in helping me start my own company.",
      achievement: "Raised $2M in seed funding"
    }
  ];

  const achievements = [
    { number: "98%", label: "Placement Rate", icon: "🎯" },
    { number: "150%", label: "Average Salary Hike", icon: "📈" },
    { number: "5000+", label: "Success Stories", icon: "⭐" },
    { number: "50+", label: "Partner Companies", icon: "🤝" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleStartJourney = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="success" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Success</span> Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories from students who achieved their career dreams with our guidance
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-dark-700 rounded-2xl p-6 text-center border border-gray-600 hover:border-primary-500/50 transition-all duration-300 card-hover stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 animate-bounce">{achievement.icon}</div>
              <div className="text-3xl font-bold text-white mb-2 animate-counter">
                {achievement.number}
              </div>
              <div className="text-gray-400 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        {testimonials[currentSlide] && (
          <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-700">
            <div className="absolute top-8 left-8 text-primary-500 opacity-20">
              <Quote className="h-16 w-16" />
            </div>

            <div className="relative">
              {/* Main testimonial */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed italic">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500">
                      <img
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {testimonials[currentSlide].name}
                      </h4>
                      <div className="flex items-center text-gray-400 mb-1">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>
                          {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{testimonials[currentSlide].location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="order-1 lg:order-2 flex justify-center">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-center text-white max-w-sm">
                    <div className="text-4xl mb-4">🏆</div>
                    <h3 className="text-xl font-bold mb-2">Achievement Unlocked</h3>
                    <p className="text-sm opacity-90">
                      {testimonials[currentSlide].achievement}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-12 h-12 bg-dark-600 rounded-full text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Dots indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === currentSlide ? "bg-primary-500" : "bg-gray-600"
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-12 h-12 bg-dark-600 rounded-full text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        )}


        {/* CTA Section */}
        <div className="text-center mt-16 fade-in fade-in-delay-4">
          <h3 className="text-3xl font-bold text-white mb-4 gradient-text">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our guidance
          </p>
          <button
            onClick={handleStartJourney}
            className="btn-primary bg-gradient-to-r from-primary-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;