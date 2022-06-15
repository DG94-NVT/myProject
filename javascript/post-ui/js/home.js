//  import format commonjs
// var relativeTime = require('dayjs/plugin/relativeTime');
// dayjs.extend(relativeTime);
// import esm module

import postsApi from './api/postApi';
import { initPagination, initSearch, renderPostList, renderPagination } from './utils';
// import { getCityById } from '../api/cityApi'; => import name

async function handleFilterChange(filterName, filterValue) {
  try {
    const url = new URL(window.location);
    url.searchParams.set(filterName, filterValue);

    if (filterName === 'title_like') url.searchParams.set('_page', 1);

    history.pushState({}, '', url);

    // fetch API
    const { data, pagination } = await postsApi.getAll(url.searchParams);

    renderPostList(data);
    renderPagination('pagination', pagination);
  } catch (error) {
    console.log('failed to fetch post list', error);
  }
}

(async () => {
  try {
    const url = new URL(window.location);
    //update search params if needed
    if (!url.searchParams.get('_page')) url.searchParams.set('_page', '1');
    if (!url.searchParams.get('_limit')) url.searchParams.set('_limit', '12');

    //
    history.pushState({}, '', url);
    const queryParams = url.searchParams;
    initPagination({
      elementId: 'pagination',
      defaultParams: queryParams,
      onChange: (page) => handleFilterChange('_page', page),
    });

    initSearch({
      elementId: 'searchInput',
      defaultParams: queryParams,
      onChange: (value) => handleFilterChange('title_like', value),
    });

    // Render post list based URL params
    const { data, pagination } = await postsApi.getAll(queryParams);
    renderPostList(data);
    renderPagination('pagination', pagination);
  } catch (error) {
    console.log('get all failed', error);
  }
})();
