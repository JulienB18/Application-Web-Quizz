<?php
    header('Content-Type: application/json; charset=utf-8');
    require('../connexion.php');

    $select = 'SELECT * FROM question_geo ORDER BY RAND() LIMIT 1';     
    
    $result = $bdd->query($select);
    $result = $result->fetch(PDO::FETCH_OBJ);

    if($result->responseType == "region"){
        $select_reponse = 'SELECT * FROM france_region ORDER BY RAND() LIMIT 1';     
    
        $result_rep = $bdd->query($select_reponse);
        $result_rep = $result_rep->fetch(PDO::FETCH_OBJ);
    }
    if($result->responseType == "departement"){
        $select_reponse = 'SELECT * FROM france_departement ORDER BY RAND() LIMIT 1';     
    
        $result_rep = $bdd->query($select_reponse);
        $result_rep = $result_rep->fetch(PDO::FETCH_OBJ);
    }
    $question = str_replace('$randomValue', $result_rep->libelle, $result->libelle);
    $return = array($question, $result->map, $result->notOnlyOne, $result->score, $result->responseType, $result_rep->libelle);
    echo json_encode($return);
    //echo $result->libelle . "," . $result->map . "," . $result->notOnlyOne . "," . $result->score . ",". $result_rep->libelle;
?>