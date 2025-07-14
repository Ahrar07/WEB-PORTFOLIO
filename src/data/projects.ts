export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  date: string
  githubUrl: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 'face-recognition',
    title: 'Face Recognition System',
    description:
      'A real-time face and object detection system built with Python, OpenCV, and YOLOv3. Developed during HackHound 2.0, enhancing detection accuracy by 30%.',
    technologies: ['Python', 'OpenCV', 'YOLOv3', 'Computer Vision'],
    date: 'October 2024',
    githubUrl: 'https://github.com/Ahrar07/face-recognition',
    icon: '👤'
  },
  {
    id: 'notes-app',
    title: 'Notes App',
    description:
      'A responsive, client-side notes web app built with HTML, CSS, and JavaScript. Uses LocalStorage for persistent storage and offers a clean, minimal UI.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    date: 'May 2025',
    githubUrl: 'https://github.com/Ahrar07/Notes-app',
    icon: '📝'
  },
  {
    id: 'document-manager',
    title: 'Document Manager',
    description:
      'A cloud-powered document upload and management system using React and Firebase. Allows users to securely upload, preview, and manage files online.',
    technologies: ['React', 'Firebase', 'JavaScript', 'Cloud Storage'],
    date: 'July 2025',
    githubUrl: 'https://github.com/Ahrar07/Document-Manager',
    icon: '📁'
  }
]
