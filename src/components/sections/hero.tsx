import { BentoItem } from '@/components/bento-grid/bento-item'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

export function Hero() {
  return (
    <BentoItem className="col-span-full">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I'm Ahrar Hakeem
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl text-justify">
          Computer Science undergraduate passionate about infosecurity,machine learning and web development. 
          Currently an Information Security Intern at J&K Bank,building real-world security systems and tools.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Contact Me
          </button>
        </div>
      </div>
    </BentoItem>
  )
}
