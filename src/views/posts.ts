import { Posts } from '../api/dto/post.dto';

export const postsTemplate = (posts: Posts[]) => {
  if (posts?.length === 0) {
    return emptyNews();
  }
  let html = '<div class="row">';
  for (const postsItem of posts) {
    html += `
<div class="col-lg-6">
<div class="card">
<div class="card-body">
<h5 class="card-title">${postsItem.name}</h5>
<h6 class="card-subtitle mb-2 text-muted">
${postsItem.description}
</h6><h6 class="card-subtitle mb-2 text-muted">
Дата создания: ${postsItem.createdAt.toLocaleDateString('en-CA')}
</h6>
<p class="card-text">${postsItem.text}</p>
</div>
<div class="card-footer">`;

    if (postsItem.comments.length > 0) {
      for (const commentsItem of postsItem.comments) {
        html += `<div class="comment">
        <p class="comments-text">${commentsItem.text}<br>
        <em class="createdAt">${commentsItem.createdAt.toLocaleString(
          'en-CA',
        )}</em></p>
        </div>`;
      }
    }

    html += `</div>
</div>
</div>
`;
  }
  html += '</div>';
  return html;
};
const emptyNews = () => {
  return `<h1>Список новостей пуст!</h1>`;
};
