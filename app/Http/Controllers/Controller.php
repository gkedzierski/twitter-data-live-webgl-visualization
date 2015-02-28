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

use Illuminate\Foundation\Bus\DispatchesCommands;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;

/**
 * Abstract controller
 */
abstract class Controller extends BaseController
{
    use DispatchesCommands, ValidatesRequests;
}
