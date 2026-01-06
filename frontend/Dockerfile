# استخدم صورة Node.js الرسمية
FROM node:18-alpine

# قم بتعيين مجلد العمل
WORKDIR /app

# انسخ ملفات التعريف
COPY package*.json ./

# تثبيت الاعتماديات
RUN npm ci

# انسخ مجلد المصدر
COPY . .

# بناء التطبيق
RUN npm run build

# تعريض المنفذ
EXPOSE 3000

# أمر البدء
CMD ["npm", "start"]
