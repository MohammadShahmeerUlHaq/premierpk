import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Factory, 
  GraduationCap, 
  Hospital, 
  Hotel, 
  ShoppingBag,
  Fuel,
  University,
  Building,
  Download
} from "lucide-react";
import switchgearImage from "@/assets/switchgear-modern.jpg";
import cableTrayImage from "@/assets/cable-tray.jpg";
import industrialImage from "@/assets/industrial-facility.jpg";

export const Gallery = () => {
  const projectImages = [
    { 
      src: switchgearImage, 
      title: "Electrical Switchgear Systems",
      category: "Switchgears",
      description: "Advanced control panels and switchgear installations"
    },
    { 
      src: cableTrayImage, 
      title: "Cable Management Solutions",
      category: "Cable Trays",
      description: "Professional cable tray and ladder systems"
    },
    { 
      src: industrialImage, 
      title: "Industrial Electrical Infrastructure",
      category: "Industrial Projects",
      description: "Complete electrical solutions for industrial facilities"
    },
    { 
      src: switchgearImage, 
      title: "Motor Control Centers",
      category: "Control Systems",
      description: "Sophisticated motor control and automation systems"
    },
    { 
      src: industrialImage, 
      title: "Power Distribution Systems",
      category: "Power Systems",
      description: "Reliable power distribution and management"
    },
    { 
      src: cableTrayImage, 
      title: "Cable Management Infrastructure",
      category: "Cable Systems",
      description: "Organized cable routing and management solutions"
    }
  ];

  const categories = [
    { name: "All Projects", count: "50+", active: true },
    { name: "Switchgears", count: "20+" },
    { name: "Cable Management", count: "15+" },
    { name: "Industrial", count: "10+" },
    { name: "Commercial", count: "5+" }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of completed electrical infrastructure projects. 
            From switchgear installations to complete industrial electrical systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <div className="relative">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{image.category}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Company Profile Download */}
        <div className="text-center bg-gradient-card rounded-2xl p-8">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Download className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Download Company Profile</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get detailed information about our company, services, and completed projects. 
            Download our comprehensive company profile brochure.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('http://premierpk.com/site/wp-content/uploads/2013/12/Company%20Profile.pdf', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Company Profile
          </Button>
        </div>
      </div>
    </section>
  );
};