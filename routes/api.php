<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('test', 'App\Http\Controllers\AppController@test');
Route::post('login', 'App\Http\Controllers\AppController@login');
Route::post('logout', 'App\Http\Controllers\AppController@logout');
Route::post('refresh', 'App\Http\Controllers\AppController@refresh');
Route::post('me', 'App\Http\Controllers\AppController@me');
Route::post('register', 'App\Http\Controllers\AppController@register');
Route::get('endpoints', 'App\Http\Controllers\AppController@endpoints');
Route::post('password-reset-start', 'App\Http\Controllers\AppController@passwordResetStart');
Route::post('password-reset-change', 'App\Http\Controllers\AppController@passwordResetChange');

Route::get('pages/search', 'App\Http\Controllers\PagesController@search');
Route::get('pages/find/{id}', 'App\Http\Controllers\PagesController@find');
Route::post('pages/save', 'App\Http\Controllers\PagesController@save');
Route::post('pages/valid', 'App\Http\Controllers\PagesController@valid');
Route::get('pages/delete/{id}', 'App\Http\Controllers\PagesController@delete');
Route::get('pages/clone/{id}', 'App\Http\Controllers\PagesController@clone');
Route::get('pages/export', 'App\Http\Controllers\PagesController@export');
Route::get('pages/page', 'App\Http\Controllers\PagesController@page');