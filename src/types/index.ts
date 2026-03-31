export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  technicalRationale: string
  mainChallenge: string
  githubUrl: string | null
  demoUrl: string | null
  /** Path relative to the public root, e.g. "images/projects/foo.png". */
  previewImage: string | null
  status: 'in-progress' | 'completed'
}

export interface StackCategory {
  name: string
  items: string[]
}

export interface ContactInfo {
  github: string
  linkedin: string
}

export interface DeveloperProfile {
  fullName: string
  title: string
  tagline: string
  location: string
  availability: string
  responseTime: string
}
