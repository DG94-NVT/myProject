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
    renderPagination(pagination);
  } catch (error) {
<<<<<<< HEAD
    console.log('failed to fetch post list', error);
=======
    console.log('failed to creat post item', error);
  }
}

function renderPostList(postList) {
  if (!Array.isArray(postList) || postList.length === 0) return;

  const ulElement = document.getElementById('postsList');
  if (!ulElement) return;

  postList.forEach((post) => {
    const liElement = createPostElement(post);
    ulElement.appendChild(liElement);
  });
}

// pagination

function handleFilterChange(filterName, filterValue) {
  const url = new URL(window.location);
  url.searchParams.set(filterName, filterValue);
  history.pushState({}, '', url);
  // fetch API

  // Re-render post list
}

function handlePrevClick(e) {
  e.preventDefault();
  console.log('prev');
}

function handleNextClick(e) {
  e.preventDefault();
  console.log('next');
}

function init() {
  // bind click event for prev/next Button
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  const prevButton = pagination.firstElementChild?.firstElementChild;
  if (prevButton) {
    prevButton.addEventListener('click', handlePrevClick);
  }

  const nextButton = pagination.lastElementChild?.firstElementChild;
  if (nextButton) {
    nextButton.addEventListener('click', handleNextClick);
>>>>>>> 662cf013e3e53a746eecf4649825c1f4201b07ee
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
    renderPagination(pagination);
  } catch (error) {
    console.log('get all failed', error);
  }
})();
