export const aboutLoad = function (content) {
  const markup = `<div class="about">
          <h3>Made by Harshal</h3>
          <p>A software developer in eHealth</p>
        </div>`;
  content.insertAdjacentHTML("beforeend", markup);
};
