// deskStructure.js
import type {StructureResolver} from 'sanity/structure'
export const customStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page')
        .title('Pages')
        .child(
            getPageTree(S)
        //   S.documentTypeList('page')
        //     .title('Nested Pages')
        //     .filter('_type == "page" && !defined(parent)')
        ),
    ])

const getPageTree = (S: any, parentId: string | null = null) =>
  S.documentTypeList('page')
    .title(parentId ? 'Child Pages' : 'Pages')
    .filter('_type == "page" && $parentId == parent._ref')
    .params({ parentId })
    .child((pageId: string) =>
      // When a page is selected, show its children recursively
      getPageTree(S, pageId)
    )