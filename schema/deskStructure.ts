// deskStructure.ts
import type { StructureResolver, StructureBuilder } from 'sanity/structure'
// import { S } from 'sanity/structure'

export const customStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page')
        .title('Pages')
        .child(
          getPageTree(S)
        ),
    ])

const getPageTree = (S: StructureBuilder, parentId: string | null = null): ReturnType<StructureBuilder['documentTypeList']> => {
  const filterQuery = parentId 
    ? `_type == "page" && parent._ref == "${parentId}"`
    : `_type == "page" && !defined(parent)`

  return S.documentTypeList('page')
    .title(parentId ? 'Child Pages' : 'Pages')
    .filter(filterQuery)
    .menuItems([])
    .child((documentId: string) =>
      S.list()
        .title('Page Details')
        .items([
          // First item: the page editor
          S.listItem()
            .id('editor')
            .title('Edit Page')
            .child(
              S.editor()
                .id(documentId)
                .schemaType('page')
                .documentId(documentId)
            ),
          S.divider(),
          // Second item: child pages
          S.listItem()
            .id('children')
            .title('Child Pages')
            .child(getPageTree(S, documentId)),
        ])
    )
}