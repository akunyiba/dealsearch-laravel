<?php

namespace App\Http\Controllers\Ads;

use Illuminate\Http\Request;
use App\City;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class CitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cities = City::all();
        return $cities;
    }
}
