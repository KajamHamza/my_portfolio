import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the project data based on the ID
  const project = {
    id: params.id,
    title: `Project ${params.id}`,
    description: 'This is a detailed description of the project. It would include information about the goals, process, and outcomes of the project.',
    image: '/placeholder.svg',
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none" />
      <main className="container mx-auto px-4 py-8 relative z-10 animate-fade-in">
        <Link href="/" className="inline-block mb-8">
          <Button variant="outline" className="backdrop-blur-lg bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-[60vh] object-cover rounded-lg shadow-glow"
          />
          <p className="text-lg text-zinc-300">{project.description}</p>
          {/* Add more project details here */}
        </div>
      </main>
    </div>
  )
}

