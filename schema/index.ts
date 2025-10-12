// Pages
import { post } from './documents/post'
import { page } from './documents/page'
import columnStructure from './sections/columnStructure'
// Page sections
import sections from './sections'

// Objects

import layout from './objects/layout'

export const schema = [
    post,
    page,
    ...sections,
    columnStructure,
    layout
]