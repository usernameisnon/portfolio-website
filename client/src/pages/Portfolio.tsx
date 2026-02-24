import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const projects = [
    {
      title: "Le Wagon",
      description: "Co-founded Le Wagon, a coding bootcamp for startups, creative people and tech skills.",
      role: "Co-founder & CTO",
      tech: ["Ruby on Rails", "PostgreSQL", "React"],
      link: "#"
    },
    {
      title: "Kitt",
      description: "A platform for Le Wagon students and teachers to interact, share knowledge and manage the curriculum.",
      role: "Lead Developer",
      tech: ["Ruby on Rails", "Redis", "Sidekiq"],
      link: "#"
    },
    {
      title: "Ondine",
      description: "A personal project exploring fluid dynamics and generative art in the browser.",
      role: "Creator",
      tech: ["JavaScript", "Canvas API", "WebGL"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#2C5F9E]">{project.title}</CardTitle>
                <CardDescription className="font-mono text-xs mt-1 text-gray-500">{project.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-gray-100 text-gray-600 font-normal hover:bg-gray-200">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
