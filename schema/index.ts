// Site settings
import header from './globals/header'
import footer from './globals/footer'
import navigation from './globals/navigation'
// Pages
import { post } from './documents/post'
import { page } from './documents/page'
import { form } from './documents/form'
import { customDev } from './documents/customDev'


// Page sections
import sections from './sections'
import columnStructure from './sections/columnStructure'

// Objects
import pageMeta from './objects/pageMeta'
import layout from './objects/layout'
import link from './objects/link'
import richText from './objects/richText'
import formField from './objects/formField'
export const schema = [
    // Site settings
    header,
    footer,
    navigation,
    // Page types
    post,
    page,
    form,
    // Dev components
    customDev,
    // Page sections
    ...sections,
    columnStructure,
    // Objects
    layout,
    pageMeta,
    link,
    richText,
    formField
]