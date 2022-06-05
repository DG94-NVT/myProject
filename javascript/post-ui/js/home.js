import postsApi from './api/postApi';
import { setTextContent, truncateText } from './utils';
//  import format commonjs
// var relativeTime = require('dayjs/plugin/relativeTime');
// dayjs.extend(relativeTime);
// import esm module
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
// import { getCityById } from '../api/cityApi'; => import name

// Posts
function createPostElement(post) {
  if (!post) return;

  try {
    //   find and clone template html
    const postTemplate = document.getElementById('postTemplate');
    if (!postTemplate) return;

    const liElement = postTemplate.content.firstElementChild.cloneNode(true);
    if (!liElement) return;

    // update title, thumbnail, desc, author...
    // const titleElement = liElement.querySelector('[data-id="title"]');
    // if (titleElement) titleElement.textContent = post.title;
    // const descriptionElement = liElement.querySelector('[data-id="description"]');
    // if (descriptionElement) descriptionElement.textContent = post.description;
    // const authorElement = liElement.querySelector('[data-id="author"]');
    // if (authorElement) authorElement.textContent = post.author;

    // su dung ham import tu module utils/common.js

    setTextContent(liElement, '[data-id="title"]', post.title);
    setTextContent(liElement, '[data-id="description"]', truncateText(post.description, 100));
    setTextContent(liElement, '[data-id="author"]', post.author);
    setTextContent(liElement, '[data-id="timeSpan"]', `- ${dayjs(post.updatedAt).fromNow()}`);

    const thumbnailElement = liElement.querySelector('[data-id="thumbnail"]');
    if (thumbnailElement) {
      thumbnailElement.src = post.imageUrl;

      thumbnailElement.addEventListener('error', () => {
        console.log('load image error --> use default placeholder');
        thumbnailElement.src = 'https://via.placeholder.com/1368x400?text=thumbnail';
      });
    }

    // attach event
    return liElement;
  } catch (error) {
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
  }
}

init();

(async () => {
  try {
    const queryParams = {
      _page: 1,
      _limit: 6,
    };
    const { data, pagination } = await postsApi.getAll(queryParams);
    renderPostList(data);
    console.log(data);
  } catch (error) {
    console.log('get all failed', error);
  }
})();
