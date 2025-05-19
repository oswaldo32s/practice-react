const API_KEY = "0LLQr8uX2cwj1NSc7hdRirqeWexm5Nk3";
const TOP_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

export async function getNews() {
  try {
    const response = await fetch(TOP_NEWS_URL);
    const data = await response.json();
    const news = data.results;
    return news?.map((post) => {
      const imageUrl =
        post.media &&
        post.media.length > 0 &&
        post.media[0]["media-metadata"] &&
        post.media[0]["media-metadata"].length > 1
          ? post.media[0]["media-metadata"][1].url
          : null;

      const imageCaption =
        post.media && post.media.length > 0 ? post.media[0].caption : null;

      const imageCC =
        post.media && post.media.length > 0 ? post.media[0].copyright : null;

      return {
        id: post.id,
        publishedDate: post.published_date,
        section: post.section,
        title: post.title,
        abstract: post.abstract,
        image: imageUrl,
        imageCaption: imageCaption,
        imageCC: imageCC,
        url: post.url,
      };
    });
  } catch {
    throw new Error("Error getting News");
  }
}

export async function searchNews({ search }) {
  if (!search) return;
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q="${search}"&api-key=${API_KEY}`
    );
    const data = await response.json();
    const news = data.response.docs;
    return news?.map((post) => ({
      title: post.headline.main,
      abstract: post.abstract,
      section: post.section_name,
      image: post.multimedia.default.url,
      imageCC: post.multimedia.credit,
      publishedDate: post.pub_date,
      url: post.web_url,
    }));
  } catch {
    throw new Error("Error searching News with that sentece");
  }
}
