import "server-only";
import admin from "firebase-admin";

/**
 * Firebase Admin SDK
 * Inicialização do firebase Admin SDK
 * Roda apenas no ambiente server/Node.js (Server Components/API Routes)
 */
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY
                ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
                : undefined,
        }),
    });
}

export { admin };
