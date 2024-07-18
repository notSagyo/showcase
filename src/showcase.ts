export interface ShowcaseItem {
  id: ShowcaseId;
  title: string;
  author: { name: string; url: string };
  codeUrl?: string;
  sourceUrl?: string;
  next: ShowcaseId | null;
  prev: ShowcaseId | null;
}

export type ShowcaseId = 'NewHeight' | 'JapaneseSpa';

export const showcaseItems: Record<ShowcaseId, ShowcaseItem> = {
  NewHeight: {
    id: 'NewHeight',
    title: 'New Height',
    author: { name: 'Volodymyr Rutskyi', url: 'https://www.behance.net/vladimirrutskiy' },
    sourceUrl:
      'https://www.behance.net/gallery/190861163/Residential-complex-Landing-page-Website-design',
    codeUrl: 'https://github.com/notSagyo/showcase/blob/master/src/pages/JapaneseSpa/index.astro',
    prev: null,
    next: 'JapaneseSpa',
  },
  JapaneseSpa: {
    id: 'JapaneseSpa',
    title: 'Japanese Spa',
    author: { name: 'Natalia Guseva', url: 'https://www.behance.net/nataligsv' },
    sourceUrl: 'https://www.behance.net/gallery/164868741/Concept-for-Japanese-SPA-resort',
    codeUrl: 'https://github.com/notSagyo/showcase/blob/master/src/pages/NewHeight.astro',
    prev: 'NewHeight',
    next: null,
  },
};
