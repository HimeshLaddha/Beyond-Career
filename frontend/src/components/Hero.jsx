import { ArrowRight, Play, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  const handleStartJourney = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    // replace this with actual video modal or redirect to demo video
    alert('Demo video coming soon! For now, scroll down to explore our services.');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden md:py-10 pt-20 sm:py-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-500/20 rounded-full blur-xl float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-primary-500/10 rounded-full blur-xl float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">

          {/* Main Headline */}
          <div className="fade-in fade-in-delay-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text block">Beyond Career</span>
              <span className="mt-3 text-white text-4xl md:text-5xl lg:text-6xl block slide-in-right">ALL ABOUT YOUR DREAMS</span>
            </h1>
          </div>

          {/* Description */}
          <div className="fade-in fade-in-delay-2">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering students with personalized career guidance, expert mentorship, 
              and exclusive opportunities to build successful careers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in fade-in-delay-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button 
                onClick={handleStartJourney}
                className="group btn-primary flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button 
                onClick={handleWatchDemo}
                className="group flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="fade-in fade-in-delay-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center scale-in stagger-item">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary-500 mr-2" />
                  <span className="text-3xl font-bold text-white animate-counter">5000+</span>
                </div>
                <p className="text-gray-400">Students Guided</p>
              </div>
              <div className="text-center scale-in stagger-item">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-purple-500 mr-2" />
                  <span className="text-3xl font-bold text-white animate-counter">98%</span>
                </div>
                <p className="text-gray-400">Success Rate</p>
              </div>
              <div className="text-center scale-in stagger-item">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-3xl font-bold text-white animate-counter">50+</span>
                </div>
                <p className="text-gray-400">Industry Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;