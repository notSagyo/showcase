interface ShowcaseItem {
  title: string;
  author: { name: string; url: string };
  codeUrl?: string;
  sourceUrl?: string;
  next: ShowcaseList | null;
  prev: ShowcaseList | null;
}

export type ShowcaseList = 'NewHeight';

export const showcaseItems: Record<ShowcaseList, ShowcaseItem> = {
  NewHeight: {
    title: 'New Height',
    author: { name: 'Volodymyr Rutskyi', url: 'https://www.behance.net/vladimirrutskiy' },
    sourceUrl:
      'https://www.behance.net/gallery/190861163/Residential-complex-Landing-page-Website-design',
    prev: null,
    next: null,
  },
};
