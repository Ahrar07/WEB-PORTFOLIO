export interface Skill {
  id: string
  name: string
  percentage: number
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { id: 'c', name: 'C', percentage: 80 },
      { id: 'cpp', name: 'C++', percentage: 80 },
      { id: 'python', name: 'Python', percentage: 90 },
      { id: 'javascript', name: 'JavaScript', percentage: 85 },
      { id: 'sql', name: 'SQL', percentage: 75 }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { id: 'html', name: 'HTML', percentage: 90 },
      { id: 'css', name: 'CSS', percentage: 88 },
      { id: 'react', name: 'React.js', percentage: 85 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Tools',
    skills: [
      { id: 'node', name: 'Node.js', percentage: 80 },
      { id: 'docker', name: 'Docker', percentage: 75 },
      { id: 'git', name: 'Git', percentage: 85 },
      { id: 'adb', name: 'ADB', percentage: 70 }
    ]
  },
  {
    id: 'platforms',
    title: 'Platforms',
    skills: [
      { id: 'linux', name: 'Linux', percentage: 80 },
      { id: 'github', name: 'GitHub', percentage: 85 }
    ]
  }
]
