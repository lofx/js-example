<?php

/*
 * Stupid question for invoking class inherit in php
 */

Class A extends Base {

  // XXX other functions

  public function Search(SearchApiQueryInterface $query){
    // XXXX operation.
    return $this->searchAdvised($query);
  }
  
   public function searchAdvised($query) {
     $search = pharosapiclient('search');
     // xxx
     $search_result = $search->execute();
     $hits = $search_result->getHits();
     // XXX 
     $ret['results'] = $hits;
     return $ret;
   }
}

Class B extends A {
  public function searchAdvised($query) {
    $param = getParam();
    if ($param == 'title') {
      $ret = parent::searchAdvised($query);
      return $ret;
    }
    else {
      $browse = pharosapiclient('browse');
      // xxx
      $browse_result = $browse->execute();
      $hits = $browse_result->getHits();
      // XXX 
      $ret['results'] = $hits;
      return $ret;
    }
  }
}