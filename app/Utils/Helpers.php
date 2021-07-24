<?php

if (!function_exists('database_vars')) {
  function database_vars() {
    return parse_url('postgres://wzadsrhhjhwwkb:c1d6b5ef4875f49a795c2c19abef28cee696bf0a4edc8caaec0b3566bc06c8e0@ec2-34-204-128-77.compute-1.amazonaws.com:5432/d61bksf2tl9th2');
  }
}

if (!function_exists('cleardb_vars')) {
  function cleardb_vars() {
    // => mysql://[username]:[password]@[host]/[database name]?reconnect=true
    return parse_url('mysql://b87294e5de2f38:19d4faca@us-cdbr-east-04.cleardb.com/heroku_c4c711f899b5c32?reconnect=true');
  }
}