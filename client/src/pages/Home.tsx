import { useEffect, useState } from "react";
import { getProfile, getProjects, getPublications, getExperience } from "@/api/profile";
import { Github, Linkedin, Twitter, Mail, MapPin, Building2, MapPinIcon, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Profile, Project, Publication, Experience } from "@/types/profile";
import { useToast } from "@/hooks/useToast"; // Import toast hook

export function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast(); // Use toast hook

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [profileData, projectsData, publicationsData, experienceData] = await Promise.all([
          getProfile(),
          getProjects(),
          getPublications(),
          getExperience()
        ]);
        setProfile(profileData.user);
        setProjects(projectsData.projects);
        setPublications(publicationsData.publications);
        setExperiences(experienceData.experiences);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error",
          description: error.message || "Failed to load profile data",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [toast]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading profile data...</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-destructive">Failed to load profile data.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <Avatar className="w-32 h-32 mx-auto">
          <AvatarImage src={profile.avatar} alt={profile.name} />
          <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          {profile.name}
        </h1>
        <p className="text-xl text-muted-foreground">{profile.title}</p>
        <div className="flex justify-center space-x-4">
          <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer"
             className="hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
             className="hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
             className="hover:text-primary transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <div className="flex justify-center items-center space-x-4 text-muted-foreground">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            {profile.email}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {profile.location}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto">
        <Card className="backdrop-blur-lg bg-card/50">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{profile.about}</p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.id} className="backdrop-blur-lg bg-card/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="text-muted-foreground space-y-1 mt-1">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        {exp.location} • {exp.type}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.startDate} - {exp.endDate}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base space-y-2">
                  {exp.points.join(" ")}
                </p>
                {exp.certification && (
                  <div className="mt-3">
                    <Badge variant="outline" className="text-sm">
                      {exp.certification}
                    </Badge>
                  </div>
                )}
                {exp.learning && (
                  <div className="mt-3">
                    <strong className="text-sm">Learning:</strong>
                    <span className="text-sm ml-2">{exp.learning}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="backdrop-blur-lg bg-card/50 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  View Project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Statement Section */}
      {profile.researchStatement && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Research Statement</h2>
          <Card className="backdrop-blur-lg bg-card/50">
            <CardContent className="pt-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {profile.researchStatement.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Publications Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Research Publications</h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <Card key={pub.id} className="backdrop-blur-lg bg-card/50 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl">{pub.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  {pub.authors.join(", ")}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {pub.conference}, {pub.year}
                </p>
                <p className="mb-4">{pub.description}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer"
                   className="text-primary hover:underline inline-block">
                  Read Paper →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}