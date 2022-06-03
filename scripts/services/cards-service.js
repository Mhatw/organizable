import apiFetch from "./api-fetch.js";
import { showBoard } from "./boards-service.js";

// function for create a card
export async function createCard(listId, card = { name }) {
  const newCard = await apiFetch(`lists/${listId}/cards`, { body: card });
  return newCard;
}

// function for show a card
export async function showCard(listId, cardId) {
  const card = await apiFetch(`lists/${listId}/cards/${cardId}`);
  return card;
}

// function for update a card
export async function updateCard(
  listId,
  cardId,
  card = { name, list_id, pos }
) {
  const updatedCard = await apiFetch(`lists/${listId}/cards/${cardId}`, {
    method: "PATCH",
    body: card,
  });
  return updatedCard;
}

// function for destroy a card
export async function destroyCard(listId, cardId) {
  const deletedCard = await apiFetch(`lists/${listId}/cards/${cardId}`, {
    method: "DELETE",
  });
  return deletedCard;
}

// function for sort a card
export async function sortCards(boardId, listId) {
  const board = await showBoard(boardId);
  const list = board.lists.find((list) => list.listId === listId);
  const cardsIds = list.cards.map((card) => card.cardId);
  console.log(cardsIds);
  const sortedCards = await apiFetch(`lists/${listId}/cards/sort`, {
    method: "POST",
    body: { ids: cardsIds },
  });
  return sortedCards;
}
