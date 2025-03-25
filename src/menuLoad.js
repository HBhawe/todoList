export const menuLoad = function (content) {
  const markup = `<h2>Menu</h2>
        <div class="drinks">
          <h3>Beverages</h3>
          <ul>
            <li>Coffee : ₹50</li>
            <li>Tea : ₹50</li>
            <li>Fresh Lime Soda : ₹40</li>
          </ul>
        </div>
        <div class="food">
          <h3>Food</h3>
          <ul>
            <li>Poha : ₹120</li>
            <li>Upma : ₹110</li>
            <li>Misal pav : ₹135</li>
          </ul>
        </div>`;
  content.insertAdjacentHTML("beforeend", markup);
};
