import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "El origen de la afinación 432 Hz y su relación con Pitágoras",
    excerpt: "Descubre la historia fascinante de cómo Pitágoras y la matemática antigua se relacionan con la afinación de 432 Hz.",
    image: "/blog-post-1.jpg",
    slug: "/blog/origen-432hz-pitagoras",
    date: "15 de Enero, 2024",
    readTime: "8 min",
  },
  {
    id: "2",
    title: "La Quinta del Lobo: el error inevitable del Círculo de Quintas",
    excerpt: "Comprende por qué el Círculo de Quintas tiene un error inevitable y cómo la Quinta del Lobo afecta la afinación.",
    image: "/blog-post-2.jpg",
    slug: "/blog/quinta-lobo-circulo-quintas",
    date: "10 de Enero, 2024",
    readTime: "10 min",
  },
  {
    id: "3",
    title: "432 Hz vs 440 Hz: qué cambia realmente",
    excerpt: "Análisis detallado de las diferencias reales entre 432 Hz y 440 Hz con números, mediciones y experiencia práctica.",
    image: "/blog-post-3.jpg",
    slug: "/blog/432hz-vs-440hz-cents",
    date: "5 de Enero, 2024",
    readTime: "12 min",
  },
  {
    id: "4",
    title: "Hicimos una prueba ciega 432 vs 440: resultados y qué aprendimos (sin humo)",
    excerpt: "Descubre los resultados reales de nuestra prueba ciega comparando 432 Hz vs 440 Hz. Datos, análisis y conclusiones sin especulación.",
    image: "/blog-article-1.jpg",
    slug: "/blog/prueba-ciega-432-vs-440",
    date: "22 de Enero, 2026",
    readTime: "8 min",
  },
  {
    id: "5",
    title: "Guía: afinación alternativa en guitarras (Drop, Open Tunings) + A=432 Hz",
    excerpt: "Combina afinaciones alternativas con 432 Hz sin liarte. Tabla de referencia, soluciones prácticas y recomendaciones por estilo.",
    image: "/blog-article-2.jpg",
    slug: "/blog/afinaciones-alternativas-432",
    date: "22 de Enero, 2026",
    readTime: "10 min",
  },
  {
    id: "6",
    title: "¿De verdad 432 'relaja'? Qué dice la evidencia y qué dice la experiencia",
    excerpt: "Análisis honesto de la evidencia científica sobre 432 Hz y relajación. Estudios, limitaciones y cómo probarlo tú mismo sin hype.",
    image: "/blog-article-3.jpg",
    slug: "/blog/evidencia-432-relaja",
    date: "22 de Enero, 2026",
    readTime: "12 min",
  },
  {
    id: "7",
    title: "Historia real de los estándares de afinación: por qué 440 Hz y por qué 432 Hz vuelve",
    excerpt: "La afinación A=440 Hz no siempre fue el estándar mundial. Descubre las decisiones políticas, industriales y técnicas que llevaron a 440 Hz.",
    image: "/images/blog-historia-estandares.jpg",
    slug: "/blog/historia-estandares-afinacion",
    date: "24 de Enero, 2026",
    readTime: "8 min",
  },
  {
    id: "8",
    title: "Por qué 8 Hz no es 8 Hz en música. Hz vs cents explicado fácil",
    excerpt: "Una frase común es de 440 a 432 solo hay 8 Hz. Pero musicalmente está mal planteada. Aprende por qué usamos cents.",
    image: "/images/blog-hz-vs-cents.jpg",
    slug: "/blog/hz-vs-cents-explicado",
    date: "24 de Enero, 2026",
    readTime: "6 min",
  },
  {
    id: "9",
    title: "Verdi A=432: qué es y qué NO es",
    excerpt: "Verdi A=432 es una etiqueta popular que se simplifica en mitos. Aquí dejamos claro qué parte es histórica y qué es interpretación moderna.",
    image: "/images/blog-verdi-a432.jpg",
    slug: "/blog/verdi-a-432-historia",
    date: "24 de Enero, 2026",
    readTime: "7 min",
  },
];

export default function Blog() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Volver a Inicio
          </button>
          <h1 className="text-lg font-bold text-foreground">Blog Harmony432</h1>
          <div className="w-24" />
        </div>
      </div>

      {/* Blog Content */}
      <div className="container py-16">
        {/* Page Title */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Blog Harmony432
          </h1>
          <p className="text-lg text-muted-foreground">
            Artículos, guías y análisis sobre afinación 432 Hz, Temperamento Elíptico y sonoterapia
          </p>
        </div>

        {/* Blog Posts Grid - Cluster Style 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
              onClick={() => setLocation(post.slug)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48 md:h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} lectura</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(post.slug);
                    }}
                  >
                    Leer artículo
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto pt-12 border-t border-border text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            ¿Listo para experimentar?
          </h2>
          <p className="text-muted-foreground">
            Accede a todas nuestras herramientas: afinador de precisión, conversor de audio y sintetizador con soporte MIDI
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setLocation("/tuner")}
          >
            Ir al Afinador Harmony432
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="container py-8 border-t border-border">
        <Button
          variant="outline"
          onClick={() => setLocation("/")}
        >
          ← Volver a Inicio
        </Button>
      </div>
    </div>
  );
}
