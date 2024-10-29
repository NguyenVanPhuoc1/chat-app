<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasUuids;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array<int, string>
     */
    // Khi nào sử dụng $guarded: Thường được dùng khi bạn muốn cho phép hầu hết các thuộc tính có thể gán tự động (trừ một số ít), chẳng hạn như id.
    // Khi nào sử dụng $fillable: Dùng khi bạn muốn kiểm soát chặt chẽ các thuộc tính nào có thể gán tự động (chỉ cho phép một số thuộc tính cụ thể).
    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
