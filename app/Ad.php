<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    protected $fillable = array('id','type','name','email','allow_mails','contact_number','category','city','title','description','price');
}
