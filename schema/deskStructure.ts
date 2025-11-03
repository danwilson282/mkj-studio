// deskStructure.ts
import type { StructureResolver, StructureBuilder } from 'sanity/structure'
import { FaCog } from 'react-icons/fa'
import { LuFileText } from 'react-icons/lu' // Lucide
import { FaWpforms } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
export const customStructure: StructureResolver = (S) =>
S.list()
    .title('Content Structure')
    .items([
      // 🔹 Section 1: Main Content
      S.listItem()
        .title('Content')
        .icon(LuFileText)
        .child(
          S.list()
            .title('Content')
            .items([
              S.documentTypeListItem('page')
                .title('Pages')
                .icon(LuFileText)
                .child(getPageTree(S)),

              S.documentTypeListItem('post')
                .title('Posts')
                .icon(LuFileText),
              S.documentTypeListItem('form')
                .title('Forms')
                .icon(FaWpforms),
              S.documentTypeListItem('customDev')
                .title('Dev component')
                .icon(MdDeveloperMode),
            ])
        ),

      // 🔹 Section 2: Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(FaCog) 
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Header')
                .icon(FaCog) 
                .child(
                  S.editor()
                    .id('header')
                    .schemaType('header')
                    .documentId('header')
                ),

              S.listItem()
                .title('Footer')
                .icon(FaCog) 
                .child(
                  S.editor()
                    .id('footer')
                    .schemaType('footer')
                    .documentId('footer')
                ),
              S.listItem()
                .title('Navigation')
                .icon(FaCog) 
                .child(
                  S.editor()
                    .id('navigation')
                    .schemaType('navigation')
                    .documentId('navigation')
                ),
            ])
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