import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Calendar, Clock, Eye, Share2, Bookmark } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const article = {
  id: 1,
  title: 'Getting Started with Figma: A Complete Guide',
  category: 'Tutorial',
  date: 'January 20, 2024',
  readTime: '8 min read',
  views: 432,
  image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  content: `
Figma has revolutionized the way designers collaborate and create digital products. In this comprehensive guide, we'll explore everything you need to know to get started with Figma.

## What is Figma?

Figma is a cloud-based design tool that allows teams to collaborate in real-time. Unlike traditional design software, Figma runs entirely in your browser, making it accessible from anywhere.

## Getting Started

To begin your Figma journey, simply create a free account on figma.com. The free tier is surprisingly generous and includes:

- Unlimited personal files
- 3 active projects
- Unlimited collaborators on files
- Access to community files

## Key Features

### 1. Real-time Collaboration
Multiple designers can work on the same file simultaneously. You'll see each other's cursors and changes in real-time.

### 2. Components and Variants
Create reusable design elements that can be updated globally across your designs.

### 3. Auto Layout
Build responsive designs that adapt to content changes automatically.

### 4. Prototyping
Create interactive prototypes without leaving Figma.

## Best Practices

1. **Organize your layers** - Use clear naming conventions and group related elements
2. **Use constraints** - Make your designs responsive from the start
3. **Create a design system** - Build a library of reusable components
4. **Leverage plugins** - Extend Figma's functionality with community plugins

## Conclusion

Figma is an incredibly powerful tool that continues to evolve. Whether you're a beginner or an experienced designer, there's always something new to learn.
  `,
  relatedArticles: [
    {
      id: 2,
      title: 'UI/UX Design Trends in 2024',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Building Responsive Layouts',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ],
};

export function ArticleDetail() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600">
        <Link to="/app/articles" className="hover:text-gray-900 flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <div>
        <Badge variant="secondary" className="mb-4">{article.category}</Badge>
        <h1 className="mb-4" style={{ fontFamily: 'var(--font-family-heading)', color: 'var(--color-primary-dark)' }}>
          {article.title}
        </h1>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {article.views} views
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="aspect-video rounded-xl overflow-hidden">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-8 prose prose-lg max-w-none">
          <div 
            className="text-gray-700"
            style={{ lineHeight: 'var(--line-height-body)' }}
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
          />
        </CardContent>
      </Card>

      {/* Related Articles */}
      <div>
        <h2 className="mb-6" style={{ fontFamily: 'var(--font-family-heading)' }}>
          Related Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {article.relatedArticles.map((related) => (
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
                <Badge variant="secondary" className="mb-2">{related.category}</Badge>
                <h3 className="font-semibold mb-4">{related.title}</h3>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/app/articles/${related.id}`}>
                    Read Article →
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
