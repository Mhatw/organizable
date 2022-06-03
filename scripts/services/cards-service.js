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
