import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";
import { createBoard, indexBoards, showBoard } from "./boards-service.js";
import { login } from "./sessions-service.js";
import { createUser } from "./users-service.js";

// function for create a card
export async function createCard(listId, card = { name }) {
  const newCard = await apiFetch(`lists/${listId}/cards`, { body: card });
  console.log(newCard);
  return newCard;
}

// function for show a card
export async function showCard(listId, cardId) {
  const card = await apiFetch(`lists/${listId}/cards/${cardId}`);
  console.log(card);
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
  console.log(updatedCard);
  return updatedCard;
}

// function for destroy a card
export async function destroyCard(listId, cardId) {
  const deletedCard = await apiFetch(`lists/${listId}/cards/${cardId}`, {
    method: "DELETE",
  });
  console.log(deletedCard);
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
  console.log(sortedCards);
  return sortedCards;
}
