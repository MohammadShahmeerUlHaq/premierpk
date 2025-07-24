import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Settings, Cable, Shield, Power, Layers } from "lucide-react";
import switchgearImage from "@/assets/switchgear-modern.jpg";
import cableTrayImage from "@/assets/cable-tray.jpg";

export const Products = () => {
  const switchgearProducts = [
    "AMF/ATS Panel",
    "Change Over Panels", 
    "Control Panel",
    "Desk Panels",
    "Genset Synchronizing Panel",
    "L.T. Panel",
    "Load Bank",
    "Load Take Off Panel",
    "Motor Control Center",
    "PFI Panel",
    "Power & Lighting DBs",
    "Power Panels"
  ];

  const productCategories = [
    {
      title: "Electrical Switchgears",
      description: "Complete range of electrical switchgear panels and control systems for industrial applications",
      icon: Zap,
      image: switchgearImage,
      products: switchgearProducts,
      badge: "12+ Products"
    },
    {
      title: "Cable Management",
      description: "Professional cable trays and ladder systems for organized electrical infrastructure",
      icon: Cable,
      image: cableTrayImage,
      products: ["Cable Trays", "Cable Ladders", "Accessories", "Support Systems"],
      badge: "Complete Range"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Electrical Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From sophisticated switchgear systems to organized cable management, 
            we provide technically excellent and reliable electrical infrastructure solutions.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card key={category.title} className="overflow-hidden bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{category.badge}</Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary/10 backdrop-blur-sm p-3 rounded-lg">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Product List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {category.products.slice(0, 8).map((product) => (
                    <div key={product} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{product}</span>
                    </div>
                  ))}
                  {category.products.length > 8 && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                      <span>+{category.products.length - 8} more</span>
                    </div>
                  )}
                </div>

                <Button variant="professional" className="w-full">
                  View All Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Quality Assured", description: "Certified & reliable products" },
            { icon: Power, title: "High Performance", description: "Superior electrical performance" },
            { icon: Settings, title: "Custom Solutions", description: "Tailored to your requirements" },
            { icon: Layers, title: "Complete Range", description: "Full spectrum of products" }
          ].map((feature) => (
            <Card key={feature.title} className="text-center p-6 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};