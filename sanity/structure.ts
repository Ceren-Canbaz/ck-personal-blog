import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      // S.documentTypeListItem('author').title('Authors'),
      // S.documentTypeListItem('detailPost').title('DetailPost'),
      S.documentTypeListItem('test').title('Test'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category' ,'test'].includes(item.getId()!),
      ),
    ])
