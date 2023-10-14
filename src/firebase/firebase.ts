import admin from 'firebase-admin';
import serviceAccount from '../../splitwisely-c9506-firebase-adminsdk-2aqt1-1daa324a90.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const dbAdmin = admin.firestore();
const authAdmin = admin.auth();

export { dbAdmin, authAdmin };
