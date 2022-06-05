import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { setTextContent, truncateText } from './common';
dayjs.extend(relativeTime);

export function createPostElement(post) {
  if (!post) return;
  try {
    //   find and clone template html
    const postTemplate = document.getElementById('postTemplate');
    if (!postTemplate) return;

    const liElement = postTemplate.content.firstElementChild.cloneNode(true);
    if (!liElement) return;
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

export function renderPostList(postList) {
  if (!Array.isArray(postList)) return;

  const ulElement = document.getElementById('postsList');
  if (!ulElement) return;

  // clear current list
  ulElement.textContent = '';

  postList.forEach((post) => {
    const liElement = createPostElement(post);
    ulElement.appendChild(liElement);
  });
}
