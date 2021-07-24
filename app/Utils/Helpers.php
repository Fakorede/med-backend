<?php

if (!function_exists('database_vars')) {
  function database_vars() {
    return parse_url('postgres://aqdmtemodfccdf:7fb8e18a02b09cdc983a0fadc988980db6233248f023274e5c4968aa59111490@ec2-23-23-164-251.compute-1.amazonaws.com:5432/d5mvosq9jg6iva');
  }
}

if (!function_exists('cleardb_vars')) {
  function cleardb_vars() {
    // => mysql://[username]:[password]@[host]/[database name]?reconnect=true
    return parse_url('mysql://b87294e5de2f38:19d4faca@us-cdbr-east-04.cleardb.com/heroku_c4c711f899b5c32?reconnect=true');
  }
}