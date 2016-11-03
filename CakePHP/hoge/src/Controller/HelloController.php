<?php
namespace App\Controller;

use App\Controller\AppController;

class HelloController extends AppController {
  public function index() {
    $str = $this->request->data('text1');
    $msg = 'typed: '. $str;
    if ($str == null) {
      $msg = "please type...";
    }
    $this->set('message', $msg);
  }
}