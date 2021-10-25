<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    use \App\Traits\Model;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function booted() {
        self::created(function($model) {
            (new \App\Mail\UserWelcome($model))->sendTo($model->email);
        });
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function setPasswordAttribute($value) {
		if (! $value) return;
		if (! \Hash::needsRehash($value)) return;
		return $this->attributes['password'] = \Hash::make($value);
	}

    public function passwordResetStart() {
        if (! $this->id) return;
        $this->remember_token = uniqid();
        $this->save();

        (new \App\Mail\UserPasswordReset($this))->sendTo($this->email);

        return $this;
    }

    public function validate($data=[]) {
        $rules = [
            'name' => ['required'],
            'email' => ['required'],
        ];

        // update
        if (isset($data['id']) AND !empty($data['id'])) {
            // 
        }

        // insert
        else {
            $rules['email'][] = 'unique:users,email';
            $rules['password'] = ['required'];
            // $rules['password_confirmation'] = ['required', 'same:password'];
        }

        return \Validator::make($data, $rules);
    }

    public function getVerifyLink() {
        return \URL::to("/verification/xxx/");
    }
}
