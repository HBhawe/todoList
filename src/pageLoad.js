export const pageLoad = function (content) {
  const heading = `<h1>Welcome to my restaurant</h1>`;
  const text = `<p>This restaurant has been open for 25 years!`;
  content.insertAdjacentHTML("beforeend", heading);
  content.insertAdjacentHTML("beforeend", text);
};
