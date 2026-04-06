import {
  courseAuthor,
  courseLastRevision,
  courseLinks,
  courseTitle,
  originalTableOfContents,
} from '../content/course'
import { fundamentosBlock } from '../views/fundamentos'
import { documentosBlock } from '../views/documentos'
import { requisitosWebBlock } from '../views/requisitos-web'
import { uxBlock } from '../views/ux'
import type { CourseBlock } from './types'

export const courseBlocks: CourseBlock[] = [
  fundamentosBlock,
  requisitosWebBlock,
  uxBlock,
  documentosBlock,
]

export {
  courseAuthor,
  courseLastRevision,
  courseLinks,
  courseTitle,
  originalTableOfContents,
}

export const getBlockBySlug = (slug: string) =>
  courseBlocks.find((block) => block.slug === slug)

export const getBlockPath = (slug: string) => `/${slug}`

export const getSectionPath = (blockSlug: string, sectionId: string) =>
  `${getBlockPath(blockSlug)}/${sectionId}`

export const getSectionBySlug = (blockSlug: string, sectionId: string) =>
  getBlockBySlug(blockSlug)?.sections.find((section) => section.id === sectionId)
