<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        if (request()->is('api/*')) {
            $this->renderable(function (\Exception $e, $request) {
                $resp = [
                    'message' => '',
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'validation' => [],
                ];

                if ('production' != config('app.env')) {
                    $resp['debug'] = array_map(function($debug) {
                        // return $debug;

                        return "{$debug['file']}:{$debug['line']}";
                    }, debug_backtrace());
                }

                $json = json_decode($e->getMessage(), true);
                if (is_array($json)) {
                    // 
                }

                else {
                    $resp['message'] = $e->getMessage();
                }
                
                return response()->json($resp, 500);
            });
        }

        $this->reportable(function (Throwable $e) {
            //
        });
    }
}
