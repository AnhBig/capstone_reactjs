import axios from "axios";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MyIsIkhldEhhblN0cmluZyI6IjAzLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0ODkwODgwMDAwMCIsIm5iZiI6MTcyMTkyNjgwMCwiZXhwIjoxNzQ5MDU2NDAwfQ.4vXhg2MxiO2LMiVclRYdrEmoivaG2QbYXjyqWf9mxGk";
const AUTHORIZATION =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzNjA5IiwiZW1haWwiOiJzdHJpbmciLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE3MzcwNDAzNDUsImV4cCI6MTczNzY0NTE0NX0.PW-hlW_AqorCiu6FJAY167Vm1ohiCxTxEH-mRGrUaJI";

export const apiInstance = (settings = {}) =>
  axios.create({
    ...settings,
    headers: {
      ...settings.headers,
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: AUTHORIZATION,
    },
  });
