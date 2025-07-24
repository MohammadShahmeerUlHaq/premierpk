import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Building
} from "lucide-react";
import industrialImage from "@/assets/industrial-facility.jpg";

export const Projects = () => {
  const projectCategories = [
    { name: "Flour Mills", icon: Factory, count: "15+" },
    { name: "Rice Mills", icon: Factory, count: "12+" },
    { name: "Chemical Industries", icon: Fuel, count: "8+" },
    { name: "Banks", icon: Building2, count: "25+" },
    { name: "Hotels & Restaurants", icon: Hotel, count: "20+" },
    { name: "Hospitals", icon: Hospital, count: "18+" },
    { name: "Educational Institutes", icon: GraduationCap, count: "30+" },
    { name: "Pharmaceuticals", icon: University, count: "10+" },
    { name: "Offices & Apartments", icon: Building, count: "50+" },
    { name: "Shopping Malls", icon: ShoppingBag, count: "15+" }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diverse Industry Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have successfully completed electrical infrastructure projects across various industries, 
            delivering reliable solutions that meet specific industry requirements.
          </p>
        </div>

        {/* Hero Project Card */}
        <Card className="mb-16 overflow-hidden bg-gradient-card shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img 
                src={industrialImage} 
                alt="Industrial Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4">Featured Project</Badge>
              <h3 className="text-2xl font-bold mb-4">
                Complete Industrial Electrical Infrastructure
              </h3>
              <p className="text-muted-foreground mb-6">
                Our comprehensive electrical solutions power industries across Pakistan. 
                From manufacturing facilities to commercial complexes, we deliver 
                reliable and efficient electrical infrastructure that meets the highest standards.
              </p>
              <Button variant="professional" className="w-fit">
                View Project Details
              </Button>
            </div>
          </div>
        </Card>

        {/* Project Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {projectCategories.map((category) => (
            <Card key={category.name} className="text-center p-6 bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group cursor-pointer">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm">{category.name}</h3>
              <Badge variant="outline" className="text-xs">{category.count}</Badge>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-hero rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-8">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-primary-foreground">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Projects in Progress</h3>
          <p className="text-muted-foreground mb-8">
            We are currently working on several major electrical infrastructure projects 
            across different sectors. Our commitment to excellence ensures timely delivery 
            and superior quality in every project.
          </p>
          <Button variant="cta" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};