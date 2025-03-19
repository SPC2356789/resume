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

/*
 * vue管控前端路由
 */
Route::get('/', function () {
    return view('welcome');
})->where('any', '.*');
Route::group(['prefix' => '/', 'namespace' => '\App\Http\Controllers'], function () {
    Route::get('/hackmd/notes', 'HackmdController@getNotes');
});
