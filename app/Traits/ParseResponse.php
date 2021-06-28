<?php

namespace App\Traits;

trait ParseResponse
{
  /**
   * Return a success JSON response
   */
  protected function success($data=null, string $message = 'Request Successful', int $status = 200)
  {
    return response()->json([
      'message' => $message,
      'data' => $data,
    ], $status);
  }

  /**
   * Return an error JSON response
   */
  protected function error(string $message = 'Request Failed', int $status = 400, array $data = null)
  {
    return response()->json([
      'error' => $message,
      'data' => $data,
    ], $status);
  }

  /**
   * send response for a successful password reset/reset link.
   *
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
   */
  protected function sendResetLinkResponse($status)
  {
    return response()->json([
      'status' => trans($status)
    ]);
  }

  /**
   * send response for a failed password reset link/reset link.
   *
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
   */
  protected function sendResetLinkFailedResponse($status)
  {
    return response()->json([
      'status' => trans($status)
    ], 422);
  }
}