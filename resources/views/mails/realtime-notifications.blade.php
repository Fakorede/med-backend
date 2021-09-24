<!DOCTYPE html>
<html lang="en">
<head>
    <title>Magic Express Delivery</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        body, html {
            height: 100%;
        }
        a {
            font-size: 14px;
            line-height: 1.7;
            color: #666666;
            margin: 0px;
            transition: all 0.4s;
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
        }
        a:focus {
            outline: none !important;
        }

        a:hover {
            text-decoration: none;
            color: #57b846;
        }
        h1,h2,h3,h4,h5,h6 {
            margin: 0px;
        }
        p {
            font-size: 14px;
            line-height: 1.7;
            color: #666666;
            margin: 0px;
        }
        ul, li {
            margin: 0px;
            list-style-type: none;
        }
        label {
            display: block;
            margin: 0;
        }
        button {
            outline: none !important;
            border: none;
            background: transparent;
        }
        button:hover {
            cursor: pointer;
        }
        .limiter {
            width: 100%;
            margin: 0 auto;
        }
        .container-login100 {
            width: 100%;
            min-height: 100vh;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 15px;
            background: #ebeeef;
        }
        .wrap-login100 {
            width: 870px;
            background: #fff;
            overflow: hidden;
            position: relative;
        }
        .login100-form-title {
            width: 100%;
            position: relative;
            z-index: 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

            padding: 70px 15px 74px 15px;
        }
        .login100-form-title-1 {
            font-size: 30px;
            color: #fff;
            text-transform: uppercase;
            line-height: 1.2;
            text-align: center;
        }
        .login100-form-title::before {
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(54,84,99,0.7);
        }
        .login100-form {
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 23px 48px 43px 50px;
            line-height: 2em;
        }
        .container-login100-form-btn {
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
        }
        .top {
            margin-top: 40px;
        }
        .top a{
            text-decoration: none;
        }
        .login100-form-btn {
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            min-width: 160px;
            height: 50px;
            background-color: #115ece;
            border-radius: 25px;
            font-size: 16px;
            color: #fff;
            line-height: 1.2;

            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s;
        }

        .login100-form-btn:hover {
            background-color: #3d72bf;
        }
        @media (max-width: 576px) {
            .login100-form {
                padding: 43px 15px 57px 117px;
            }
        }
        @media (max-width: 480px) {
            .login100-form {
                padding: 43px 15px 57px 15px;
            }

            .label-input100 {
                text-align: left;
                position: unset;
                top: unset;
                left: unset;
                width: 100%;
                padding: 0 5px;
            }
        }
        .foot {
            padding: 23px 48px 43px 50px;
            float: right;
        }
    </style>
</head>
<body>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-form-title" style="background-image: url({{asset('dispatch.jpg')}});">
                    <span class="login100-form-title-1">
                      Magic Express Delivery
                    </span>
                </div>

                <div class="login100-form validate-form">
                    <div class="container-login100-form-btn">
                      <h3><strong>Hello!</strong></h3>
                    </div>
                    <div class="container-login100-form-btn">
                      {{ $msgData }}
                    </div>
                   
                      
                    <div class="container-login100-form-btn">
                      Thank you for using Magic Express Delivery!
                    </div>
                </div>
                <div class="text-right foot">
                    © 2021 Magic Express Delivery. 
                    {{--Powered by <a href="https://wellvis.org" target="_blank">Wellvis Health</a>--}}
                </div>
            </div>
        </div>
    </div>
</body>
</html>
