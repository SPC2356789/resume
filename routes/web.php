<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(['prefix' => '/', 'namespace' => '\App\Http\Controllers'], function () {
    Route::get('/hackmd/notes', 'HackmdController@getNotes');
});
/*
 * vue管控前端路由
 */
// 統整所有前端路由，交給 Vue 處理
Route::get('{any?}', function () {
    return view('welcome');
})->where('any', '^(?!.*\.(png|jpg|jpeg|gif|ico|css|js|woff|woff2|ttf|eot|svg))(|vue|vue/.*)$');
