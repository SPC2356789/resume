# 第一階段：構建 Vue 前端
FROM node:18 AS frontend
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# 第二階段：構建 Laravel 後端
FROM php:8.1-fpm
# 安裝系統依賴和 PHP 擴展
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    libicu-dev \
    libzip-dev \
    && docker-php-ext-install pdo_mysql bcmath intl zip

# 安裝 Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 設置工作目錄
WORKDIR /var/www/html

# 複製所有專案檔案
COPY . .

# 從前端階段複製構建好的靜態資源（僅 build 目錄）
COPY --from=frontend /app/public/build /var/www/html/public/build

# 安裝 Laravel 依賴
RUN composer install --optimize-autoloader --no-dev

# 設置權限
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# 啟動應用
CMD ["sh", "-c", "php artisan serve --host=0.0.0.0"]