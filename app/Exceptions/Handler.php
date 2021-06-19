<?php

namespace App\Exceptions;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
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
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Convert an authentication exception into a response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception) {
        return response()->json(['error' => 'Unauthenticated user'], 401);
    }

    /**
     * Render an exception into an HTTP response.
     * @param Request $request
     * @param Throwable $e
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|\Symfony\Component\HttpFoundation\Response
     * @throws Throwable
     */
    public function render($request, \Throwable $e)
    {
        if($request->expectsJson()) {
            if ($e instanceof NotFoundHttpException) {
                return response()->json(['error' => 'Resource not found'], 404);
            }
            if ($e instanceof MethodNotAllowedHttpException) {
                return response()->json(['error' => $e->getMessage()], 405);
            }

            if ($e instanceof UnauthorizedHttpException) {
                return response()->json(['error' => 'Unauthenticated', 'code' => 401], 401);
            }

            if ($e instanceof AuthorizationException) {
                return response()->json(['error' => $e->getMessage(), 'code' => 401], 401);
            }

            if ($e instanceof HttpException) {
                return response()->json(['error' => $e->getMessage(), 'code' => 403], 403);
            }
        }

        return parent::render($request, $e);
    }

}
