/*
type PageScheme =
  | {
      path: string;
      title: string;
    }
  | Pages;

interface Pages {
  [x: string]: PageScheme;
}
*/

const pages = {
  index: {
    path: '/',
    title: 'GitHub API サンプルアプリ',
  },
  companies: {
    index: {
      path: '/companies',
      title: 'いろんな会社のメンバー',
    },
    members: {
      path: '/:companyName/members',
      title: '%s のメンバー',
    },
  },
  repositories: {
    search: {
      path: '/repositories/search',
      title: 'リポジトリ検索',
    },
  },
};

export default pages;
