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
      title: '%sのメンバー',
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
