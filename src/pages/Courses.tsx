
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Filter } from "lucide-react";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "IT",
    "Business", 
    "Personal Development",
    "Language",
    "Other"
  ];

  const courses = [
    {
      title: "React Fundamentals",
      category: "IT",
      description: "Comprehensive course covering React basics, hooks, and state management",
      certificate: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      duration: "40 hours",
      provider: "Tech Academy",
      completedDate: "2024"
    },
    {
      title: "JavaScript ES6+",
      category: "IT",
      description: "Advanced JavaScript concepts including async/await, destructuring, and modules",
      certificate: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      duration: "30 hours",
      provider: "Code Institute",
      completedDate: "2023"
    },
    {
      title: "Project Management Basics",
      category: "Business",
      description: "Fundamentals of project management methodologies and tools",
      certificate: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      duration: "25 hours",
      provider: "Business School",
      completedDate: "2024"
    },
    {
      title: "CSS Grid & Flexbox",
      category: "IT",
      description: "Modern CSS layout techniques for responsive web design",
      certificate: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      duration: "20 hours",
      provider: "Design Academy",
      completedDate: "2023"
    },
    {
      title: "Leadership Skills",
      category: "Personal Development",
      description: "Developing leadership qualities and team management skills",
      certificate: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      duration: "35 hours",
      provider: "Leadership Institute",
      completedDate: "2024"
    },
    {
      title: "English for Business",
      category: "Language",
      description: "Professional English communication for business environments",
      certificate: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      duration: "60 hours",
      provider: "Language Center",
      completedDate: "2023"
    },
    {
      title: "UX/UI Design Principles",
      category: "IT",
      description: "User experience and interface design fundamentals",
      certificate: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      duration: "45 hours",
      provider: "Design Studio",
      completedDate: "2024"
    },
    {
      title: "Digital Marketing",
      category: "Business",
      description: "Online marketing strategies and social media management",
      certificate: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      duration: "30 hours",
      provider: "Marketing Academy",
      completedDate: "2023"
    }
  ];

  const filteredCourses = selectedCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through various courses and certifications
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="glass-effect card-glow group hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Provider:</span>
                        <span className="font-medium">{course.provider}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completed:</span>
                        <span className="font-medium">{course.completedDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-2">{course.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {course.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                  <img 
                    src={course.certificate} 
                    alt={`${course.title} Certificate`}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Category:</span>
                      <Badge variant="secondary" className="ml-2">
                        {course.category}
                      </Badge>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Duration:</span>
                      <span className="ml-2">{course.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Provider:</span>
                      <span className="ml-2">{course.provider}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Completed:</span>
                      <span className="ml-2">{course.completedDate}</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No courses found in the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
