<?php
/**
 * WebGL Twitter Globe
 * A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
 *
 * 2015 (c) Greg Kedzierski
 * http://gregkedzierski.com
 * greg@gregkedzierski.com
 */

// Catch-all route
Route::get('/{all?}', 'DefaultController@index');
