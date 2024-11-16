type ArticleType = 'data' | 'feature' | 'game';

type ContributorRole = 'coder' | 'producer' | 'writer';

type Article = {
  platform: 'web' | 'print';
  types?: ArticleType[];
  roles: ContributorRole[];
  title: string;
  url: string;
  imageId: string;
  publishedDate: string;
  publisher: string;
};
