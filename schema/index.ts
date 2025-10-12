// Site settings
import header from './globals/header'
import footer from './globals/footer'
import navigation from './globals/navigation'
// Pages
import { post } from './documents/post'
import { page } from './documents/page'
import columnStructure from './sections/columnStructure'

// Page sections
import sections from './sections'

// Objects
import pageMeta from './objects/pageMeta'
import layout from './objects/layout'
import link from './objects/link'

export const schema = [
    // Site settings
    header,
    footer,
    navigation,
    // Page types
    post,
    page,
    // Page sections
    ...sections,
    columnStructure,
    // Objects
    layout,
    pageMeta,
    link
]