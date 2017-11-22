export const FETCH_NEWS = 'FETCH_NEWS';
export const SELECT_ITEM = 'SELECT_ITEM';

export function selectItem(item, id) {
  return {
    type: SELECT_ITEM,
    item,
    id,
  };
}


export function fetchNews(item, id) {
  switch (item) {
    case 'Github':
      return {
        type: FETCH_NEWS,
        api: `/test/`,
        method: 'GET',
        id,
      };
    case '开发者头条':
      return {
        type: FETCH_NEWS,
        api: `/test/`,
        method: 'GET',
        id,
      };
    default:
      return {};
  }
}
