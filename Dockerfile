# 使用官方 PHP 8.1 鏡像
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
COPY . .

# 安裝 Laravel 依賴
RUN composer install --optimize-autoloader --no-dev

# 設置權限
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# 啟動應用
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]