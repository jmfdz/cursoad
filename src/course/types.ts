import type { Component } from 'vue'

export type Figure = {
  src: string
  alt: string
  caption: string
}

export type SectionExample = {
  title: string
  href: string
  description: string
}

export type SectionShowcase = {
  title: string
  summary: string
  code: string
  previewHtml: string
  notes?: string[]
}

export type TocMode = 'none' | 'h2' | 'h2-h3'

export type CourseSection = {
  id: string
  title: string
  component: Component
  toc?: TocMode
  figure?: Figure
  gallery?: Figure[]
  examples?: SectionExample[]
  showcase?: SectionShowcase
}

export type CourseBlock = {
  slug: string
  shortTitle: string
  title: string
  route: string
  menuDescription: string
  homeSummary?: string
  introComponent: Component
  sections: CourseSection[]
}

export type SectionSubheading = {
  id: string
  title: string
  level: 2 | 3
}
