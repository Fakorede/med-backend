<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'phone_number' => ['required_if:role_id,1,2', 'numeric', 'unique:users'],
            'email' => ['required', 'email', 'unique:users'],
            'role_id' => ['required'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
    */
    public function messages()
    {
        return [
            'phone_number.required_if' => 'The phone number field is required.',
            'phone_number.size' => 'The phone number field must be 11 characters long',
            'phone_number.numeric' => 'The phone number field must contain a valid phone number',
        ];
    }
}
