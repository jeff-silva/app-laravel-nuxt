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