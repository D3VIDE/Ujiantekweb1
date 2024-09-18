
  var lastCardId = null;
  var cardId= null
  function addCard() {
      cardId = 'card-' + Date.now();
      lastCardId = cardId;
      var card = `
        <div id="${cardId}" class="card custom-card mt-3">
          <img src="https://picsum.photos/200" class="card-img-top" alt="Placeholder image" style="width:200px; height:200px;">
          <div class="card-body">
            <h5 class="card-title">Image title here</h5>
            <p class="card-text">Image description here...</p>
            <button type="button" class="btn btn-primary custom-size" onclick="deleteCard('${cardId}')">Delete this card</button>
          </div>
        </div>
      `;
      document.getElementById('cardContainer').innerHTML += card;
    
  }
  function deleteCard(cardId) {
    var cardElement = document.getElementById(cardId);
    if (cardElement) {
      cardElement.remove();
    }
  }


  function updateCard() {
    if (lastCardId === cardId) {
      var titleInput = document.getElementById('ImageTitle').value;
      var descriptionInput = document.getElementById('DeskripsiTitle').value; 

      var lastCard = document.getElementById(lastCardId);
      var cardTitle = lastCard.querySelector('.card-title');
      var cardDescription = lastCard.querySelector('.card-text');

      if (titleInput) {
        cardTitle.textContent = titleInput;
      } 
      if (descriptionInput) {
        cardDescription.textContent = descriptionInput;
      } 
    }
  }
