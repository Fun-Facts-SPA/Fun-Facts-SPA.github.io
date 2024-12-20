import { get, post, put, del } from "./api.js";

const endpoints = {
  facts: "/classes/funFacts",
  likes: "/data/likes",
  fact: "/data/facts",
};

export function getAllFacts() {
  return get(`${endpoints.facts}?order=createdAt`);
}

export function getFactById(id) {
  return get(`${endpoints.facts}/${id}`);
}

export function createFact(data) {
  const user = getUserData();
  data.ownerId = {
    __type: "Pointer",
    className: "_User",
    objectId: user.objectId,
  };
  return post(endpoints.facts, data);
}

export function editFact(id, data) {
  return put(`${endpoints.facts}/${id}`, data);
}

export function deleteFactById(id) {
  return del(`${endpoints.facts}/${id}`);
}

export function likeFact(factId) {
  return post(endpoints.likes, { factId });
}
export function getIsLiked(factId, userId) {
  return get(
    `${endpoints.likes}?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
export function getAllLikes(factId) {
  return get(
    `${endpoints.likes}?where=factId%3D%22${factId}%22&distinct=_ownerId&count`
  );
}
