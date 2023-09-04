# Utilisez une image Node.js comme image de base
FROM node:14

# Créez un répertoire de travail à l'intérieur de l'image
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel l'application Node.js s'exécute (par défaut : 3000)
EXPOSE 3000

# Commande pour démarrer l'application Node.js
CMD ["npm", "start"]
