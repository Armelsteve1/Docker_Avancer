# Utilisez une image Node.js comme image de base
FROM node:14

# Créez un répertoire de travail à l'intérieur de l'image
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances avec npm ci
RUN npm ci

# Copiez le reste des fichiers de l'application
COPY . .

# Créez un utilisateur non root
RUN useradd -r -u 1001 appuser

# Définissez l'utilisateur non root comme propriétaire du répertoire de travail
RUN chown -R appuser:appuser /app

# Passez à l'utilisateur non root
USER appuser

# Définissez une variable d'environnement pour le port
ENV PORT=3000

# Exposez le port configuré
EXPOSE $PORT

# Commande pour démarrer l'application Node.js
CMD ["npm", "start"]
