export function renderCard(title, id, color) {
  return `
  <div class="boardCard box" style="background:${color}" id="card-${id}">
    <div class="boardCardHeader">
      <h4>${title}</h4>
    </div>
    <div class="boardCardFooter">
      <span class="icon">
        <i class="fas fa-trash"></i>
      </span>
      <span class="icon">
        <i class="fas fa-star"></i>
      </span>
    </div>
  </div>
  `;
}
