import {post} from './documents/post'
import { page } from './documents/page'
import sections from './sections'
export const schema = [
    post,
    page,
    ...sections
]