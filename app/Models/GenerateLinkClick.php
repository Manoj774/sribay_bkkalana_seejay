<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GenerateLinkClick extends Model
{
    protected $fillable = [
        'user_id','click_link','user_agent','ip_address',
    ];
}
