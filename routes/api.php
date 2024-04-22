<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;
use App\Http\Controllers\ProductsController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::get('products', [ProductsController::class, 'index']);

Route::get('products/{product}', [ProductsController::class, 'show']);

Route::post('products', [ProductsController::class, 'store']);

Route::put('products/{product}', [ProductsController::class, 'update']);

Route::delete('products/{product}', [ProductsController::class, 'delete']);
