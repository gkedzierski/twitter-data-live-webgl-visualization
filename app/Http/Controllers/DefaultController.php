<?php
/**
 * WebGL Twitter Globe
 * A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
 *
 * 2015 (c) Greg Kedzierski
 * http://gregkedzierski.com
 * greg@gregkedzierski.com
 */

namespace App\Http\Controllers;

/**
 * Default application controller
 */
class DefaultController extends Controller
{
	/**
	 * Show the main application view
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('index');
	}
}
