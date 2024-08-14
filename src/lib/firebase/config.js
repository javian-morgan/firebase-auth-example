const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
  const configValue = config[key] + "";
  if (configValue.charAt(0) === '"') {
    config[key] = configValue.substring(1, configValue.length - 1);
  }
});


// This tutorial is doing too much with the yaml thing
// Took this straight from CLI and set export to be this config
const config2 = {
  apiKey: "AIzaSyAX5T1P2FxgRTJizhmGm3RmXRK0dcdNGMQ",
  authDomain: "frienlyeats-codelab-e0fb1.firebaseapp.com",
  projectId: "frienlyeats-codelab-e0fb1",
  storageBucket: "frienlyeats-codelab-e0fb1.appspot.com",
  messagingSenderId: "324549270019",
  appId: "1:324549270019:web:53f96e6f98ebee10d24c36"
};

export const firebaseConfig = config2;
