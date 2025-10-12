// Pages
import { post } from './documents/post'
import { page } from './documents/page'

// Page sections
import sections from './sections'

// Objects

import layout from './objects/layout'

export const schema = [
    post,
    page,
    ...sections,
    layout
]