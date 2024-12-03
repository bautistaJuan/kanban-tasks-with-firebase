/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();

// eslint-disable-next-line no-undef
exports.createBoardData = onDocumentCreated(
  "users/{uid}/boards/{boardId}",
  async event => {
    const { uid, boardId } = event.params;
    const db = getFirestore();

    return await db.doc(`users/${uid}/boardsData/${boardId}`).set({
      tabs: {
        todos: [],
        inProgress: [],
        completed: [],
      },
      lastUpdated: FieldValue.serverTimestamp(),
    });
  }
);

// const logger = require("firebase-functions/logger");
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
