import postsApi from '../api/postApi';
// import { getCityById } from '../api/cityApi'; => import name

async function main() {
  try {
    const queryParams = {
      _page: 1,
      _limit: 10,
    };
    const response = await postsApi.getAll(queryParams);

    console.log(response);
  } catch (error) {
    console.log('get all failed', error);
  }
}

main();
