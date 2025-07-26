import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Settings } from "lucide-react";
import heroImage from "@/assets/hero-electrical.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-accent rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Market Leader Since 2013</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-primary">Premier</span>
            <span className="block">Engineering Services</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
            Electricity is the most vital source of energy in this modern era. Excels in the specialised 
            manufacture export of electrical switchgears and control gears forming a dialogue between man and machine.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in">
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-card">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Switchgear Systems</h3>
                <p className="text-sm text-muted-foreground">Advanced control panels</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-card">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Cable Management</h3>
                <p className="text-sm text-muted-foreground">Trays & ladder systems</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-card">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">Reliable & certified</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => window.open('http://premierpk.com/site/wp-content/uploads/2013/12/Company%20Profile.pdf', '_blank')}
            >
              Download Company Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-secondary/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-1/3 left-10 w-12 h-12 bg-primary/20 rounded-full animate-float hidden lg:block" 
           style={{ animationDelay: '2s' }} />
    </section>
  );
};