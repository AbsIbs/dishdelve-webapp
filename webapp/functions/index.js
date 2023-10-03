/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
// Initialize the Firebase Admin SDK.
const {initializeApp} = require("firebase-admin/app");
const {onRequest} = require("firebase-functions/v2/https");
initializeApp();


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const fetch = require("node-fetch");
const cors = require("cors")({origin: true});

exports.getMDFile = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const mdFileUrl = req.query.url;
      const response = await fetch(mdFileUrl);
      const mdContent = await response.text();
      res.set("Content-Type", "text/plain");
      res.status(200).send(mdContent);
    } catch (error) {
      console.error("Error fetching MD file:", error);
      res.status(500).send("Error fetching MD file");
    }
  });
});
