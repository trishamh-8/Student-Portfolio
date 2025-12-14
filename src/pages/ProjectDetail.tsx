import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft, 
  Edit, 
  Share2, 
  Eye, 
  Heart,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const project = {
  id: 1,
  title: 'E-Commerce Mobile App',
  category: 'UI/UX Design',
  publishDate: 'Jan 15, 2024',
  status: 'Published',
  tags: ['Mobile Design', 'E-Commerce', 'iOS', 'Android'],
  views: 245,
  likes: 32,
  summary: 'A comprehensive redesign of a mobile e-commerce application focused on improving user experience and increasing conversion rates.',
  problem: 'The existing e-commerce app had a high cart abandonment rate and users complained about the complicated checkout process. The navigation was confusing, and product discovery was difficult.',
  process: [
    {
      title: 'User Research',
      description: 'Conducted interviews with 20 users and analyzed user behavior data to identify pain points.',
      icon: '🔍',
    },
    {
      title: 'Wireframing',
      description: 'Created low-fidelity wireframes to explore different layout options and user flows.',
      icon: '📐',
    },
    {
      title: 'UI Design',
      description: 'Designed high-fidelity mockups with a focus on modern aesthetics and usability.',
      icon: '🎨',
    },
    {
      title: 'Prototyping',
      description: 'Built interactive prototypes and conducted usability testing with 15 participants.',
      icon: '⚡',
    },
  ],
  results: {
    metrics: [
      { label: 'Cart Abandonment', value: '-35%' },
      { label: 'User Satisfaction', value: '+42%' },
      { label: 'Conversion Rate', value: '+28%' },
    ],
    description: 'The redesign resulted in significant improvements across all key metrics. Users praised the simplified checkout process and improved product discovery.',
  },
  tools: ['Figma', 'Adobe XD', 'Principle', 'Miro', 'Google Analytics'],
  images: [
    'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  relatedProjects: [
    {
      id: 2,
      title: 'Portfolio Website Redesign',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Dashboard UI Kit',
      category: 'UI Design',
      image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ],
};

export function ProjectDetail() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600">
        <Link to="/app/projects" className="hover:text-gray-900 flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Header */}
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{project.category}</Badge>
              <span 
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Published' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {project.status}
              </span>
            </div>
            
            <h1 style={{ fontFamily: 'var(--font-family-heading)', color: 'var(--color-primary-dark)' }}>
              {project.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {project.publishDate}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {project.views} views
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {project.likes} likes
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="flex items-center">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button asChild style={{ backgroundColor: 'var(--color-primary)' }}>
              <Link to={`/app/projects/${project.id}/edit`}>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Summary */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-8">
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-family-heading)' }}>
            Project Summary
          </h2>
          <p className="text-gray-700" style={{ lineHeight: 'var(--line-height-body)' }}>
            {project.summary}
          </p>
        </CardContent>
      </Card>

      {/* Problem Statement */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-8">
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-family-heading)' }}>
            Problem Statement
          </h2>
          <p className="text-gray-700" style={{ lineHeight: 'var(--line-height-body)' }}>
            {project.problem}
          </p>
        </CardContent>
      </Card>

      {/* Process */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-8">
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-family-heading)' }}>
            Design Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.process.map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-8">
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-family-heading)' }}>
            Results & Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {project.results.metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-lg text-center"
                style={{ backgroundColor: 'rgba(42, 108, 234, 0.05)' }}
              >
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-success)' }}
                >
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <p className="text-gray-700" style={{ lineHeight: 'var(--line-height-body)' }}>
            {project.results.description}
          </p>
        </CardContent>
      </Card>

      {/* Gallery Section */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-8">
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-family-heading)' }}>
            Gallery
          </h2>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, idx) => (
                <div key={idx} className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={image}
                    alt={`Project screenshot ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center space-x-4 mt-6">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-600">1 / 2</span>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools Stack */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-8">
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-family-heading)' }}>
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
              >
                <span className="font-medium" style={{ color: 'var(--color-primary)' }}>
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Related Projects */}
      <div>
        <h2 className="mb-6" style={{ fontFamily: 'var(--font-family-heading)' }}>
          Related Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.relatedProjects.map((related) => (
            <Card 
              key={related.id}
              className="border-0 shadow-md hover-lift transition-elevation cursor-pointer overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={related.image}
                  alt={related.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-1">{related.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{related.category}</p>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/app/projects/${related.id}`}>
                    View Project
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
