<?php
if (!session_id()) {
    session_start();
}
require_once '../app/init.php'; //ini adalah teknik bootstrapping

$app = new App;
